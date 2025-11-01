import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import icons from "@/lib/icons";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface Activity {
  id: string;
  title: string;
  description: string | null;
  location: string;
  activity_date: string;
  start_time: string;
  end_time: string;
  image_url: string | null;
  status: string;
  participation_status?: "pending" | "checked_in" | "completed";
  registered_at?: string | null;
  checked_in_at?: string | null;
}

const ActivityParticipation = () => {
  const { toast } = useToast();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserAndActivities = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        await fetchActivities(session.user.id);
      } else {
        setLoading(false);
      }
    };

    fetchUserAndActivities();
  }, []);

  const fetchActivities = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("activity_participations")
        .select(`
          id,
          status,
          registered_at,
          checked_in_at,
          activity_id,
          offline_activities (
            id,
            title,
            description,
            location,
            activity_date,
            start_time,
            end_time,
            image_url,
            status
          )
        `)
        .eq("user_id", userId)
        .order("registered_at", { ascending: false });

      if (error) throw error;

      const formattedActivities = data?.map((item: any) => ({
        id: item.offline_activities.id,
        title: item.offline_activities.title,
        description: item.offline_activities.description,
        location: item.offline_activities.location,
        activity_date: item.offline_activities.activity_date,
        start_time: item.offline_activities.start_time,
        end_time: item.offline_activities.end_time,
        image_url: item.offline_activities.image_url,
        status: item.offline_activities.status,
        participation_status: item.status,
        registered_at: item.registered_at,
        checked_in_at: item.checked_in_at,
      })) || [];

      setActivities(formattedActivities);
    } catch (error: any) {
      toast({
        title: "获取失败",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: "pending" | "checked_in" | "completed") => {
    const statusConfig = {
      pending: { label: "未签到", variant: "secondary" as const, color: "text-muted-foreground" },
      checked_in: { label: "已签到", variant: "default" as const, color: "text-primary" },
      completed: { label: "活动结束", variant: "outline" as const, color: "text-muted-foreground" },
    };

    const config = statusConfig[status];
    return (
      <Badge variant={config.variant} className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const handleCheckIn = (activityId: string) => {
    toast({
      title: "扫码签到",
      description: "请在现场使用小程序扫描活动二维码进行签到",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <img src={icons.ArrowLeft} alt="" className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold">线下活动参与</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {!user ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">请先登录查看您的活动参与记录</p>
            <Link to="/auth">
              <Button>立即登录</Button>
            </Link>
          </Card>
        ) : loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4 animate-pulse">
                <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </Card>
            ))}
          </div>
        ) : activities.length === 0 ? (
          <Card className="p-8 text-center">
            <img src={icons.Calendar} alt="" className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">暂无活动参与记录</p>
            <p className="text-sm text-muted-foreground mt-2">报名参加活动后，记录将显示在这里</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden">
                {/* Activity Image */}
                {activity.image_url && (
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img
                      src={activity.image_url}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      {activity.participation_status && getStatusBadge(activity.participation_status)}
                    </div>
                  </div>
                )}

                {/* Activity Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">{activity.title}</h3>
                  
                  {activity.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {activity.description}
                    </p>
                  )}

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <img src={icons.Calendar} alt="" className="w-4 h-4" />
                      <span>
                        {format(new Date(activity.activity_date), "yyyy年MM月dd日", { locale: zhCN })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <img src={icons.Clock} alt="" className="w-4 h-4" />
                      <span>{activity.start_time.slice(0, 5)} - {activity.end_time.slice(0, 5)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <img src={icons.MapPin} alt="" className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  {/* Status Info */}
                  <div className="bg-muted/50 rounded-lg p-3 space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">报名时间：</span>
                      <span className="text-foreground">
                        {activity.registered_at 
                          ? format(new Date(activity.registered_at), "yyyy-MM-dd HH:mm", { locale: zhCN })
                          : "-"}
                      </span>
                    </div>
                    {activity.checked_in_at && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">签到时间：</span>
                        <span className="text-primary font-medium">
                          {format(new Date(activity.checked_in_at), "yyyy-MM-dd HH:mm", { locale: zhCN })}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  {activity.participation_status === "pending" && activity.status === "upcoming" && (
                    <Button 
                      onClick={() => handleCheckIn(activity.id)}
                      className="w-full mt-4"
                      variant="default"
                    >
                      <img src={icons.QrCode} alt="" className="w-4 h-4 mr-2" />
                      现场扫码签到
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityParticipation;

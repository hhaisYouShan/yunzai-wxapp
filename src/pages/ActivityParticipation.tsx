import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { CheckInDialog } from "@/components/CheckInDialog";

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
  const [checkInDialog, setCheckInDialog] = useState<{
    open: boolean;
    activityId: string;
    activityTitle: string;
  }>({
    open: false,
    activityId: "",
    activityTitle: "",
  });

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

  const handleCheckIn = (activityId: string, activityTitle: string) => {
    setCheckInDialog({
      open: true,
      activityId,
      activityTitle,
    });
  };

  const handleCheckInConfirm = (code: string) => {
    toast({
      title: "签到成功",
      description: "您已成功签到",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background pb-20">
      {/* Premium Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(0_79%_65%_/_0.2),transparent_50%)]" />
        <div className="relative px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">我的活动</h1>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Sparkles className="h-4 w-4" />
            <p className="text-sm">已报名 {activities.length} 场活动</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {!user ? (
          <Card className="p-8 text-center border-2 border-dashed">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <p className="text-foreground font-medium mb-2">探索精彩活动</p>
            <p className="text-muted-foreground text-sm mb-4">登录后查看您的活动记录</p>
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90">立即登录</Button>
            </Link>
          </Card>
        ) : loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 border-0 shadow-md">
                <div className="animate-pulse space-y-4">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              </Card>
            ))}
          </div>
        ) : activities.length === 0 ? (
          <Card className="p-12 text-center border-2 border-dashed">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted/50">
              <Sparkles className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">暂无活动记录</h3>
            <p className="text-muted-foreground text-sm mb-6">
              快去探索并报名参加精彩的线下活动吧！
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              浏览活动
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {activity.image_url && (
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5">
                    <img
                      src={activity.image_url}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      {activity.participation_status &&
                        getStatusBadge(activity.participation_status)}
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{activity.title}</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">
                        {format(new Date(activity.activity_date), "yyyy年MM月dd日", {
                          locale: zhCN,
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">
                        {activity.start_time} - {activity.end_time}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{activity.location}</span>
                    </div>
                  </div>

                  {activity.description && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {activity.description}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 pt-5 border-t border-border/50">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">报名时间</p>
                        <p className="text-sm font-semibold">
                          {activity.registered_at
                            ? format(
                                new Date(activity.registered_at),
                                "MM月dd日 HH:mm",
                                { locale: zhCN }
                              )
                            : "-"}
                        </p>
                      </div>

                      {activity.participation_status === "pending" && (
                        <Button
                          onClick={() => handleCheckIn(activity.id, activity.title)}
                          size="lg"
                          className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground shadow-[0_4px_20px_hsla(0,79%,55%,0.3)] hover:shadow-[0_6px_24px_hsla(0,79%,55%,0.4)] transition-all"
                        >
                          <Sparkles className="h-4 w-4 mr-2" />
                          立即签到
                        </Button>
                      )}

                      {activity.participation_status === "checked_in" &&
                        activity.checked_in_at && (
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground mb-1">签到时间</p>
                            <p className="text-sm font-semibold text-primary">
                              {format(
                                new Date(activity.checked_in_at),
                                "MM月dd日 HH:mm",
                                { locale: zhCN }
                              )}
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <CheckInDialog
        open={checkInDialog.open}
        onOpenChange={(open) =>
          setCheckInDialog((prev) => ({ ...prev, open }))
        }
        activityTitle={checkInDialog.activityTitle}
        onCheckIn={handleCheckInConfirm}
      />
    </div>
  );
};

export default ActivityParticipation;

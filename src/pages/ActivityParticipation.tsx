import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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

// 模拟活动数据
const mockActivities: Activity[] = [
  {
    id: "1",
    title: "产品设计工作坊",
    description: "探索最新的产品设计理念和方法，与行业专家面对面交流，提升设计思维能力。",
    location: "北京市朝阳区望京SOHO T3座 12层",
    activity_date: "2024-12-20",
    start_time: "14:00:00",
    end_time: "17:00:00",
    image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    status: "active",
    participation_status: "pending",
    registered_at: "2024-12-15T10:30:00",
    checked_in_at: null,
  },
  {
    id: "2",
    title: "技术分享会：AI应用实践",
    description: "深入了解人工智能在实际项目中的应用，分享最佳实践和踩坑经验。",
    location: "上海市浦东新区陆家嘴环路1000号",
    activity_date: "2024-12-18",
    start_time: "19:00:00",
    end_time: "21:00:00",
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
    status: "active",
    participation_status: "checked_in",
    registered_at: "2024-12-10T15:20:00",
    checked_in_at: "2024-12-18T18:45:00",
  },
  {
    id: "3",
    title: "创业者沙龙",
    description: "汇聚创业精英，分享创业心得，探讨商业模式，寻找合作机会。",
    location: "深圳市南山区科技园南区深圳湾创业广场",
    activity_date: "2024-12-10",
    start_time: "15:30:00",
    end_time: "18:00:00",
    image_url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
    status: "completed",
    participation_status: "completed",
    registered_at: "2024-12-05T09:15:00",
    checked_in_at: "2024-12-10T15:20:00",
  },
];

const ActivityParticipation = () => {
  const { toast } = useToast();
  const [activities] = useState<Activity[]>(mockActivities);
  const [checkInDialog, setCheckInDialog] = useState<{
    open: boolean;
    activityId: string;
    activityTitle: string;
  }>({
    open: false,
    activityId: "",
    activityTitle: "",
  });

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

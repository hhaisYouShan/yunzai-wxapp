import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageViewer } from "@/components/ImageViewer";

const AlumniActivity = () => {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const fromHistory = searchParams.get('from') === 'history';
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const activities: Record<string, any> = {
    "1": {
      id: 1,
      title: "2024春季校友交流会",
      date: "2024年3月20日",
      time: "14:00 - 18:00",
      location: "北京·国贸",
      address: "北京市朝阳区建国门外大街1号国贸大厦",
      participants: 120,
      description: "汇聚各行业精英，分享创业经验与行业洞察",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      details: `
        本次春季校友交流会将汇聚来自金融、科技、制造等各行业的精英校友，共同探讨行业发展趋势，分享创业经验与管理智慧。

        活动议程：
        14:00-14:30 签到与茶歇
        14:30-15:30 主题演讲：数字化转型的机遇与挑战
        15:30-16:30 圆桌讨论：创新创业经验分享
        16:30-17:30 自由交流与资源对接
        17:30-18:00 总结与合影

        本次活动为校友提供了一个高质量的交流平台，期待您的参与！
      `,
      agenda: [
        { time: "14:00-14:30", title: "签到与茶歇" },
        { time: "14:30-15:30", title: "主题演讲：数字化转型的机遇与挑战" },
        { time: "15:30-16:30", title: "圆桌讨论：创新创业经验分享" },
        { time: "16:30-17:30", title: "自由交流与资源对接" },
        { time: "17:30-18:00", title: "总结与合影" },
      ],
    },
    "2": {
      id: 2,
      title: "华南校友企业参访",
      date: "2024年4月15日",
      time: "09:00 - 17:00",
      location: "深圳·南山",
      address: "深圳市南山区科技园南区",
      participants: 80,
      description: "深入优秀校友企业，学习创新管理模式",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      details: `
        本次企业参访活动将带领校友深入华南地区优秀校友企业，近距离了解企业运营管理模式，学习创新发展经验。

        参访企业包括科技创新企业、新能源公司等行业标杆，通过实地考察、高管座谈等形式，为校友提供学习交流的机会。

        活动安排：
        09:00 集合出发
        10:00-12:00 企业A参访与交流
        12:00-13:30 午餐与休息
        13:30-16:00 企业B参访与交流
        16:00-17:00 总结与返程

        名额有限，欢迎报名参加！
      `,
      agenda: [
        { time: "09:00", title: "集合出发" },
        { time: "10:00-12:00", title: "企业A参访与交流" },
        { time: "12:00-13:30", title: "午餐与休息" },
        { time: "13:30-16:00", title: "企业B参访与交流" },
        { time: "16:00-17:00", title: "总结与返程" },
      ],
    },
    "3": {
      id: 3,
      title: "金融行业校友论坛",
      date: "2024年5月10日",
      time: "13:30 - 17:30",
      location: "上海·陆家嘴",
      address: "上海市浦东新区陆家嘴环路1000号",
      participants: 150,
      description: "探讨金融科技发展趋势，把握投资机遇",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      details: `
        本次金融行业校友论坛将邀请金融领域的资深校友，共同探讨金融科技发展趋势、投资策略与风险管理等热点话题。

        论坛特色：
        - 行业大咖主题演讲
        - 热点话题圆桌讨论
        - 投资项目路演
        - 一对一商务洽谈

        活动流程：
        13:30-14:00 签到
        14:00-15:00 主题演讲：金融科技的未来
        15:00-16:00 圆桌论坛：投资趋势与机会
        16:00-17:00 项目路演与交流
        17:00-17:30 自由交流

        期待您的莅临！
      `,
      agenda: [
        { time: "13:30-14:00", title: "签到" },
        { time: "14:00-15:00", title: "主题演讲：金融科技的未来" },
        { time: "15:00-16:00", title: "圆桌论坛：投资趋势与机会" },
        { time: "16:00-17:00", title: "项目路演与交流" },
        { time: "17:00-17:30", title: "自由交流" },
      ],
    },
  };

  const activity = activities[activityId || "1"];

  // 保存浏览历史
  useEffect(() => {
    if (activity) {
      const historyItem = {
        id: activity.id,
        title: activity.title,
        date: activity.date,
        location: activity.location,
        image: activity.image,
        viewedAt: Date.now(),
      };

      const stored = localStorage.getItem('alumni-activity-history');
      let history = stored ? JSON.parse(stored) : [];
      
      // 移除同ID的旧记录
      history = history.filter((item: any) => item.id !== activity.id);
      
      // 添加新记录到开头，保留最近20条
      history = [historyItem, ...history].slice(0, 20);
      
      localStorage.setItem('alumni-activity-history', JSON.stringify(history));
    }
  }, [activityId]);

  if (!activity) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-6">
          <p className="text-muted-foreground">活动不存在</p>
          <Button onClick={() => navigate("/alumni")} className="mt-4">
            返回校友会
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Image */}
      <div className="relative w-full aspect-[3/4] max-w-2xl mx-auto">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsViewerOpen(true)}
        />
        {!fromHistory && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/alumni")}
              className="absolute top-4 left-4 text-white bg-black/30 backdrop-blur-sm hover:bg-black/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回
            </Button>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="font-bold text-xl mb-2">{activity.title}</h2>
              <p className="text-sm opacity-90 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {activity.date}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Image Viewer */}
      <ImageViewer
        src={activity.image}
        alt={activity.title}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />

      {/* Activity Info */}
      <div className="px-4 -mt-6">
        <Card className="p-4 shadow-[var(--shadow-medium)] mb-6">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{activity.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-secondary" />
                <span>{activity.time}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">{activity.location}</p>
                <p className="text-xs">{activity.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-secondary" />
              <span>{activity.participants}人已报名</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {activity.details}
            </p>
          </div>
        </Card>

        {/* Agenda */}
        <Card className="p-4 mb-6">
          <h2 className="font-bold text-foreground mb-3">活动议程</h2>
          <div className="space-y-3">
            {activity.agenda.map((item: any, index: number) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">
                  {item.time}
                </div>
                <div className="flex-1 text-sm text-muted-foreground">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Button */}
        {!fromHistory && (
          <Button
            className="w-full bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-dark)))] hover:opacity-90 shadow-[var(--shadow-red)]"
            size="lg"
          >
            立即报名
          </Button>
        )}
      </div>
    </div>
  );
};

export default AlumniActivity;

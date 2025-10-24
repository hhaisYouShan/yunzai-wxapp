import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const VipCourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 模拟数据
  const vipCourse = {
    id: 1,
    title: "企业家高峰论坛",
    speaker: "商界大咖",
    date: "2025-11-15",
    time: "14:00-17:00",
    poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    location: "国际会议中心",
    description: "汇聚商界精英，分享创业心得与管理智慧，探讨行业前沿趋势。",
    agenda: [
      { time: "14:00-14:30", content: "开幕致辞" },
      { time: "14:30-15:30", content: "主题演讲：企业战略创新" },
      { time: "15:30-16:30", content: "圆桌论坛：数字化转型实践" },
      { time: "16:30-17:00", content: "互动交流" },
    ],
    registered: 128,
    maxCapacity: 200,
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center px-4 py-3 gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            aria-label="返回"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">大咖课详情</h1>
        </div>
      </div>

      {/* Poster */}
      <div className="relative h-64">
        <img
          src={vipCourse.poster}
          alt={vipCourse.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
          <Star className="w-3 h-3 mr-1" />
          大咖课
        </Badge>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="font-bold text-xl mb-2">{vipCourse.title}</h2>
          <p className="text-sm opacity-90">{vipCourse.speaker}</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="px-4 py-4 space-y-4">
        {/* Basic Info */}
        <Card className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">时间</p>
              <p className="font-medium">{vipCourse.date} {vipCourse.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">地点</p>
              <p className="font-medium">{vipCourse.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">报名人数</p>
              <p className="font-medium">{vipCourse.registered}/{vipCourse.maxCapacity}人</p>
            </div>
          </div>
        </Card>

        {/* Description */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">课程简介</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {vipCourse.description}
          </p>
        </Card>

        {/* Agenda */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">课程议程</h3>
          <div className="space-y-3">
            {vipCourse.agenda.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.time}</p>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 max-w-md mx-auto">
        <Button 
          className="w-full"
          onClick={() => navigate(`/vip-course/${id}/register`)}
        >
          立即报名
        </Button>
      </div>
    </div>
  );
};

export default VipCourseDetail;

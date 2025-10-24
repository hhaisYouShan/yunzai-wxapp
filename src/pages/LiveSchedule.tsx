import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, Clock, Users, Video, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const LiveSchedule = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upcoming");

  const liveClasses = [
    {
      id: 1,
      title: "金融科技创新与实践",
      instructor: "张教授",
      date: "2025-10-25",
      startTime: "19:00",
      endTime: "21:00",
      duration: "2小时",
      viewers: 1280,
      category: "金融科技",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      description: "深入探讨金融科技在银行业的应用实践，分析区块链、AI等技术的落地案例。",
    },
    {
      id: 2,
      title: "企业数字化转型战略",
      instructor: "王明华教授",
      date: "2025-10-26",
      startTime: "14:00",
      endTime: "16:30",
      duration: "2.5小时",
      viewers: 980,
      category: "数字化",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      description: "结合实际案例，解析企业数字化转型的关键路径和实施方法。",
    },
    {
      id: 3,
      title: "商业模式创新与设计思维",
      instructor: "李雪梅教授",
      date: "2025-10-27",
      startTime: "19:30",
      endTime: "21:30",
      duration: "2小时",
      viewers: 1560,
      category: "战略管理",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      description: "解读新商业环境下的创新商业模式，培养设计思维能力。",
    },
    {
      id: 4,
      title: "资本运作与企业上市路径",
      instructor: "陈章博博士",
      date: "2025-10-28",
      startTime: "20:00",
      endTime: "22:00",
      duration: "2小时",
      viewers: 2100,
      category: "金融投资",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      description: "系统讲解企业上市的全流程，分享资本运作的实战经验。",
    },
    {
      id: 5,
      title: "人工智能在教育领域的应用",
      instructor: "赵教授",
      date: "2025-10-22",
      startTime: "19:00",
      endTime: "21:00",
      duration: "2小时",
      viewers: 1850,
      category: "AI技术",
      status: "past",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      description: "探讨AI技术如何赋能教育创新，提升学习效率。",
    },
    {
      id: 6,
      title: "区块链技术与金融创新",
      instructor: "刘博士",
      date: "2025-10-20",
      startTime: "14:00",
      endTime: "16:00",
      duration: "2小时",
      viewers: 1620,
      category: "区块链",
      status: "past",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      description: "深入解析区块链底层技术，探索金融领域的创新应用。",
    },
  ];

  const filteredClasses = liveClasses.filter(cls => cls.status === activeTab);

  const handleSubscribe = (classId: number, classTitle: string) => {
    toast({
      title: "预约成功",
      description: `已预约《${classTitle}》，开播前我们会提醒您`,
    });
  };

  const handleWatchReplay = (classId: number) => {
    navigate(`/courses/${classId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 py-4 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold">直播预告</h1>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-primary-foreground/10 border border-primary-foreground/20">
            <TabsTrigger value="upcoming" className="flex-1">即将直播</TabsTrigger>
            <TabsTrigger value="past" className="flex-1">往期回放</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {filteredClasses.map((liveClass) => (
          <Card 
            key={liveClass.id} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 cursor-pointer" onClick={() => navigate(`/courses/${liveClass.id}`)}>
              <img
                src={liveClass.image}
                alt={liveClass.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Date Badge */}
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {liveClass.date} {liveClass.startTime}
              </div>

              {/* Viewers Count */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Users className="w-3 h-3" />
                {liveClass.viewers}人{activeTab === "upcoming" ? "预约" : "观看"}
              </div>

              {/* Play Icon for past classes */}
              {activeTab === "past" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground flex-1 pr-2">
                  {liveClass.title}
                </h3>
                <Badge variant="secondary">{liveClass.category}</Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {liveClass.description}
              </p>

              {/* Info Row */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="font-medium text-foreground">{liveClass.instructor}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {liveClass.duration}
                </span>
              </div>

              {/* Action Button */}
              {activeTab === "upcoming" ? (
                <Button 
                  className="w-full"
                  onClick={() => handleSubscribe(liveClass.id, liveClass.title)}
                >
                  <Bell className="w-4 h-4 mr-2" />
                  立即预约
                </Button>
              ) : (
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => handleWatchReplay(liveClass.id)}
                >
                  <Video className="w-4 h-4 mr-2" />
                  观看回放
                </Button>
              )}
            </div>
          </Card>
        ))}

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">
              {activeTab === "upcoming" ? "暂无即将直播的课程" : "暂无往期回放"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSchedule;

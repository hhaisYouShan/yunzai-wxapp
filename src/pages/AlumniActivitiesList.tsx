import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Calendar, MapPin, Users as UsersIcon } from "lucide-react";

interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: number;
  description: string;
  image: string;
  status: "upcoming" | "ongoing" | "completed";
}

const AlumniActivitiesList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const activities: Activity[] = [
    {
      id: 1,
      title: "2024春季校友交流会",
      date: "2024年3月20日",
      location: "北京·国贸",
      participants: 120,
      description: "汇聚各行业精英，分享创业经验与行业洞察",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=480&fit=crop",
      status: "upcoming",
    },
    {
      id: 2,
      title: "华南校友企业参访",
      date: "2024年4月15日",
      location: "深圳·南山",
      participants: 80,
      description: "深入优秀校友企业，学习创新管理模式",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=480&fit=crop",
      status: "upcoming",
    },
    {
      id: 3,
      title: "金融行业校友论坛",
      date: "2024年5月10日",
      location: "上海·陆家嘴",
      participants: 150,
      description: "探讨金融科技发展趋势，把握投资机遇",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=480&fit=crop",
      status: "upcoming",
    },
    {
      id: 4,
      title: "校友高尔夫友谊赛",
      date: "2024年2月18日",
      location: "广州·南沙",
      participants: 45,
      description: "挥杆竞技，增进友谊，享受运动乐趣",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=480&fit=crop",
      status: "completed",
    },
    {
      id: 5,
      title: "新年校友联谊晚宴",
      date: "2024年1月20日",
      location: "北京·王府井",
      participants: 200,
      description: "辞旧迎新，共话发展，展望美好未来",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=480&fit=crop",
      status: "completed",
    },
  ];

  const filteredActivities = activities.filter((activity) => {
    if (activeTab === "all") return true;
    return activity.status === activeTab;
  });

  const getStatusBadge = (status: Activity["status"]) => {
    const config = {
      upcoming: { label: "即将开始", className: "bg-primary text-primary-foreground" },
      ongoing: { label: "进行中", className: "bg-secondary text-secondary-foreground" },
      completed: { label: "已结束", className: "bg-muted text-muted-foreground" },
    };
    return config[status];
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Helmet>
        <title>校友会活动 | 国研校友平台</title>
        <meta name="description" content="浏览国研校友会历史活动和即将举办的活动，参与交流会、论坛、企业参访等丰富活动。" />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-b border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/alumni")}
            className="hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">校友会活动</h1>
        </div>
      </header>

      <main className="px-4 py-6">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">全部活动</TabsTrigger>
            <TabsTrigger value="upcoming">即将开始</TabsTrigger>
            <TabsTrigger value="completed">已结束</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Activities List */}
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-shadow">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={getStatusBadge(activity.status).className}>
                    {getStatusBadge(activity.status).label}
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2 text-base">{activity.title}</h3>
                
                <div className="space-y-1.5 text-sm text-muted-foreground mb-3">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{activity.date}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{activity.location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <UsersIcon className="w-4 h-4 text-primary" />
                    <span>{activity.participants}人参与</span>
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                
                <Button
                  onClick={() => navigate(`/alumni/activity/${activity.id}`)}
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary"
                >
                  查看详情
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">暂无相关活动</p>
          </Card>
        )}
      </main>
    </div>
  );
};

export default AlumniActivitiesList;

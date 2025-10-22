import { useState } from "react";
import { Search, Clock, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/CourseCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("video");

  const tabs = [
    { id: "video", label: "视频课" },
    { id: "live", label: "直播课" },
  ];

  const courses = [
    {
      id: 1,
      title: "金融科技与投资管理",
      teacher: "王教授",
      price: 3980,
      students: 156,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      type: "video" as const,
    },
    {
      id: 2,
      title: "企业战略与创新管理",
      teacher: "李教授",
      price: 4980,
      students: 203,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      type: "live" as const,
    },
    {
      id: 3,
      title: "数字化转型与领导力",
      teacher: "张教授",
      price: 2980,
      students: 89,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      type: "video" as const,
    },
    {
      id: 4,
      title: "商业模式创新",
      teacher: "刘教授",
      price: 3580,
      students: 127,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
      type: "live" as const,
    },
  ];

  const filteredCourses = courses.filter(c => c.type === activeTab);

  const upcomingLive = {
    title: "金融科技创新实战",
    teacher: "王教授",
    startTime: "2025-10-23 19:00",
    duration: "2小时",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    students: 128,
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索课程"
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Live Preview */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-foreground">直播预告</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary">即将开始</Badge>
        </div>
        <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex gap-4 p-4">
            <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                src={upcomingLive.image}
                alt={upcomingLive.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <Badge className="bg-red-500 text-white text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  直播
                </Badge>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-base text-foreground mb-1 line-clamp-2">
                  {upcomingLive.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{upcomingLive.teacher}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{upcomingLive.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>时长: {upcomingLive.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">{upcomingLive.students}人已预约</span>
                <button className="px-4 py-1.5 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors">
                  预约
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Course List */}
      <div className="px-4 py-4 space-y-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

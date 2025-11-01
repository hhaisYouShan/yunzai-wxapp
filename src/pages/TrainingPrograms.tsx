import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import icons from "@/lib/icons";
import { useNavigate } from "react-router-dom";

const TrainingPrograms = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const programs = [
    {
      id: 1,
      title: "企业家高级研修班（第15期）",
      category: "高级研修",
      instructor: "韦佳妮教授",
      duration: "6个月",
      schedule: "每月集中授课2天",
      location: "深圳·国研在线总部",
      price: 68000,
      students: 35,
      maxStudents: 40,
      startDate: "2025-11-15",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      status: "招生中",
      highlights: [
        "政商企学界导师阵容",
        "深度游学考察",
        "终身校友资源",
        "投融资对接"
      ],
    },
    {
      id: 2,
      title: "金融创新与资本运作研修班",
      category: "专题研修",
      instructor: "陈章博博士",
      duration: "3个月",
      schedule: "周末授课",
      location: "深圳·福田CBD",
      price: 38000,
      students: 28,
      maxStudents: 30,
      startDate: "2025-11-01",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      status: "招生中",
      highlights: [
        "投融资实战案例",
        "资本市场深度解析",
        "企业上市辅导",
        "投资人资源对接"
      ],
    },
    {
      id: 3,
      title: "数字化转型领导力研修班",
      category: "专题研修",
      instructor: "王明华教授",
      duration: "4个月",
      schedule: "每月集中授课3天",
      location: "深圳·南山科技园",
      price: 45000,
      students: 22,
      maxStudents: 35,
      startDate: "2025-12-01",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      status: "即将开班",
      highlights: [
        "企业数字化转型路径",
        "AI技术应用实战",
        "智能化管理体系",
        "标杆企业参访"
      ],
    },
    {
      id: 4,
      title: "战略管理与商业模式创新班",
      category: "高级研修",
      instructor: "李雪梅教授",
      duration: "5个月",
      schedule: "每月集中授课2天",
      location: "深圳·国研在线总部",
      price: 52000,
      students: 30,
      maxStudents: 40,
      startDate: "2025-10-28",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      status: "招生中",
      highlights: [
        "战略规划实战演练",
        "商业模式创新设计",
        "组织变革管理",
        "行业大咖分享"
      ],
    },
  ];

  const filteredPrograms = activeTab === "all" 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "招生中":
        return "bg-primary/10 text-primary border-primary/20";
      case "即将开班":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
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
            <img src={icons.ArrowLeft} alt="" className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold">研修班</h1>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-primary-foreground/10 border border-primary-foreground/20">
            <TabsTrigger value="all" className="flex-1">全部</TabsTrigger>
            <TabsTrigger value="高级研修" className="flex-1">高级研修</TabsTrigger>
            <TabsTrigger value="专题研修" className="flex-1">专题研修</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {filteredPrograms.map((program) => (
          <Card 
            key={program.id} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/courses/${program.id}`)}
          >
            {/* Image */}
            <div className="relative h-48">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className={`${getStatusColor(program.status)}`}>
                  {program.status}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground flex-1 pr-2">
                  {program.title}
                </h3>
                <Badge variant="outline" className="flex-shrink-0">
                  {program.category}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                主讲导师：{program.instructor}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img src={icons.Clock} alt="" className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img src={icons.Calendar} alt="" className="w-4 h-4" />
                  <span>{program.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img src={icons.MapPin} alt="" className="w-4 h-4" />
                  <span>{program.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img src={icons.Users} alt="" className="w-4 h-4" />
                  <span>{program.students}/{program.maxStudents}人</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={icons.Star} alt="" className="w-4 h-4" />
                  <span className="text-sm font-semibold text-foreground">课程亮点</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">开班时间</p>
                  <p className="text-sm font-semibold text-foreground">{program.startDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">课程费用</p>
                  <p className="text-xl font-bold text-primary">¥{program.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">暂无相关研修班</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPrograms;

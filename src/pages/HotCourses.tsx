import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/CourseCard";

const HotCourses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      title: "金融科技与投资管理",
      teacher: "王教授",
      price: 3980,
      students: 1256,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      type: "video" as const,
      category: "金融",
      hot: true,
    },
    {
      id: 2,
      title: "企业战略与创新管理",
      teacher: "李教授",
      price: 4980,
      students: 2103,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
      type: "live" as const,
      category: "管理",
      hot: true,
    },
    {
      id: 3,
      title: "数字化转型实战课程",
      teacher: "赵教授",
      price: 2980,
      students: 1589,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      type: "video" as const,
      category: "科技",
      hot: true,
    },
    {
      id: 4,
      title: "资本运作与企业上市",
      teacher: "陈博士",
      price: 5980,
      students: 987,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      type: "video" as const,
      category: "金融",
      hot: true,
    },
    {
      id: 5,
      title: "商业模式创新与设计思维",
      teacher: "张教授",
      price: 3580,
      students: 1456,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
      type: "live" as const,
      category: "管理",
      hot: true,
    },
    {
      id: 6,
      title: "人工智能商业应用",
      teacher: "刘博士",
      price: 4580,
      students: 1789,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
      type: "video" as const,
      category: "科技",
      hot: true,
    },
    {
      id: 7,
      title: "营销战略与品牌管理",
      teacher: "周教授",
      price: 3280,
      students: 2034,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
      type: "video" as const,
      category: "管理",
      hot: true,
    },
    {
      id: 8,
      title: "区块链技术与金融创新",
      teacher: "吴博士",
      price: 4280,
      students: 876,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",
      type: "video" as const,
      category: "金融",
      hot: true,
    },
    {
      id: 9,
      title: "领导力提升与团队管理",
      teacher: "马教授",
      price: 3680,
      students: 1678,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      type: "live" as const,
      category: "管理",
      hot: true,
    },
    {
      id: 10,
      title: "财务分析与投资决策",
      teacher: "郑教授",
      price: 4180,
      students: 1234,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
      type: "video" as const,
      category: "金融",
      hot: true,
    },
    {
      id: 11,
      title: "大数据分析与商业智能",
      teacher: "孙博士",
      price: 3880,
      students: 1567,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      type: "video" as const,
      category: "科技",
      hot: true,
    },
    {
      id: 12,
      title: "组织行为与人力资源管理",
      teacher: "林教授",
      price: 3480,
      students: 1890,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
      type: "live" as const,
      category: "管理",
      hot: true,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesTab = activeTab === "all" || course.category === activeTab;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Sort by student count (most popular first)
  const sortedCourses = [...filteredCourses].sort((a, b) => b.students - a.students);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-md">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <h1 className="text-lg font-bold">热门课程</h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索课程或讲师"
              className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-primary-foreground/10 border border-primary-foreground/20">
              <TabsTrigger value="all" className="flex-1">全部</TabsTrigger>
              <TabsTrigger value="金融" className="flex-1">金融</TabsTrigger>
              <TabsTrigger value="管理" className="flex-1">管理</TabsTrigger>
              <TabsTrigger value="科技" className="flex-1">科技</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="px-4 py-4">
        <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{sortedCourses.length}</p>
              <p className="text-xs text-muted-foreground">热门课程</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {sortedCourses.reduce((sum, c) => sum + c.students, 0).toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">累计学员</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">95%</p>
              <p className="text-xs text-muted-foreground">好评率</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Course List */}
      <div className="px-4 space-y-3 pb-4">
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">未找到相关课程</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotCourses;

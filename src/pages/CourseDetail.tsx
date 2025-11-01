import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Clock, Users, BookOpen, Play } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = {
    id: 1,
    title: "金融科技与投资管理",
    teacher: "王教授",
    teacherId: 1,
    price: 3980,
    students: 156,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    type: "video",
    duration: "48课时",
    description: "本课程系统讲解金融科技的最新发展趋势，包括区块链、人工智能在金融领域的应用，以及现代投资组合管理理论与实践。",
    syllabus: [
      { title: "第一章：金融科技概述", lessons: 6 },
      { title: "第二章：区块链技术", lessons: 8 },
      { title: "第三章：AI在金融中的应用", lessons: 10 },
      { title: "第四章：投资组合管理", lessons: 12 },
      { title: "第五章：风险管理", lessons: 12 },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="font-bold text-foreground">课程详情</h1>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>

      {/* Course Info */}
      <div className="px-4 -mt-12 relative z-10">
        <Card className="p-4 mb-4">
          <h2 className="text-xl font-bold text-foreground mb-2">{course.title}</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {course.students}人学习
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">¥{course.price}</span>
            </div>
            <Button size="lg" className="px-8">立即购买</Button>
          </div>
        </Card>

        {/* Teacher */}
        <Card className="p-4 mb-4">
          <h3 className="font-bold text-foreground mb-3">授课讲师</h3>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(`/teachers/${course.teacherId}`)}
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">王</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">{course.teacher}</p>
              <p className="text-sm text-muted-foreground">金融学教授</p>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="intro" className="mb-4">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="intro">课程介绍</TabsTrigger>
            <TabsTrigger value="syllabus">课程大纲</TabsTrigger>
          </TabsList>
          <TabsContent value="intro" className="mt-4">
            <Card className="p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </Card>
          </TabsContent>
          <TabsContent value="syllabus" className="mt-4">
            <div className="space-y-3">
              {course.syllabus.map((chapter, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{chapter.title}</p>
                        <p className="text-sm text-muted-foreground">{chapter.lessons}节课</p>
                      </div>
                    </div>
                    <Play className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 max-w-md mx-auto">
        <Button className="w-full" size="lg">
          立即购买 ¥{course.price}
        </Button>
      </div>
    </div>
  );
};

export default CourseDetail;

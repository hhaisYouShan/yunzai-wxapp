import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CourseCard } from "@/components/CourseCard";
import { ChevronLeft, GraduationCap, Award, BookOpen } from "lucide-react";

const TeacherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = {
    id: 1,
    name: "王教授",
    title: "金融学教授",
    avatar: "王",
    education: "清华大学金融学博士",
    experience: "20年金融行业从业经验",
    achievements: [
      "国家级教学名师",
      "发表SCI论文50余篇",
      "主持国家级科研项目10余项",
    ],
    introduction:
      "王教授长期从事金融科技与投资管理研究，在区块链、人工智能金融应用等领域有深入研究。曾任多家金融机构顾问，具有丰富的理论与实践经验。",
    courses: [
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
        title: "高级投资策略",
        teacher: "王教授",
        price: 4580,
        students: 98,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
        type: "live" as const,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="font-bold text-foreground">讲师详情</h1>
      </div>

      {/* Teacher Profile */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 py-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-background/20 flex items-center justify-center">
            <span className="text-3xl font-bold">{teacher.avatar}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">{teacher.name}</h2>
            <p className="opacity-90">{teacher.title}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold">20+</p>
            <p className="text-sm opacity-90 mt-1">从业年限</p>
          </div>
          <div className="text-center border-l border-r border-primary-foreground/20">
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm opacity-90 mt-1">授课课程</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">1200+</p>
            <p className="text-sm opacity-90 mt-1">学生人数</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        {/* Education */}
        <Card className="p-4 -mt-6 mb-4 relative z-10">
          <div className="flex items-start gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-1">教育背景</h3>
              <p className="text-sm text-muted-foreground">{teacher.education}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-1">工作经历</h3>
              <p className="text-sm text-muted-foreground">{teacher.experience}</p>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">主要成就</h3>
          </div>
          <ul className="space-y-2">
            {teacher.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Introduction */}
        <Card className="p-4 mb-4">
          <h3 className="font-bold text-foreground mb-3">讲师介绍</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {teacher.introduction}
          </p>
        </Card>

        {/* Courses */}
        <div className="mb-4">
          <h3 className="font-bold text-foreground mb-3">热门课程</h3>
          <div className="space-y-3">
            {teacher.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;

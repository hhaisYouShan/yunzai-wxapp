import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Mail, GraduationCap, Users, Award, Building, BookOpen, Star } from "lucide-react";

const School = () => {
  const navigate = useNavigate();

  const campuses = [
    {
      id: 1,
      name: "深圳总部校区",
      address: "深圳市福田区深南大道国际创新中心A座",
      phone: "0755-8888-8888",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      facilities: ["多媒体教室", "图书馆", "研讨室", "咖啡厅"],
    },
    {
      id: 2,
      name: "上海分校区",
      address: "上海市浦东新区陆家嘴金融贸易区",
      phone: "021-6666-6666",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      facilities: ["智能教室", "商务中心", "交流空间"],
    },
    {
      id: 3,
      name: "北京分校区",
      address: "北京市朝阳区CBD核心区",
      phone: "010-8888-8888",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800",
      facilities: ["学术报告厅", "创客空间", "会议中心"],
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "学位教育",
      description: "与国内外知名高校合作，提供博士、硕士学位课程",
      color: "text-primary",
    },
    {
      icon: BookOpen,
      title: "高级研修",
      description: "面向企业家和高管的系统化研修课程",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "专题培训",
      description: "聚焦行业热点的短期专题培训项目",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "定制课程",
      description: "为企业量身定制的内训和咨询服务",
      color: "text-accent",
    },
  ];

  const achievements = [
    { number: "15+", label: "年办学经验" },
    { number: "10000+", label: "培养学员" },
    { number: "200+", label: "名师团队" },
    { number: "50+", label: "合作院校" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold">国研在线</h1>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
          alt="国研在线"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">中国领先的商学教育平台</h2>
            <p className="text-sm opacity-90">专注于高端商业教育与企业家培养</p>
          </div>
        </div>
      </div>

      {/* School Introduction */}
      <div className="px-4 py-6">
        <Card className="p-5">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Building className="w-5 h-5 text-primary" />
            学校简介
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            国研在线是一家专注于高端商业教育的在线学习平台，致力于为企业家、高管和职场精英提供优质的学位教育、高级研修和专业培训服务。我们汇聚国内外顶尖师资，结合前沿商业理论与实践案例，打造系统化的商学教育体系。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            学校秉承"知行合一、创新致远"的办学理念，通过线上线下相结合的教学模式，为学员提供灵活高效的学习体验。我们与多所国内外知名高校建立合作关系，为学员搭建终身学习和成长的平台。
          </p>
        </Card>
      </div>

      {/* Achievements */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-4 gap-3">
          {achievements.map((item, index) => (
            <Card key={index} className="p-4 text-center">
              <p className="text-2xl font-bold text-primary mb-1">{item.number}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="px-4 pb-6">
        <h3 className="text-lg font-bold mb-4">课程体系</h3>
        <div className="grid grid-cols-2 gap-3">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => {
                if (program.title === "高级研修") navigate('/training-programs');
                else if (program.title === "学位教育") navigate('/courses');
                else navigate('/discover');
              }}
            >
              <program.icon className={`w-8 h-8 mb-3 ${program.color}`} />
              <h4 className="font-semibold mb-2">{program.title}</h4>
              <p className="text-xs text-muted-foreground">{program.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Campuses */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">校区分布</h3>
          <Button variant="ghost" size="sm" onClick={() => navigate('/teachers')}>
            查看师资
          </Button>
        </div>
        <div className="space-y-4">
          {campuses.map((campus) => (
            <Card key={campus.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-40">
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground">
                    {campus.name}
                  </Badge>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{campus.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">{campus.phone}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {campus.facilities.map((facility, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 pb-6">
        <Card className="p-5 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            联系我们
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">全国咨询热线: 400-888-8888</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">邮箱: info@guoyanzaixian.com</span>
            </div>
          </div>
          <Button className="w-full mt-4" onClick={() => navigate('/feedback')}>
            在线咨询
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default School;

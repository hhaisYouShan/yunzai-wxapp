import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroHeader from "@/components/alumni/HeroHeader";
import FeaturedActivityCard, { ActivityItem } from "@/components/alumni/FeaturedActivityCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Briefcase, GraduationCap, MapPin, Calendar, Users as UsersIcon, History } from "lucide-react";
import type { AlumniItem } from "@/components/alumni/AlumniShowcase";

interface RegionItem {
  id: string;
  name: string;
  count: number;
}

const Alumni = () => {
  const navigate = useNavigate();

  const regions: RegionItem[] = [
    { id: "east", name: "华东", count: 156 },
    { id: "south", name: "华南", count: 203 },
    { id: "north", name: "华北", count: 178 },
    { id: "central", name: "华中", count: 145 },
  ];

  const sampleAlumni: AlumniItem[] = [
    { id: 1, name: "张*明", degree: "MBA 2023级", company: "某知名互联网公司", position: "高级产品经理", region: "华东" },
    { id: 2, name: "李*华", degree: "DBA 2022级", company: "某大型金融集团", position: "首席战略官", region: "华南" },
    { id: 3, name: "王*芳", degree: "EMBA 2023级", company: "某制造业龙头企业", position: "副总裁", region: "华北" },
    { id: 4, name: "刘*强", degree: "MBA 2024级", company: "某新能源公司", position: "运营总监", region: "华中" },
  ];

  const activities: (ActivityItem & { participants: number })[] = [
    {
      id: 1,
      title: "2024春季校友交流会",
      date: "2024年3月20日",
      location: "北京·国贸",
      participants: 120,
      description: "汇聚各行业精英，分享创业经验与行业洞察",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=480&fit=crop",
    },
    {
      id: 2,
      title: "华南校友企业参访",
      date: "2024年4月15日",
      location: "深圳·南山",
      participants: 80,
      description: "深入优秀校友企业，学习创新管理模式",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=480&fit=crop",
    },
    {
      id: 3,
      title: "金融行业校友论坛",
      date: "2024年5月10日",
      location: "上海·陆家嘴",
      participants: 150,
      description: "探讨金融科技发展趋势，把握投资机遇",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=480&fit=crop",
    },
  ];

  const canonical = typeof window !== "undefined" ? `${window.location.origin}/alumni` : "/alumni";

  return (
    <div className="min-h-screen bg-background pb-20">
      <Helmet>
        <title>校友会 | 国研校友平台与活动</title>
        <meta name="description" content="国研校友会：连接各地校友，发布校友活动，分享资源与机遇。加入校友会，拓展人脉，共创未来。" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <HeroHeader onApply={() => navigate("/alumni/application")} />

      <main>
        {/* Featured Activity */}
        <FeaturedActivityCard activity={activities[0]} onView={(id) => navigate(`/alumni/activity/${id}`)} />

        {/* Regions - 1 Row 4 Columns */}
        <section className="px-4 mb-6 animate-fade-in">
          <h2 className="font-bold text-foreground mb-3">分区校友会</h2>
          <div className="grid grid-cols-4 gap-3">
            {regions.map((region) => (
              <Link key={region.id} to={`/alumni/${region.id}`}>
                <Card className="p-4 hover:shadow-[var(--shadow-medium)] transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40">
                  <div className="text-center">
                    <h3 className="font-bold text-primary text-lg mb-1">{region.name}</h3>
                    <p className="text-sm text-muted-foreground">{region.count}人</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Alumni Preview */}
        <section className="px-4 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-foreground">部分校友展示</h2>
            <Link to="/alumni/members">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                查看全部 <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sampleAlumni.slice(0, 4).map((a) => (
              <Card key={a.id} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-primary">{a.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{a.name}</h3>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                    <span className="truncate">{a.degree}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-secondary" />
                    <span className="truncate">{a.company}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                    <span>{a.region}</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">加入校友会查看完整校友信息</p>
          </div>
        </section>

        {/* Activities Preview */}
        <section className="px-4 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-foreground">校友会活动</h2>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/alumni/activity/history')}
                className="text-primary hover:text-primary/90"
              >
                <History className="w-4 h-4 mr-1" />
                历史
              </Button>
              <Link to="/alumni/activities">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                  查看全部 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {activities.slice(0, 2).map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-shadow">
                <div className="flex gap-4 p-4">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-28 h-28 object-cover rounded-lg flex-shrink-0 border border-border"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-1">{activity.title}</h3>
                    <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                      <p className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{activity.date}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        <span>{activity.location}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <UsersIcon className="w-3.5 h-3.5 text-primary" />
                        <span>{activity.participants}人参与</span>
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{activity.description}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <Button
                    onClick={() => navigate(`/alumni/activity/${activity.id}`)}
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary"
                  >
                    查看详情
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Alumni;


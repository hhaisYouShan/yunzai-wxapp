import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroHeader from "@/components/alumni/HeroHeader";
import FeaturedActivityCard, { ActivityItem } from "@/components/alumni/FeaturedActivityCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Briefcase, GraduationCap, MapPin, Calendar, Users as UsersIcon } from "lucide-react";
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

        {/* Alumni Preview - Featured + List Layout */}
        <section className="px-4 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-foreground text-lg">部分校友展示</h2>
              <p className="text-xs text-muted-foreground mt-0.5">优秀校友风采</p>
            </div>
            <Link to="/alumni/members">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                查看全部 <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {/* Featured Alumni - First One */}
            {sampleAlumni.slice(0, 1).map((a) => (
              <Card key={a.id} className="group relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full opacity-50" />
                
                <div className="relative p-5">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                        <span className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {a.name.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-card shadow-md flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-lg mb-1">{a.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{a.position}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{a.degree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-3.5 h-3.5 text-secondary" />
                          </div>
                          <span className="text-muted-foreground">{a.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{a.region}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Other Alumni - Compact List */}
            <div className="grid grid-cols-1 gap-2">
              {sampleAlumni.slice(1, 4).map((a) => (
                <Card key={a.id} className="group bg-card/50 border-border/50 hover:bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 p-3">
                    {/* Small Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="text-lg font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {a.name.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card" />
                    </div>

                    {/* Compact Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-foreground text-sm truncate">{a.name}</h3>
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full flex-shrink-0">{a.region}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mb-1">{a.position}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-3 h-3 text-primary" />
                          {a.degree}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10 text-center">
            <p className="text-sm text-foreground font-medium mb-1">想了解更多校友信息？</p>
            <p className="text-xs text-muted-foreground">加入校友会查看完整校友资料与联系方式</p>
          </div>
        </section>

        {/* Activities Preview */}
        <section className="px-4 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-foreground">校友会活动</h2>
            <Link to="/alumni/activities">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                查看全部 <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
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


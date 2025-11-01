import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroHeader from "@/components/alumni/HeroHeader";
import FeaturedActivityCard, { ActivityItem } from "@/components/alumni/FeaturedActivityCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { AlumniItem } from "@/components/alumni/AlumniShowcase";
import briefcaseIcon from "@/assets/icons/briefcase.png";
import graduationCapIcon from "@/assets/icons/graduation-cap.png";
import mapPinIcon from "@/assets/icons/map-pin.png";
import calendarIcon from "@/assets/icons/calendar.png";
import usersIcon from "@/assets/icons/users.png";
import chevronRightIcon from "@/assets/icons/chevron-right.png";
import arrowLeftIcon from "@/assets/icons/arrow-left.png";
import phoneIcon from "@/assets/icons/phone.png";
import mailIcon from "@/assets/icons/mail.png";
import awardIcon from "@/assets/icons/award.png";
import buildingIcon from "@/assets/icons/building.png";
import bookOpenIcon from "@/assets/icons/book-open.png";

interface RegionItem {
  id: string;
  name: string;
  count: number;
}

const Alumni = () => {
  const navigate = useNavigate();

  const regions = [
    { id: "east", name: "华东" },
    { id: "south", name: "华南" },
    { id: "north", name: "华北" },
    { id: "central", name: "华中" },
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

        {/* Regions - Icon Display */}
        <section className="px-4 mb-6 animate-fade-in">
          <h2 className="font-bold text-foreground mb-3">分区校友会</h2>
          <div className="grid grid-cols-4 gap-3">
            {regions.map((region) => {
              return (
                <Link key={region.id} to={`/alumni/${region.id}`}>
                  <Card className="p-4 hover:shadow-[var(--shadow-medium)] transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40">
                    <div className="text-center">
                      <h3 className="font-bold text-primary text-base">{region.name}</h3>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Alumni Showcase */}
        <section className="px-4 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-foreground text-lg">杰出校友</h2>
            <Link to="/alumni/members">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                查看全部 <img src={chevronRightIcon} alt="" className="w-4 h-4 ml-1 inline-block" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {sampleAlumni.slice(0, 4).map((a) => (
              <Card key={a.id} className="p-4 hover:shadow-lg transition-all duration-300 bg-card border border-border">
                <div className="text-center">
                  {/* Avatar with online indicator */}
                  <div className="relative inline-block mb-3">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
                      <span className="text-2xl font-bold text-primary">
                        {a.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-foreground text-base mb-1">{a.name}</h3>
                  
                  {/* Position */}
                  <p className="text-sm text-muted-foreground mb-2">{a.position}</p>
                  
                  {/* Description */}
                  <div className="space-y-1 mb-3 text-xs text-muted-foreground">
                    <p className="flex items-center justify-center gap-1">
                      <img src={briefcaseIcon} alt="" className="w-3 h-3" />
                      <span className="truncate">{a.company}</span>
                    </p>
                    <p className="flex items-center justify-center gap-1">
                      <img src={graduationCapIcon} alt="" className="w-3 h-3" />
                      <span>{a.degree}</span>
                    </p>
                  </div>

                  {/* Region Tag */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                      <img src={mapPinIcon} alt="" className="w-3 h-3" />
                      <span>{a.region}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
                查看全部 <img src={chevronRightIcon} alt="" className="w-4 h-4 ml-1 inline-block" />
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
                        <img src={calendarIcon} alt="" className="w-3.5 h-3.5" />
                        <span>{activity.date}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <img src={mapPinIcon} alt="" className="w-3.5 h-3.5" />
                        <span>{activity.location}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <img src={usersIcon} alt="" className="w-3.5 h-3.5" />
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


import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroHeader from "@/components/alumni/HeroHeader";
import FeaturedActivityCard, { ActivityItem } from "@/components/alumni/FeaturedActivityCard";
import RegionsScroller, { RegionItem } from "@/components/alumni/RegionsScroller";
import AlumniShowcase, { AlumniItem } from "@/components/alumni/AlumniShowcase";
import ActivitiesList from "@/components/alumni/ActivitiesList";
import { Card } from "@/components/ui/card";

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

        {/* Intro + Stats */}
        <section className="px-4 mb-6 animate-fade-in">
          <Card className="p-6 bg-gradient-to-br from-background to-muted/20">
            <h2 className="font-bold text-foreground mb-2">关于校友会</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              国研校友会是连接各地校友的重要纽带，为校友提供持续学习、资源共享、合作发展的平台。我们定期组织各类活动，促进校友间的交流与合作，助力个人成长与企业发展。
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">682</p>
                <p className="text-xs text-muted-foreground mt-1">校友总数</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">4</p>
                <p className="text-xs text-muted-foreground mt-1">覆盖区域</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Regions */}
        <RegionsScroller regions={regions} />

        {/* Alumni */}
        <AlumniShowcase alumni={sampleAlumni} />

        {/* Activities */}
        <ActivitiesList activities={activities} />
      </main>
    </div>
  );
};

export default Alumni;


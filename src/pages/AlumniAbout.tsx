import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import icons from "@/lib/icons";
import logo from "@/assets/logo.png";

const AlumniAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <Helmet>
        <title>关于校友会 | 国研校友平台</title>
        <meta name="description" content="了解国研校友会的宗旨、服务和发展历程，连接精英校友，共创美好未来。" />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-b border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/alumni")}
            className="hover:bg-primary/10"
          >
            <img src={icons.ChevronLeft} alt="" className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">关于校友会</h1>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        {/* Logo & Title */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
          <img src={logo} alt="国研校友会" className="w-20 h-20 mx-auto mb-4 object-contain" />
          <h2 className="text-2xl font-bold text-foreground mb-2">国研校友会</h2>
          <p className="text-sm text-muted-foreground">连接精英，共创未来</p>
        </Card>

        {/* Mission */}
        <Card className="p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <img src={icons.Award} alt="" className="w-5 h-5" />
            我们的使命
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            国研校友会致力于打造一个开放、包容、互助的校友交流平台。我们通过定期组织各类活动，促进校友之间的深度交流与合作，
            助力校友个人成长与企业发展，推动校友资源的有效整合与共享。
          </p>
        </Card>

        {/* Services */}
        <Card className="p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <img src={icons.Users} alt="" className="w-5 h-5" />
            我们的服务
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">资源共享</p>
                <p className="text-xs text-muted-foreground">搭建校友资源对接平台，促进商业合作与资源互换</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">活动组织</p>
                <p className="text-xs text-muted-foreground">定期举办交流会、论坛、企业参访等丰富活动</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">持续学习</p>
                <p className="text-xs text-muted-foreground">提供前沿知识分享和专业技能培训机会</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">人脉拓展</p>
                <p className="text-xs text-muted-foreground">连接各行业精英，拓展高质量人脉网络</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Statistics */}
        <Card className="p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <img src={icons.TrendingUp} alt="" className="w-5 h-5" />
            发展数据
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
              <p className="text-3xl font-bold text-primary mb-1">682</p>
              <p className="text-xs text-muted-foreground">注册校友</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-transparent rounded-lg">
              <p className="text-3xl font-bold text-secondary mb-1">4</p>
              <p className="text-xs text-muted-foreground">覆盖区域</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
              <p className="text-3xl font-bold text-primary mb-1">50+</p>
              <p className="text-xs text-muted-foreground">年度活动</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-transparent rounded-lg">
              <p className="text-3xl font-bold text-secondary mb-1">95%</p>
              <p className="text-xs text-muted-foreground">满意度</p>
            </div>
          </div>
        </Card>

        {/* History */}
        <Card className="p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <img src={icons.Calendar} alt="" className="w-5 h-5" />
            发展历程
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="text-primary font-bold text-sm whitespace-nowrap">2022</div>
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium">校友会成立</p>
                <p className="text-xs text-muted-foreground">首批200余位校友加入，开启校友服务新篇章</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-primary font-bold text-sm whitespace-nowrap">2023</div>
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium">快速发展</p>
                <p className="text-xs text-muted-foreground">覆盖全国4大区域，校友人数突破500人</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-primary font-bold text-sm whitespace-nowrap">2024</div>
              <div className="flex-1">
                <p className="text-sm text-foreground font-medium">持续壮大</p>
                <p className="text-xs text-muted-foreground">校友总数近700人，组织各类活动50余场</p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="font-bold text-foreground mb-2 text-center">加入我们</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            成为校友会的一员，与精英同行，共创美好未来
          </p>
          <Button onClick={() => navigate("/alumni/application")} className="w-full shadow-[var(--shadow-red)]">
            立即申请加入
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default AlumniAbout;

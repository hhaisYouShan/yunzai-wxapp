import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import icons from "@/lib/icons";
import type { AlumniItem } from "@/components/alumni/AlumniShowcase";

const AlumniMembers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const allAlumni: AlumniItem[] = [
    { id: 1, name: "张*明", degree: "MBA 2023级", company: "某知名互联网公司", position: "高级产品经理", region: "华东" },
    { id: 2, name: "李*华", degree: "DBA 2022级", company: "某大型金融集团", position: "首席战略官", region: "华南" },
    { id: 3, name: "王*芳", degree: "EMBA 2023级", company: "某制造业龙头企业", position: "副总裁", region: "华北" },
    { id: 4, name: "刘*强", degree: "MBA 2024级", company: "某新能源公司", position: "运营总监", region: "华中" },
    { id: 5, name: "陈*丽", degree: "MBA 2023级", company: "某教育科技公司", position: "市场总监", region: "华东" },
    { id: 6, name: "赵*伟", degree: "EMBA 2022级", company: "某房地产集团", position: "运营副总裁", region: "华南" },
    { id: 7, name: "周*敏", degree: "DBA 2023级", company: "某医疗健康企业", position: "CEO", region: "华北" },
    { id: 8, name: "吴*杰", degree: "MBA 2024级", company: "某智能制造公司", position: "技术总监", region: "华中" },
  ];

  const filteredAlumni = allAlumni.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <Helmet>
        <title>校友展示 | 国研校友平台</title>
        <meta name="description" content="浏览国研校友会成员名录，连接各行业精英校友，拓展高质量人脉网络。" />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-b border-border px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/alumni")}
            className="hover:bg-primary/10"
          >
            <img src={icons.ChevronLeft} alt="" className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">校友展示</h1>
        </div>
        
        {/* Search */}
        <div className="relative">
          <img src={icons.Search} alt="" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
          <Input
            type="text"
            placeholder="搜索校友姓名、学位或地区..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </header>

      <main className="px-4 py-6">
        {/* Notice */}
        <Card className="p-4 mb-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-medium text-foreground">注意：</span>
            为保护隐私，仅展示部分校友信息。加入校友会可查看完整通讯录。
          </p>
        </Card>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="p-4 hover:shadow-[var(--shadow-medium)] transition-all bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">{alumni.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-base mb-1">{alumni.name}</h3>
                  <p className="text-xs text-muted-foreground">{alumni.position}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <img src={icons.GraduationCap} alt="" className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{alumni.degree}</span>
                </p>
                <p className="flex items-center gap-2">
                  <img src={icons.Briefcase} alt="" className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{alumni.company}</span>
                </p>
                <p className="flex items-center gap-2">
                  <img src={icons.MapPin} alt="" className="w-4 h-4 flex-shrink-0" />
                  <span>{alumni.region}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">暂无符合条件的校友</p>
          </Card>
        )}

        {/* CTA */}
        <Card className="p-6 mt-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="font-bold text-foreground mb-2 text-center">想查看完整校友信息？</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            加入校友会，解锁完整通讯录和更多权益
          </p>
          <Button onClick={() => navigate("/alumni/application")} className="w-full shadow-[var(--shadow-red)]">
            立即申请加入
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default AlumniMembers;

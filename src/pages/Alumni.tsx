import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Alumni = () => {
  const [showForm, setShowForm] = useState(false);

  const regions = [
    { id: "east", name: "华东", count: 156 },
    { id: "south", name: "华南", count: 203 },
    { id: "north", name: "华北", count: 178 },
    { id: "central", name: "华中", count: 145 },
  ];

  const sampleAlumni = [
    {
      id: 1,
      name: "张*明",
      degree: "MBA 2023级",
      company: "某知名互联网公司",
      position: "高级产品经理",
      region: "华东",
    },
    {
      id: 2,
      name: "李*华",
      degree: "DBA 2022级",
      company: "某大型金融集团",
      position: "首席战略官",
      region: "华南",
    },
    {
      id: 3,
      name: "王*芳",
      degree: "EMBA 2023级",
      company: "某制造业龙头企业",
      position: "副总裁",
      region: "华北",
    },
    {
      id: 4,
      name: "刘*强",
      degree: "MBA 2024级",
      company: "某新能源公司",
      position: "运营总监",
      region: "华中",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">校友会</h1>
        <p className="text-sm opacity-90">连接精英，共创未来</p>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-6 mb-6">
        <Card className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">682</p>
              <p className="text-sm text-muted-foreground mt-1">校友总数</p>
            </div>
            <div className="text-center border-l border-border">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground mt-1">覆盖区域</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Introduction */}
      <div className="px-4 mb-6">
        <Card className="p-4">
          <h2 className="font-bold text-foreground mb-3">校友会简介</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            国研校友会是连接各地校友的重要纽带，为校友提供持续学习、资源共享、合作发展的平台。
            我们定期组织各类活动，促进校友间的交流与合作，助力个人成长与企业发展。
          </p>
        </Card>
      </div>

      {/* Regions */}
      <div className="px-4 mb-6">
        <h2 className="font-bold text-foreground mb-3">分区校友会</h2>
        <div className="grid grid-cols-2 gap-3">
          {regions.map((region) => (
            <Link key={region.id} to={`/alumni/${region.id}`}>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{region.name}</h3>
                    <p className="text-sm text-muted-foreground">{region.count}位校友</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Sample Alumni (Limited Info) */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-foreground">部分校友展示</h2>
          <span className="text-xs text-muted-foreground">仅展示部分信息</span>
        </div>
        <div className="space-y-3">
          {sampleAlumni.slice(0, 4).map((alumni) => (
            <Card key={alumni.id} className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-muted-foreground">
                    {alumni.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{alumni.name}</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{alumni.degree}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{alumni.company}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{alumni.region}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            加入校友会查看完整校友信息
          </p>
        </div>
      </div>

      {/* Join Button */}
      <div className="px-4">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="font-bold text-foreground text-center mb-2">申请加入校友会</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            完善您的信息，加入我们的校友大家庭
          </p>
          <Button
            className="w-full"
            size="lg"
            onClick={() => setShowForm(!showForm)}
          >
            立即申请
          </Button>
          {showForm && (
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                申请功能需要后台审批系统支持<br/>
                请联系管理员开通权限
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Alumni;

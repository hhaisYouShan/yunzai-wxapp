import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import icons from "@/lib/icons";
import { useNavigate, useParams } from "react-router-dom";

const AlumniRegion = () => {
  const navigate = useNavigate();
  const { regionId } = useParams();

  const regionData: Record<string, any> = {
    east: {
      name: "华东",
      description: "华东地区校友会覆盖上海、江苏、浙江、安徽等地，汇聚了众多金融、科技、制造业精英。",
      count: 156,
    },
    south: {
      name: "华南",
      description: "华南地区校友会以广东、福建为核心，在互联网、新能源、生物医药等领域人才济济。",
      count: 203,
    },
    north: {
      name: "华北",
      description: "华北地区校友会辐射北京、天津、河北等地，在政府、国企、咨询领域影响力显著。",
      count: 178,
    },
    central: {
      name: "华中",
      description: "华中地区校友会覆盖湖北、湖南、河南等省份，在智能制造、物流、教育等领域成就斐然。",
      count: 145,
    },
  };

  const region = regionData[regionId || "east"];

  const alumni = [
    {
      id: 1,
      name: "张*明",
      degree: "MBA 2023级",
      company: "某知名互联网公司",
      position: "高级产品经理",
      phone: "138****5678",
      email: "zhang***@example.com",
    },
    {
      id: 2,
      name: "李*华",
      degree: "DBA 2022级",
      company: "某大型金融集团",
      position: "首席战略官",
      phone: "139****8901",
      email: "li***@example.com",
    },
    {
      id: 3,
      name: "王*芳",
      degree: "EMBA 2023级",
      company: "某制造业龙头企业",
      position: "副总裁",
      phone: "136****2345",
      email: "wang***@example.com",
    },
    {
      id: 4,
      name: "刘*强",
      degree: "MBA 2024级",
      company: "某新能源公司",
      position: "运营总监",
      phone: "137****6789",
      email: "liu***@example.com",
    },
    {
      id: 5,
      name: "陈*丽",
      degree: "EMBA 2022级",
      company: "某跨国咨询公司",
      position: "合伙人",
      phone: "135****3456",
      email: "chen***@example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-dark)))] text-primary-foreground px-4 py-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/alumni")}
          className="text-primary-foreground hover:bg-primary-foreground/10 mb-4 -ml-2"
        >
          <img src={icons.ArrowLeft} alt="" className="w-4 h-4 mr-2" />
          返回
        </Button>
        <h1 className="text-2xl font-bold mb-2">{region.name}校友会</h1>
        <p className="text-sm opacity-90">{region.count}位校友</p>
      </div>

      {/* Region Info */}
      <div className="px-4 -mt-6 mb-6">
        <Card className="p-4 shadow-[var(--shadow-medium)]">
          <h2 className="font-bold text-foreground mb-3">区域简介</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {region.description}
          </p>
        </Card>
      </div>

      {/* Alumni List */}
      <div className="px-4">
        <h2 className="font-bold text-foreground mb-3">校友名录</h2>
        <div className="space-y-3">
          {alumni.map((person) => (
            <Card key={person.id} className="p-4 hover:shadow-[var(--shadow-medium)] transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-1">{person.name}</h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <img src={icons.GraduationCap} alt="" className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{person.degree}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <img src={icons.Briefcase} alt="" className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{person.company} · {person.position}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <img src={icons.Phone} alt="" className="w-4 h-4 flex-shrink-0" />
                      <span>{person.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <img src={icons.Mail} alt="" className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{person.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniRegion;

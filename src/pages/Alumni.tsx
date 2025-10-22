import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Briefcase, GraduationCap, Calendar, Users as UsersIcon, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const Alumni = () => {
  const [showForm, setShowForm] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

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

  const activities = [
    {
      id: 1,
      title: "2024春季校友交流会",
      date: "2024年3月20日",
      location: "北京·国贸",
      participants: 120,
      description: "汇聚各行业精英，分享创业经验与行业洞察",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "华南校友企业参访",
      date: "2024年4月15日",
      location: "深圳·南山",
      participants: 80,
      description: "深入优秀校友企业，学习创新管理模式",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "金融行业校友论坛",
      date: "2024年5月10日",
      location: "上海·陆家嘴",
      participants: 150,
      description: "探讨金融科技发展趋势，把握投资机遇",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    },
  ];

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">校友会</h1>
        <p className="text-sm opacity-90">连接精英，共创未来</p>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-6 mb-6">
        <Card className="p-4 shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">682</p>
              <p className="text-sm text-muted-foreground mt-1">校友总数</p>
            </div>
            <div className="text-center border-l border-border">
              <p className="text-2xl font-bold text-purple-600">4</p>
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
              <Card className="p-4 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-1">{region.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{region.count}位校友</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-500" />
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

      {/* Alumni Activities */}
      <div className="px-4 mb-6">
        <h2 className="font-bold text-foreground mb-3">校友会活动</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex gap-4 p-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-2 line-clamp-1">{activity.title}</h3>
                  <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                    <p className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{activity.date}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-purple-500" />
                      <span>{activity.location}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <UsersIcon className="w-3.5 h-3.5 text-green-500" />
                      <span>{activity.participants}人参与</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <Button variant="outline" size="sm" className="w-full text-blue-600 border-blue-300 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-700 dark:hover:bg-blue-950">
                  查看详情
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Join Button */}
      <div className="px-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-foreground text-center mb-2">申请加入校友会</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            完善您的信息，加入我们的校友大家庭
          </p>
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="lg"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "收起表单" : "立即申请"}
          </Button>
          {showForm && (
            <form className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">头像 *</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Avatar preview" className="w-full h-full object-cover" />
                    ) : (
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                      id="avatar-upload"
                      required
                    />
                    <label htmlFor="avatar-upload">
                      <Button type="button" variant="outline" size="sm" className="cursor-pointer" asChild>
                        <span>上传头像</span>
                      </Button>
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">支持 JPG、PNG 格式</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">姓名 *</label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">学位班 *</label>
                <select
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                >
                  <option value="">请选择学位班</option>
                  <option value="MBA">MBA</option>
                  <option value="EMBA">EMBA</option>
                  <option value="DBA">DBA</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">所在区域 *</label>
                <select
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                >
                  <option value="">请选择所在区域</option>
                  <option value="east">华东</option>
                  <option value="south">华南</option>
                  <option value="north">华北</option>
                  <option value="central">华中</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">公司 *</label>
                <input
                  type="text"
                  placeholder="请输入公司名称"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">职位 *</label>
                <input
                  type="text"
                  placeholder="请输入职位"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">职能</label>
                <input
                  type="text"
                  placeholder="请输入职能"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" size="lg">
                提交申请
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                提交后需要等待管理员审批，我们会尽快处理您的申请
              </p>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Alumni;

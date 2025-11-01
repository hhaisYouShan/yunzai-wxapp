import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import icons from "@/lib/icons";
import { toast } from "sonner";

const AlumniApplication = () => {
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState<string>("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("申请已提交！我们会尽快审核您的申请");
    setTimeout(() => navigate("/alumni"), 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-dark)))] text-primary-foreground px-4 py-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/alumni")}
            className="text-primary-foreground hover:bg-white/10"
          >
            <img src={icons.ArrowLeft} alt="" className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">申请加入校友会</h1>
            <p className="text-sm opacity-90">完善信息，加入校友大家庭</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 py-6">
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Avatar Upload */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">头像 *</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden border-3 border-primary/20 shadow-[var(--shadow-soft)]">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar preview" className="w-full h-full object-cover" />
                  ) : (
                    <img src={icons.Upload} alt="" className="w-10 h-10 opacity-60" />
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
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="cursor-pointer border-primary/30 hover:bg-primary/5 hover:border-primary" 
                      asChild
                    >
                      <span>上传头像</span>
                    </Button>
                  </label>
                  <p className="text-xs text-muted-foreground mt-2">支持 JPG、PNG 格式，建议尺寸 400x400</p>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">姓名 *</label>
              <input
                type="text"
                placeholder="请输入您的真实姓名"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Degree */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">学位班 *</label>
              <select
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              >
                <option value="">请选择学位班</option>
                <option value="MBA">MBA</option>
                <option value="EMBA">EMBA</option>
                <option value="DBA">DBA</option>
              </select>
            </div>

            {/* Graduation Year */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">毕业年份 *</label>
              <select
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              >
                <option value="">请选择毕业年份</option>
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                  <option key={year} value={year}>{year}级</option>
                ))}
              </select>
            </div>

            {/* Region */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">所在区域 *</label>
              <select
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              >
                <option value="">请选择所在区域</option>
                <option value="east">华东</option>
                <option value="south">华南</option>
                <option value="north">华北</option>
                <option value="central">华中</option>
              </select>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">公司 *</label>
              <input
                type="text"
                placeholder="请输入公司名称"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">职位 *</label>
              <input
                type="text"
                placeholder="请输入职位"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Function */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">职能</label>
              <input
                type="text"
                placeholder="请输入职能（选填）"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-12 bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-dark)))] hover:opacity-90 shadow-[var(--shadow-red)] text-base font-semibold" 
                size="lg"
              >
                提交申请
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3 leading-relaxed">
                提交后需要等待管理员审批<br />我们会在3个工作日内处理您的申请
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AlumniApplication;

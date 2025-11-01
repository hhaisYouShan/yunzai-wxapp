import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const VipCourseRegister = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [channel, setChannel] = useState<"student" | "trial">("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "报名成功",
      description: "我们会尽快与您联系确认",
    });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center px-4 py-3">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">大咖课报名</h1>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Channel Selection */}
        <Card className="p-4 mb-6">
          <Label className="text-base font-semibold mb-3 block">选择报名通道</Label>
          <RadioGroup value={channel} onValueChange={(v) => setChannel(v as "student" | "trial")}>
            <div className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student" className="cursor-pointer">学员通道</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="trial" id="trial" />
              <Label htmlFor="trial" className="cursor-pointer">试听通道</Label>
            </div>
          </RadioGroup>
        </Card>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {channel === "student" ? (
            <>
              {/* 学员通道表单 */}
              <Card className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input id="name" placeholder="请输入姓名" required />
                </div>

                <div className="space-y-2">
                  <Label>性别 *</Label>
                  <RadioGroup defaultValue="male" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">男</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">女</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">单位 *</Label>
                  <Input id="company" placeholder="请输入单位名称" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">职位 *</Label>
                  <Input id="position" placeholder="请输入职位" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">报读学校 *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择报读学校" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school1">清华大学</SelectItem>
                      <SelectItem value="school2">北京大学</SelectItem>
                      <SelectItem value="school3">复旦大学</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">研修班 *</Label>
                  <Input id="program" placeholder="请输入研修班名称" required />
                </div>

                <div className="space-y-2">
                  <Label>学位类型 *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择学位类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="master">硕士</SelectItem>
                      <SelectItem value="doctor">博士</SelectItem>
                      <SelectItem value="postdoc">博士后</SelectItem>
                      <SelectItem value="visiting">访问学者</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="advisor">班主任 *</Label>
                  <Input id="advisor" placeholder="请输入班主任姓名" required />
                </div>
              </Card>
            </>
          ) : (
            <>
              {/* 试听通道表单 */}
              <Card className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="trial-name">姓名 *</Label>
                  <Input id="trial-name" placeholder="请输入姓名" required />
                </div>

                <div className="space-y-2">
                  <Label>性别 *</Label>
                  <RadioGroup defaultValue="male" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="trial-male" />
                      <Label htmlFor="trial-male" className="cursor-pointer">男</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="trial-female" />
                      <Label htmlFor="trial-female" className="cursor-pointer">女</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trial-company">单位 *</Label>
                  <Input id="trial-company" placeholder="请输入单位名称" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trial-position">职位 *</Label>
                  <Input id="trial-position" placeholder="请输入职位" required />
                </div>

                <div className="space-y-2">
                  <Label>目前学历 *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择目前学历" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">本科</SelectItem>
                      <SelectItem value="master">硕士</SelectItem>
                      <SelectItem value="doctor">博士</SelectItem>
                      <SelectItem value="other">其他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referrer">介绍人 *</Label>
                  <Input id="referrer" placeholder="请输入介绍人姓名" required />
                </div>
              </Card>
            </>
          )}

          <Button type="submit" className="w-full">
            提交报名
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VipCourseRegister;

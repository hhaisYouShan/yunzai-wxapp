import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bell, Moon, Globe, Lock, FileText, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: "通知设置",
      items: [
        {
          icon: Bell,
          label: "消息通知",
          type: "switch",
          value: notifications,
          onChange: setNotifications,
        },
      ],
    },
    {
      title: "显示设置",
      items: [
        {
          icon: Moon,
          label: "深色模式",
          type: "switch",
          value: darkMode,
          onChange: setDarkMode,
        },
      ],
    },
    {
      title: "账号与安全",
      items: [
        {
          icon: Lock,
          label: "修改密码",
          type: "link",
          path: "/change-password",
        },
        {
          icon: Globe,
          label: "语言设置",
          type: "link",
          path: "/language",
        },
      ],
    },
    {
      title: "其他",
      items: [
        {
          icon: FileText,
          label: "用户协议",
          type: "link",
          path: "/agreement",
        },
        {
          icon: FileText,
          label: "隐私政策",
          type: "link",
          path: "/privacy",
        },
        {
          icon: HelpCircle,
          label: "帮助中心",
          type: "link",
          path: "/help",
        },
      ],
    },
  ];

  const handleClearCache = () => {
    toast({
      title: "清除成功",
      description: "缓存已清除",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="font-bold text-foreground">设置</h1>
      </div>

      <div className="p-4 space-y-4">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-sm font-medium text-muted-foreground px-2 mb-2">
              {section.title}
            </h2>
            <Card>
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`flex items-center justify-between p-4 ${
                    itemIndex !== section.items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">{item.label}</span>
                  </div>
                  {item.type === "switch" ? (
                    <Switch
                      checked={item.value}
                      onCheckedChange={item.onChange}
                    />
                  ) : (
                    <button
                      onClick={() => navigate(item.path!)}
                      className="flex items-center"
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </button>
                  )}
                </div>
              ))}
            </Card>
          </div>
        ))}

        <Card className="p-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleClearCache}
          >
            清除缓存
          </Button>
        </Card>

        <div className="text-center text-xs text-muted-foreground pt-4">
          <p>国研在线 v1.0.0</p>
          <p className="mt-1">深圳市国研时代教育科技有限公司</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

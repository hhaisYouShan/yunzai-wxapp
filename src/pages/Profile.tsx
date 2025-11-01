import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import icons from "@/lib/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Profile = () => {
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleWechatLogin = async () => {
    toast({
      title: "微信登录",
      description: "正在跳转到微信授权页面...",
    });
    // 微信登录逻辑将在这里实现
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "退出失败",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "退出成功",
        description: "您已成功退出登录",
      });
    }
  };

  const menuItems = [
    { icon: ShoppingBag, label: "购买记录", path: "/orders" },
    { icon: Star, label: "收藏记录", path: "/favorites" },
    { icon: Calendar, label: "线下活动参与", path: "/activity-participation" },
  ];

  const actionItems = [
    { icon: Phone, label: "电话咨询", value: "400-885-1955", path: "tel:400-885-1955" },
    { icon: MessageSquare, label: "问题反馈", path: "/feedback" },
    { icon: Settings, label: "设置", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-4 pt-6 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <img src={logo} alt="国研在线" className="w-10 h-10 bg-white rounded-lg p-1" />
          <h1 className="text-lg font-bold">国研在线</h1>
        </div>
        
        {user ? (
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-14 h-14 border-2 border-primary-foreground">
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback>{user.user_metadata?.name?.[0] || user.email?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-bold">{user.user_metadata?.name || "用户"}</h2>
                <p className="text-sm opacity-90">{user.email}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              退出
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-14 h-14 border-2 border-primary-foreground bg-primary-foreground/20">
                <AvatarFallback className="text-primary-foreground text-xl">👋</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-bold">您好，欢迎来到国研在线</h2>
                <p className="text-sm opacity-90">登录享受更多服务</p>
              </div>
            </div>
          </div>
        )}

        {/* WeChat Login Button */}
        {!user && (
          <div className="mt-6">
            <Button 
              onClick={handleWechatLogin}
              className="w-full bg-white text-primary hover:bg-white/90 font-medium"
              size="lg"
            >
              <span className="mr-2">💬</span>
              微信快捷登录
            </Button>
            <Link to="/auth">
              <Button 
                variant="ghost" 
                className="w-full mt-2 text-primary-foreground hover:bg-primary-foreground/10"
                size="sm"
              >
                其他登录方式
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="px-4 -mt-5 mb-3">
        <div className="grid grid-cols-3 gap-3">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Coupon Card */}
      <div className="px-4 mb-3">
        <Card className="p-4 bg-gradient-to-r from-accent/20 to-secondary/20 border-accent/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Ticket className="w-6 h-6 text-accent" />
              <span className="font-medium text-foreground">券码兑换</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </Card>
      </div>

      {/* Menu List */}
      <Card className="mx-4">
        {actionItems.map((item, index) =>
          item.label === "电话咨询" ? (
            <a
              key={item.label}
              href={item.path}
              className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                index !== actionItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.value && (
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                )}
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                index !== actionItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Link>
          )
        )}
      </Card>

      {/* Footer */}
      <div className="text-center mt-6 px-4 text-xs text-muted-foreground space-y-1.5">
        <div className="flex items-center justify-center gap-2">
          <Link to="/agreement" className="text-primary">《用户协议》</Link>
          <span>和</span>
          <Link to="/privacy" className="text-primary">《隐私政策》</Link>
        </div>
        <p>@Copyright2024</p>
        <p>深圳市国研时代教育科技有限公司.All rights reserved.</p>
      </div>
    </div>
  );
};

export default Profile;

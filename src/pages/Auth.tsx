import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import icons from "@/lib/icons";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email: `${phone}@app.com`, // 将手机号转换为邮箱格式
      password,
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "登录失败",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "登录成功",
        description: "欢迎回来！",
      });
      navigate("/profile");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signUp({
      email: `${phone}@app.com`, // 将手机号转换为邮箱格式
      password,
      options: {
        data: {
          name,
          phone,
        },
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "注册失败",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "注册成功",
        description: "欢迎加入国研在线！",
      });
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <img src={icons.ChevronLeft} alt="" className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-foreground">登录注册</h1>
      </div>

      <div className="px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 p-2">
            <img src={logo} alt="国研在线" className="w-full h-full" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">国研在线</h2>
          <p className="text-sm text-muted-foreground mt-1">连接知识，启迪未来</p>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="login">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="login">登录</TabsTrigger>
              <TabsTrigger value="register">注册</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-phone">手机号</Label>
                  <Input
                    id="login-phone"
                    name="phone"
                    type="tel"
                    placeholder="请输入手机号"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">密码</Label>
                  <Input
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="请输入密码"
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-muted-foreground cursor-pointer">
                      记住密码
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-primary hover:underline"
                  >
                    忘记密码？
                  </button>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "登录中..." : "登录"}
                </Button>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">姓名</Label>
                  <Input
                    id="register-name"
                    name="name"
                    type="text"
                    placeholder="请输入姓名"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-phone">手机号</Label>
                  <Input
                    id="register-phone"
                    name="phone"
                    type="tel"
                    placeholder="请输入手机号"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">密码</Label>
                  <Input
                    id="register-password"
                    name="password"
                    type="password"
                    placeholder="请输入密码（6-20位）"
                    minLength={6}
                    required
                  />
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Checkbox id="agree" required />
                  <label htmlFor="agree" className="text-muted-foreground cursor-pointer leading-relaxed">
                    我已阅读并同意
                    <button type="button" className="text-primary hover:underline mx-1">
                      《用户协议》
                    </button>
                    和
                    <button type="button" className="text-primary hover:underline mx-1">
                      《隐私政策》
                    </button>
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "注册中..." : "注册"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Quick Login */}
        <div className="mt-8">
          <div className="relative text-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative inline-block bg-background px-4">
              <span className="text-sm text-muted-foreground">其他登录方式</span>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
              <span className="text-lg">📱</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
              <span className="text-lg">💬</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 模拟提交
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "提交成功",
        description: "感谢您的反馈，我们会尽快处理！",
      });
      navigate(-1);
    }, 1000);
  };

  const handleImageUpload = () => {
    // 模拟图片上传
    if (images.length < 3) {
      setImages([...images, `https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400`]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="font-bold text-foreground">问题反馈</h1>
      </div>

      <div className="p-4">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact">联系方式</Label>
              <Input
                id="contact"
                type="text"
                placeholder="请输入您的手机号或邮箱"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">问题标题</Label>
              <Input
                id="title"
                type="text"
                placeholder="简要描述您遇到的问题"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">问题描述</Label>
              <Textarea
                id="description"
                placeholder="请详细描述您遇到的问题，我们会尽快为您解决"
                className="min-h-32 resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>上传截图（选填，最多3张）</Label>
              <div className="flex flex-wrap gap-3">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt={`截图${index + 1}`}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {images.length < 3 && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="w-20 h-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-1 hover:border-primary transition-colors"
                  >
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">上传</span>
                  </button>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "提交中..." : "提交反馈"}
            </Button>
          </form>
        </Card>

        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 提示：我们通常会在24小时内回复您的反馈，请保持联系方式畅通。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

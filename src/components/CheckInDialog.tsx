import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QrCode, CheckCircle2 } from "lucide-react";

interface CheckInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activityTitle: string;
  onCheckIn: (code: string) => void;
}

export const CheckInDialog = ({
  open,
  onOpenChange,
  activityTitle,
  onCheckIn,
}: CheckInDialogProps) => {
  const [code, setCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (code.trim()) {
      onCheckIn(code);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setCode("");
        onOpenChange(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    setCode("");
    setIsSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
              <DialogTitle className="text-center text-2xl">活动签到</DialogTitle>
              <DialogDescription className="text-center text-base">
                {activityTitle}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="code" className="text-base">
                  签到码
                </Label>
                <Input
                  id="code"
                  placeholder="请输入签到码"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  className="h-12 text-base"
                  autoFocus
                />
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 h-11"
                >
                  取消
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!code.trim()}
                  className="flex-1 h-11 bg-primary hover:bg-primary/90"
                >
                  确认签到
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="py-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 animate-in zoom-in">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl mb-2">
              签到成功！
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              感谢您的参与
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

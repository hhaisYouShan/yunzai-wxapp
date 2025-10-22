import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

interface HeroHeaderProps {
  onApply: () => void;
  className?: string;
}

const HeroHeader = ({ onApply, className }: HeroHeaderProps) => {
  return (
    <header
      className={cn(
        "bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-b border-border px-5 pt-6 pb-5 animate-fade-in",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="国研校友会 logo" className="w-12 h-12 object-contain" loading="lazy" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">校友会</h1>
            <p className="text-xs text-muted-foreground">连接精英，共创未来</p>
          </div>
        </div>
        <Button onClick={onApply} className="shadow-[var(--shadow-red)] hover-scale">
          加入校友会
        </Button>
      </div>
    </header>
  );
};

export default HeroHeader;

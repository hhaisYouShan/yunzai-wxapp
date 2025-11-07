import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export interface AlumniItem {
  id: number | string;
  name: string;
  degree: string;
  company: string;
  position: string;
  region: string;
}

interface AlumniShowcaseProps {
  alumni: AlumniItem[];
}

const AlumniShowcase = ({ alumni }: AlumniShowcaseProps) => {
  return (
    <section className="px-4 mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-foreground">部分校友展示</h2>
        <span className="text-xs text-muted-foreground">仅展示部分信息</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {alumni.slice(0, 4).map((a) => (
          <Card key={a.id} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all">
            <div className="text-center mb-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{a.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-foreground text-sm">{a.name}</h3>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                <span className="truncate">{a.degree}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-secondary" />
                <span className="truncate">{a.company}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                <span>{a.region}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">加入校友会查看完整校友信息</p>
      </div>
    </section>
  );
};

export default AlumniShowcase;

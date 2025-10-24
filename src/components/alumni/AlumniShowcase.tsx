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
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-bold text-foreground text-lg">部分校友展示</h2>
          <p className="text-xs text-muted-foreground mt-0.5">优秀校友风采</p>
        </div>
        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">仅展示部分</span>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-2 gap-4">
        {alumni.slice(0, 4).map((a, index) => (
          <Card 
            key={a.id} 
            className="group relative overflow-hidden bg-gradient-to-br from-card via-card to-muted/20 border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-4">
              {/* Avatar Section */}
              <div className="text-center mb-3">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {a.name.charAt(0)}
                    </span>
                  </div>
                  {/* Status dot */}
                  <div className="absolute bottom-2 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card shadow-sm" />
                </div>
                <h3 className="font-bold text-foreground text-sm mt-1">{a.name}</h3>
              </div>

              {/* Info Section */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 p-2 rounded-md bg-muted/30 group-hover:bg-muted/50 transition-colors">
                  <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground line-clamp-2 leading-relaxed">{a.degree}</span>
                </div>
                <div className="flex items-start gap-2 p-2 rounded-md bg-muted/30 group-hover:bg-muted/50 transition-colors">
                  <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-secondary mt-0.5" />
                  <span className="text-muted-foreground line-clamp-2 leading-relaxed">{a.company}</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md bg-muted/30 group-hover:bg-muted/50 transition-colors">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{a.region}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-5 text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10">
        <p className="text-sm text-foreground font-medium mb-1">想了解更多校友信息？</p>
        <p className="text-xs text-muted-foreground">加入校友会查看完整校友资料与联系方式</p>
      </div>
    </section>
  );
};

export default AlumniShowcase;

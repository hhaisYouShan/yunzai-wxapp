import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import icons from "@/lib/icons";

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
    <section className="mb-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <div>
          <h2 className="font-bold text-foreground text-lg">部分校友展示</h2>
          <p className="text-xs text-muted-foreground mt-0.5">优秀校友风采</p>
        </div>
        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">仅展示部分</span>
      </div>

      {/* Horizontal Scroll Alumni Cards */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 pb-2">
          {alumni.slice(0, 6).map((a, index) => (
            <Card 
              key={a.id} 
              className="group flex-shrink-0 w-[280px] relative overflow-hidden bg-gradient-to-br from-card via-card to-muted/20 border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-5">
                {/* Top Section - Avatar and Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Avatar className="w-14 h-14 border-2 border-primary/20 shadow-md group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-300">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-xl font-bold bg-clip-text">
                        <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {a.name.charAt(0)}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                    {/* Status dot */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card shadow-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-base truncate">{a.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{a.position}</p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                    <img src={icons.GraduationCap} alt="" className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{a.degree}</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                    <img src={icons.Briefcase} alt="" className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{a.company}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                    <img src={icons.MapPin} alt="" className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{a.region}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-5 mx-4 text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/10">
        <p className="text-sm text-foreground font-medium mb-1">想了解更多校友信息？</p>
        <p className="text-xs text-muted-foreground">加入校友会查看完整校友资料与联系方式</p>
      </div>
    </section>
  );
};

export default AlumniShowcase;

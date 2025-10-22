import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface RegionItem {
  id: string;
  name: string;
  count: number;
}

interface RegionsScrollerProps {
  regions: RegionItem[];
}

const RegionsScroller = ({ regions }: RegionsScrollerProps) => {
  return (
    <section className="px-4 mb-6 animate-fade-in">
      <h2 className="font-bold text-foreground mb-3">分区校友会</h2>
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {regions.map((region) => (
          <Link key={region.id} to={`/alumni/${region.id}`} className="flex-shrink-0">
            <Card className="px-6 py-3 hover:shadow-[var(--shadow-medium)] transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40 whitespace-nowrap">
              <div className="text-center">
                <h3 className="font-bold text-primary text-base mb-0.5">{region.name}</h3>
                <p className="text-xs text-muted-foreground">{region.count}人</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RegionsScroller;

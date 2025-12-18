import { Users, Eye, Database, ShieldCheck, Zap } from "lucide-react";

export const VALUES_DATA = [
  { key: "human", icon: Users },
  { key: "clarity", icon: Eye },
  { key: "data", icon: Database },
  { key: "security", icon: ShieldCheck },
  { key: "simplicity", icon: Zap },
] as const;

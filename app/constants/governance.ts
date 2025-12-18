import { ShieldCheck, Server, Lock, Layers } from "lucide-react";

export const GOVERNANCE_MEDIA = {
  image:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
};

export const GOVERNANCE_FEATURES = [
  { key: "pdpl", icon: ShieldCheck },
  { key: "cloud", icon: Server },
  { key: "isolation", icon: Lock },
  { key: "zones", icon: Layers },
] as const;

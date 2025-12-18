import { Layers, TrendingUp, AlertTriangle } from "lucide-react";

export const DETAILED_PROBLEMS = [
  {
    key: "silos",
    icon: Layers,
    image:
      "https://c-uae.com/wp-content/uploads/2023/09/Saudi-business-landscape.jpg",
    stat: "SILO",
  },
  {
    key: "gap",
    icon: TrendingUp,
    image:
      "https://focus.hidubai.com/content/images/2022/09/Untitled-design--4--1.jpg",
    stat: "GAP",
  },
  {
    key: "fog",
    icon: AlertTriangle,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    stat: "FOG",
  },
] as const;

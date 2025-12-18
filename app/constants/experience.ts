import { Briefcase, Megaphone, Smartphone, Truck } from "lucide-react";

export const EXPERIENCE_ITEMS = [
  {
    key: "sales",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
  },
  {
    key: "brand",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    key: "digital",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    key: "supply",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
  },
] as const;

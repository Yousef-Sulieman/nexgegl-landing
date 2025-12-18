"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import { NexgeglLogo } from "./Logo";
import { Button } from "./ui";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Dictionary } from "../dictionaries/types";

export default function Navbar({
  lang,
  dict,
}: {
  lang: "en" | "ar";
  dict: Dictionary;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isRTL = lang === "ar";
  const switchLang = isRTL ? "en" : "ar";

  const newPath = pathname.replace(/^\/(en|ar)/, `/${switchLang}`);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/90 backdrop-blur-md shadow-lg py-7"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="shrink-0"
        >
          <NexgeglLogo />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center  gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                text-md font-semibold text-gray-300
                hover:text-gold-400
                uppercase tracking-[0.15em]
                transition-colors
                text-center
              "
            >
              {dict.nav[link.key]}
            </a>
          ))}

          {/* Language Switch */}
          <button
            onClick={() => router.push(newPath)}
            className="
              px-3 py-1.5
              rounded-md
              text-xs font-semibold tracking-widest
              border border-white/20
              text-white/80
              hover:border-gold-400
            "
          >
            {dict.common.switchTo}
          </button>

          {/* Login */}
          <Link href={`/login`}>
            <Button variant="primary">{dict.common.login}</Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language Switch (Mobile) */}
          <button
            onClick={() => router.push(newPath)}
            className="
            px-3 py-1.5
            rounded-md
            text-xs font-semibold tracking-widest
            border border-white/20
            text-white/80
            hover:border-gold-400
            transition
          "
          >
            {dict.common.switchTo}
          </button>

          {/* Burger */}
          <button
            className="text-white shrink-0"
            onClick={() => setIsOpen((p) => !p)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
            md:hidden w-full
            bg-navy-950 border-b border-navy-700
            px-6 py-6
            flex flex-col gap-4
            shadow-xl
            text-start
          "
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                text-lg text-gray-200
                hover:text-gold-400
                border-b border-navy-800 pb-2
              "
              onClick={() => setIsOpen(false)}
            >
              {dict.nav[link.key]}
            </a>
          ))}

          <Link href={`/login`}>
            <Button variant="primary">{dict.common.login}</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

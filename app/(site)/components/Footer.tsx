"use client";

import React from "react";
import { Globe, Mail, Phone } from "lucide-react";
import { NexgeglLogo } from "./Logo";
import { Button } from "./ui";
import { Dictionary } from "../dictionaries/types";

export default function Footer({ dict }: { dict: Dictionary }) {
  const f = dict.footer;

  return (
    <footer
      id="contact"
      className="bg-navy-950 pt-24 pb-12 border-t border-navy-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <NexgeglLogo className="h-8" />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              {f.brandDescription}
            </p>

            <div className="flex gap-4">
              {[Globe, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-sm bg-navy-800 border border-navy-700
                             flex items-center justify-center
                             hover:bg-gold-500 hover:text-navy-900
                             transition-all duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up delay-100">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
              {f.contact.title}
            </h4>

            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-4 group">
                <Mail className="text-gold-500 w-5 h-5 mt-0.5" />
                <a
                  href={`mailto:${f.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {f.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-4 group">
                <Globe className="text-gold-500 w-5 h-5 mt-0.5" />
                <a
                  href={f.contact.website}
                  className="hover:text-white transition-colors"
                >
                  {f.contact.websiteLabel}
                </a>
              </li>

              <li className="flex items-start gap-4 group">
                <Phone className="text-gold-500 w-5 h-5 mt-0.5" />
                <span>{f.contact.phone}</span>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
              {f.platform.title}
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              {f.platform.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Access */}
          <div className="animate-fade-in-up delay-300">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">
              {f.client.title}
            </h4>

            <div className="bg-navy-900 p-6 border border-navy-800 rounded-sm">
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                {f.client.description}
              </p>

              <Button
                variant="outline"
                className="w-full text-xs py-3 border-navy-600 hover:border-gold-500"
              >
                {f.client.button}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t border-navy-800 flex flex-col md:flex-row
                        justify-between items-center gap-4
                        text-xs text-gray-500 uppercase tracking-wider
                        animate-fade-in-up delay-500"
        >
          <p>
            © {new Date().getFullYear()} {f.bottom.rights}
          </p>

          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">
              {f.bottom.privacy}
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {f.bottom.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Route, Newspaper, Megaphone } from "lucide-react";

const menu = [
  {
    label: "Trang chủ",
    href: "/",
    icon: Home,
  },
  {
    label: "Lộ trình",
    href: "/lo-trinh",
    icon: Route,
  },
  {
    label: "Bài viết",
    href: "/bai-viet",
    icon: Newspaper,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden md:flex fixed left-0 h-[100vh] z-50 w-25 flex-col items-center justify-between py-4">
        <div className="flex flex-col gap-4 pt-18">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-4 rounded-xl text-xs transition hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button className="rounded-full p-3 bg-gray-100 hover:bg-gray-200">
          <Megaphone className="w-5 h-5 text-gray-700" />
        </button>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t z-50 flex items-center justify-around py-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

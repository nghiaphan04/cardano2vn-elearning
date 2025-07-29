"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./toggle-mode-icon";
import images from "@/constants/images";

export default function Header() {
  return (
    <header className="w-full border-b z-60 px-4 sm:px-6 py-3 fixed flex items-center justify-between bg-white dark:bg-black">
      <div className="flex items-center gap-2">
        <div className="lg:w-50 md:w-50 h-8 w-40 sm:h-10 relative">
          <Image src={images.logo.src} alt={images.logo.alt} fill />
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl mx-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border w-full">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <span className="hidden md:hidden lg:inline text-sm hover:underline cursor-pointer">
          Khóa học của tôi
        </span>
        <Bell className="w-5 h-5 cursor-pointer" />
        <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer" />
        <ModeToggle />
      </div>
    </header>
  );
}

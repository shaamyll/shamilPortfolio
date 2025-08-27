import React from 'react';
import { Tabs, Tab } from "@heroui/react";

function Header() {
  const tabs = [
    {
      id: "home",
      label: "Home",
      href: "#main"
    },
    {
      id: "about",
      label: "About",
      href: "#about-full"
    },
    {
      id: "techstack",
      label: "Techstack",
      href: "#skill-section"
    },
    {
      id: "projects",
      label: "Projects",
      href: "#work-section"
    }
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="fixed top-3 z-50 backdrop-blur-md bg-gray-800/80 rounded-lg px-2 py-1 shadow-lg">
        <Tabs
          aria-label="Navigation Tabs"
          variant="underlined"
          className="flex items-center"
          classNames={{
            tabList: "gap-1 p-0 bg-transparent flex",
            tab: "px-4 py-1 text-sm sm:text-base font-medium text-gray-300 hover:text-white data-[selected=true]:text-white",
            cursor: "absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-800 rounded-lg"
          }}
        >

          {tabs.map((item) => (
            <Tab
              key={item.id}
              id={item.id}
              title={item.label}
              className="outline-none"
              onClick={() => {
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Header;

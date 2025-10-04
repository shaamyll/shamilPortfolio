import { Tabs, Tab } from "@heroui/react";
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "projects", label: "Projects", path: "/projects" },
  ];

  // Determine which tab should be active based on current route
  const getSelectedTab = () => {
    const currentPath = location.pathname;
    const item = navItems.find(item => item.path === currentPath);
    return item ? item.id : "home";
  };

  return (
    <div className="w-full flex justify-center">
      <div className="fixed top-3 z-50 backdrop-blur-md bg-gray-300 rounded-lg px-2 py-1 shadow-lg">
        <Tabs
          aria-label="Navigation Tabs"
          variant="solid"
          selectedKey={getSelectedTab()} 
          className="flex items-center"
          classNames={{
            tabList: "gap-1 p-0 bg-transparent flex rounded-md",
            tab: "px-4 py-1 text-sm sm:text-base font-medium text-white  data-[selected=true]:text-white",
            cursor: "absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-800"
          }}
        >
          {navItems.map((item) => (
            <Tab
              key={item.id}
              id={item.id}
              title={item.label}
              className="outline-none"
              onPress={() => {
                // Use React Router to navigate
                navigate(item.path);
              }}
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
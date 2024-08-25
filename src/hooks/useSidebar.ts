import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

interface UseSidebarProps {
  setIsSidebar: (isSidebar: boolean) => void;
}

const useSidebar = ({ setIsSidebar }: UseSidebarProps) => {
  const location = useLocation();
  const { user } = useSelector((state: any) => state.user);

  const handleSidebarToggle = () => {
    if (window.innerWidth < 767) {
      setIsSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSidebarToggle);
    return () => {
      window.removeEventListener("resize", handleSidebarToggle);
    };
  }, []); // Add location to dependencies if you want to react to route changes

  return { location, user, handleSidebarToggle };
};

export default useSidebar;

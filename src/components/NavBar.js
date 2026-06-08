/* Hooks */
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useLocation, useNavigate } from "react-router-dom";

/* Utils */
import { cn } from "../lib/utils";


export default function NavBar({
  className,
  navItems = [],
  isCol = false,
  setMenuToggle = null,
}) {

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedNavItem, setSelectedNavItem] = useState(
    null
  );

  useEffect(() => {
    const matchedNavItem = navItems.find(
      (navItem) => navItem.itemUrl === location.pathname
    );

    setSelectedNavItem(matchedNavItem?.id ?? navItems[0]?.id ?? null);
  }, [location.pathname, navItems]);

  /** Handles page navigation */
  function navigateToPage(page) {
    setSelectedNavItem(page.id);
    navigate(page.itemUrl);
    if (typeof setMenuToggle === "function") {
      setMenuToggle(false);
    }
  }

  return (
    <nav className={cn(className)}>
      <ul className={`flex gap-6 items-center ${isCol && "flex-col"}`}>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <button
              type="button"
              className={`cursor-pointer text-2xl sm:text-xl md:text-2xl font-google-sans font-semibold transition-colors duration-200 ease-in-out ${
                selectedNavItem === navItem.id ? "text-white" : "text-slate-600"
              }`}
              onClick={() => navigateToPage(navItem)}
            >
              <RoughNotation
                type="underline"
                show={selectedNavItem === navItem.id}
                color="#ffffff"
                strokeWidth={2}
                iterations={2}
                animationDuration={300}
              >
                <span className="inline-block pb-1">{navItem.itemName}</span>
              </RoughNotation>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

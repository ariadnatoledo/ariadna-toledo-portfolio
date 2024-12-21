"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  name: string;
  route: string;
}

const NavItem = ({ activeItem, name, route, setActiveItem }: NavItemProps) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span onClick={() => setActiveItem(name)} className="hover:text-rose-600">{name}</span>
    </Link>
  ) : null;
};

function NavBar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-rose-900 text-xl border-b-4 border-rose-800 md:text-2xl">{activeItem}</span>
      <div className="text-lg flex space-x-5">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem} 
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem} 
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default NavBar;



// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const NavItem: FunctionComponent<{
//   activeItem: string;
//   setActiveItem: Function;
//   name: string;
//   route: string;
// }> = ({ activeItem, name, route, setActiveItem }) => {
//   return activeItem !== name ? (
//     <Link href={route}>
//       <span onClick={() => setActiveItem(name)}>{name}</span>
//     </Link>
//   ) : null;
// };

// function NavBar() {
//   const [activeItem, setActiveItem] = useState<string>("");
//   const pathname = usePathname();

//   useEffect(() => {
//     if (pathname === "/") setActiveItem("About");
//     if (pathname === "/projects") setActiveItem("Projects");
//     if (pathname === "/resume") setActiveItem("Resume");
//   }, [pathname]);

//   return (
//     <div>
//       <span className="font-bold text-rose-900">{activeItem}</span>
//       <div className="text-rose-900 font-lg flex space-x-3">
//         <NavItem
//           activeItem={activeItem}
//           setActiveItem={setActiveItem}
//           name="About"
//           route="/"
//         />
//         <NavItem
//           activeItem={activeItem}
//           setActiveItem={setActiveItem}
//           name="Projects"
//           route="/projects"
//         />
//         <NavItem
//           activeItem={activeItem}
//           setActiveItem={setActiveItem}
//           name="Resume"
//           route="/resume"
//         />
//       </div>
//     </div>
//   );
// }

// export default NavBar;

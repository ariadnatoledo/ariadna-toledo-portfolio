import { FunctionComponent } from "react";
import { Category } from "../../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "cursor-pointer hover:text-rose-700 capitalize";
  if (active === value) className += " text-rose-700";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="px-3 py-2 space-x-3 overflow-x-auto list-none flex">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="MySQL" {...props} />
      <NavItem value="Next.js" {...props} />
      <NavItem value="TypeScript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;

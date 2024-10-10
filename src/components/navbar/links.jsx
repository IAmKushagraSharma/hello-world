import { Link, NavLink } from "react-router-dom";
import { links } from "./data";

const Links = () => {
  return (
    <ul className="flex gap-4">
      {links.map((link, index) => (
        <NavLink
          className={({ isActive }) => {
            return `border border-transparent hover:border-zinc-600 hover:bg-zinc-700 px-2 rounded-md ${isActive && "border-zinc-600 f bg-zinc-700"}`;
          }}
          key={index}
          to={link.href}
        >
          {link.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default Links;

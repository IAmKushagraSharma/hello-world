import { Link } from "react-router-dom";
import { links } from "./data";

const Links = () => {
  return (
    <ul className="flex gap-4">
      {links.map((link, index) => (
        <Link
          className="border border-transparent hover:border-zinc-600 hover:bg-zinc-700 px-2 rounded-md"
          key={index}
          to={link.href}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
};

export default Links;

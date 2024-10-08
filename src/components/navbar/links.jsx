import { links } from "./data";

const Links = () => {
  return (
    <ul className="flex gap-4">
      {links.map((link, index) => (
        <a
          className="border border-transparent hover:border-zinc-600 hover:bg-zinc-700 px-2 rounded-md"
          key={index}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </ul>
  );
};

export default Links;

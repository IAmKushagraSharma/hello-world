import Links from "./links";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center bg-zinc-800 text-zinc-200 px-4 py-2">
      <p>Navbar</p>
      <Links />
    </nav>
  );
};

export default Navbar;

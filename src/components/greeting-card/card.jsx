const Card = ({ name }) => {
  return (
    <section className="border-4 border-zinc-600 text-zinc-800 rounded-xl p-4 bg-gradient-to-br from-zinc-800/60 via-zinc-700/40 to-zinc-800/60">
      <h1 className="text-center font-black">Hello, {name}!</h1>
      <p>Welcome to my awesome site</p>
    </section>
  );
};

export default Card;

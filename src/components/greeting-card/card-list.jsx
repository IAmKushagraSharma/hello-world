import React from "react";
import Card from "./card";

const CardList = () => {
  const names = ["Kusahgra", "tony", "hulk", "wanda", "prop6", "prop7", "himanshu"];

  return (
    <div className="my-10 flex flex-row gap-4 flex-wrap justify-center items-center min-h-max w-full">
      {names.map((name, index) => (
        <Card key={index} name={name} />
      ))}
    </div>
  );
};

export default CardList;

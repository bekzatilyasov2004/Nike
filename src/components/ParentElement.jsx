import React from "react";
import { Data } from "../constants/Data";
import Card from "./Card";
import { SiNike } from "react-icons/si";
import Basket from "./Basket";

const ParentElement = () => {
  return (
    <div>
      <div className="header">
        <h1>Nike</h1>
        <SiNike size={"90px"} />
      </div>
      <div className="wrapper">
        {Data.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              category={item.category}
              url={item.url}
              price={item.price}
              stock={item.stock}
            />
          );
        })}
      </div>
      <Basket />
    </div>
  );
};

export default ParentElement;

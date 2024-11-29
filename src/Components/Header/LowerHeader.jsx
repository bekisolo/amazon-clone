import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import classes from "./header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          {/* Menu icon and 'All' option  */}
          <MdOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Service</li>
        <li>Costumer Services</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;

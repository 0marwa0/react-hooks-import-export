// src/Hogwarts.js
import React from "react";
import whoseHouse from "./houses/HagridsHouse";
import HooflePoof from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

export default function Hogwarts() {
  return (
    <div>
      <HooflePoof />
    </div>
  );
}

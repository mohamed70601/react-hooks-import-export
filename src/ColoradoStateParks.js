import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from "./parks/RockyMountain";
import * as RMFucntions from "./parks/RockyMountain";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

howManyParks();

console.log(parkTrees);
parkWildlife();

export default ColoradoStateParks;

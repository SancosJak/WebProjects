import { Airplane, jet, plane, propellerPlane } from "./iAirplane";

const newAirplane: Airplane = {
    numberOfEngines: 3,
    isJet: true,
    maxHeight: 42000,
    capacity: 180,
};

console.log(newAirplane);
console.log(jet);
console.log(propellerPlane);
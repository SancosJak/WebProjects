interface Airplane{
    numberOfEngines: number;
    isJet: boolean;
    maxHeight: number;
    capacity?: number;
}

const airbus310: Airplane = {
    numberOfEngines: 4,
    isJet: true,
    maxHeight: 10,
    capacity: 100
}
console.log(airbus310)
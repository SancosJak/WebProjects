// В отдельном файле ts создайте interface Airplane - самолет с полями:

// numberOfEngines - количество двигателей
// isJet - реактивный
// maxHeight - максимальная высота полета
// capacity - опциональное поле вместимость
// Создайте несколько переменных типа Airplane.

interface Airplane {
    numberOfEngines: number
    isJet: boolean
    maxHeight: number
    capacity?: number
}

const jet: Airplane = {
    numberOfEngines: 2,
    isJet: true,
    maxHeight: 1000
}

const plane: Airplane = {
    numberOfEngines: 2,
    isJet: false,
    maxHeight: 1000
}

const propellerPlane: Airplane = {
    numberOfEngines: 2,
    isJet: false,
    maxHeight: 1000,
    capacity: 100
}

export {Airplane, jet, plane, propellerPlane }
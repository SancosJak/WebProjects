type Action =
| { type: 'counter/plus', payload: number }
| { type: 'counter/minus', payload: number };

export default Action;
// Действие Action - это объект в котором 2 поля: тип и payload.
// type - тип действия (имя нашего действия)
// payload - данные действия (информация необходимая для выполнения операции)

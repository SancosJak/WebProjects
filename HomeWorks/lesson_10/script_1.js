// Задание 1
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.

const findElementFunc = (array, index) => {
    if (index >= 0 && index < array.length) {
      return array[index];
    } else {
      return "Index is out of araray bounds";
    }
  };
  
  const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const testIndex = 5;

  console.log(findElementFunc(testArray, testIndex));
  
  const getElementByIndex = (array ,index) =>array[index];
  const res = getElementByIndex(["lime", "orange", "banana"], 2);
  console.log(res);
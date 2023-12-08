// const formElement = document.getElementById("form");
// const answerElement = document.getElementById("answer");

// formElement.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const name = event.target.name.value;
//   console.log(name);
//   loadGender(name);
// });

// async function loadGender(name) {
//   const res = await fetch(`https://api.genderize.io/?name=${name}`);
//   const obj = await res.json();
//   console.log(obj);
//   // когда одинаковые названия переменных может возникнуть коллизия
//   // ниже мы достали по ключу name и сохранили в переменную firstName
//   const { name: firstName, gender, probability } = obj;
//   console.log(firstName);
//   console.log(gender);
//   answerElement.textContent = `Имя: ${firstName} Пол: ${gender} С вероятностью: ${probability}`;
// }
const formElement = document.getElementById("form");
const answerElement = document.getElementById("answer");

formElement.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const name = event.target.name.value.trim(); 
  if (name) {
    try {
      const genderData = await loadGender(name);
      displayGenderData(genderData);
    } catch (error) {
      console.error(`Произошла ошибка: ${error.message}`);
    }
  } else {
    //console.log("Введите имя");
    alert("Введите имя");
  }
});

async function loadGender(name) {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  
  if (!res.ok) {
    throw new Error(`Ошибка при выполнении запроса: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

function displayGenderData(genderData) {
  const { name: firstName, gender, probability } = genderData;
  console.log(firstName);
  console.log(gender);
  answerElement.textContent = `Имя: ${firstName} Пол: ${gender} С вероятностью: ${probability}`;
}

// Задание 2 *
// Создайте функцию, которая бы принимала бы следующие параметры:

// код погоды
// функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.

// Таблица соответствия код-описание:
// SQ – шквал
// PO – пыльный вихрь
// FC - торнадо
// BR – дымка (видимость от 1 до 9 км)
// HZ – мгла (видимость менее 10 км)
// FU – дым (видимость менее 10 км)
// DS - пыльная буря (видимость менее 10 км)
// SS - песчаная буря (видимость менее 10 км)
// Подсказка: удобно использовать в одном из методов switch-case:

function weatherInfo(weatherCode, decode) {
    switch (weatherCode) {
      case "SQ":
        return decode("Шквал");
      case "PO":
        return decode("Пыльный вихрь");
      case "FC":
        return decode("Торнадо");
      case "BR":
        return decode("Дымка (видимость от 1 до 9 км)");
      case "HZ":
        return decode("Мгла (видимость менее 10 км)");
      case "FU":
        return decode("Дым (видимость менее 10 км)");
      case "DS":
        return decode("Пыльная буря (видимость менее 10 км)");
      case "SS":
        return decode("Песчаная буря (видимость менее 10 км)");
      default:
        return "Неизвестный код погоды";
    }
  }
  
  function decodeWeather(description) {
    return `Погода: ${description}`;
  }
  
  const weatherCode = "DS";
  const weatherDescription = weatherInfo(weatherCode, decodeWeather);
  console.log(weatherDescription);
  
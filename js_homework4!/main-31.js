// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(num1, num2, num3) {
  const price = (num1 - num1 * (num2 / 100)) * (1 + num3 / 100);
  console.log(price);
}
// цена 100 ,скидка 15%,налог 20%
calculateFinalPrice(100, 15, 20);
// цена 100 ,скидка 20%,налог 0%
calculateFinalPrice(100, 20, 0);
// цена 100 ,скидка 20%,налог 10%
calculateFinalPrice(100, 20, 10);

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(name, password) {
  if (name === `admin` && password === `123456`) {
    console.log(`Доступ разрешен`);
  } else {
    console.log(`Доступ запрещен`);
  }
}
checkAccess(`admin`, `123456`);

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(time) {
  if (time >= 0 && time < 6) {
    console.log(`Ночь`);
  } else {
    if (time >= 6 && time < 12) {
      console.log(`Утро`);
    } else {
      if (time >= 12 && time < 18) {
        console.log(`День`);
      } else {
        if (time >= 18 && time < 24) {
          console.log(`Вечер`);
        } else {
          console.log(`Некорректное время`);
        }
      }
    }
  }
}

getTimeOfDay(0);

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

function findFirstEven(NUM1, NUM2) {
  let numberEven = NUM1;
  for (let i = NUM1; i <= NUM2; i++) {
    if (i % 2 === 0) {
      console.log(`Первое четное число ${i}`);
      return;
    }
    console.log(`Чётных чисел нет`);
  }
}
findFirstEven(6, 10);
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

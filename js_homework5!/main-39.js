// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
let person = {
  name: "Раф",
  surname: "Клоян",
  age: "22",
  "student school": "Aroken",
};

console.log(person);
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(person));

let person2 = {};

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}
console.log(isEmpty(person2));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.

const task = {
  title: "Новости 27.07.26",
  description: "Посмотреть новости в Московской области",
  isCompleted: false,
};
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

// Затем с помощью цикла for in выведите все свойства полученного объекта.
console.log(cloneAndModify(task, { isCompleted: true, priority: "Высокий" }));

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = obj => {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

callAllMethods(myObject);

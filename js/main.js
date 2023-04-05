// ! ===================== Functions / Функции ===========================================
// Функция - это именнованный блок кода, который вызывается в нужных местах по имени.

// ! ============================= Function DECLARATION ==================================
// * Синтаксис:
// function funcName () {
//     блок кода
// }
// funcName ()


// function funcName (параметры) {
//     блок кода с использованием параметров
// }
// funcName (аргументы)

// название функции лучше задавать в виде глаголов (что она делает)
function showName () {
    console.log("Понедельник - день тяжелый");
}
showName();
showName() // функции можно вызывать сколько угодно раз

// todo счетчик 1-10
function counter() {
    for (let i = 1; i < 11; i++) {
        console.log(`Счетчик ${i}`);
    }
} 
counter();

// функция с аргументами
function counter2(maxNumber)  {
    for (let i = 1; i <= maxNumber; i++) {
        console.log(`Счетчик 2: === ${i}`);
    }
} 
counter2(10);

// Параметры - это данные, которых мы не знаем заранее (шаблон).
// Аргументы - это реальные значения (входные данные). Эти данные попадают в параметры.

// функция с шаблонами
function people (name, age, city, phone) {
    console.log(`Привет, меня зовут ${name}. Мне ${age}. Я живу в городе ${city}. Звони мне по номеру ${phone}. Пока!`);
}
people ('Emil', 33, 'Bishkek', '0550970899')

// функция с промптом
// function checkAge(age) {
//     if (age < 18) {
//         alert("Вход запрещен")
//     } else {
//         alert("Вход разрешен")
//     }
// }
// let userAge = +prompt("Введите ваш возраст: ");
// checkAge(userAge)

// ! ------------------------ return ---------------------------

// Функция может также отдавать какой-либо конечный результат, о таком поведении функции говорят что она "возвращает" результат. Для того, чтобы вернуть что-то из функции используется ключевое слово return.
// return заставляет функцию завершить работу и передает нам окончательный результат работы функции.
// после ключевого слова return функция завершает свою работу, любой код написанный после return не сработает

// ! Не стоит путать возврат результата return работы функции с простым выводом в консоль браузера console.log().
// * console.log() не возвращает результат функции, а просто распечатывает все что мы передаем в скобки.

// * пример
function sayHi(name){ 
    str = `привет, ${name}`;
    return str; // эту строку прописать обязательно, потому что без return, console.log ничего не выведет
  }
  
  console.log(sayHi('John')) 

// todo К примеру, напишем функцию, которая вычисляет площадь треугольника, для этого передадим ей основание треугольника и высоту:
function square (base, height) {
    return (1/2)*base*height;
}
let answer = square(20, 6);
console.log(answer);

// todo 5 + 3
function calc(num1, num2) {
    return num1 + num2;
}
console.log(calc(5, 3));

// todo посчитать премию Алексу
let person = {
    name: "Alex",
    salary: 30000
}

function givePremium(salary, percent) {
    // нижний результат нужно сохранить (через return) как ключ в объекте выше
    return (salary * percent) / 100;
}
person.premium = givePremium(person.salary, 10);
console.log(person);

// todo использовать return как break (остановить нижний код)
function checkType(elem) {
    if (Boolean(elem) === false) {
        return;
    }

    console.log(`Тип данных значения = ${typeof elem}`);
}
checkType(56)

// проверить является ли объект массивом
console.log(Array.isArray([]));

// TODO Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.
// function calc1(num1, num2) {
//     if (num1 === num2) {

//     }
//     return num1 + num2;
// }

// ! ========================= Области видимости ==================================

let userName = "Emil"; // глобальная переменная

function showMessage1() {
    console.log(`Привет ${userName}`);
}
showMessage1();

function showAge () {
    let message = "Мне 33"; // локальная область
    console.log(message);
}
showAge();

// ! ============================= Параметры ========================================
// Параметры это переменные, в которые будут попадать передаваемые значения.
// Используя функции, часто нужно обрабатывать какие-либо данные приходящие извне.
// Для таких случаев, при создании функции можно прописать параметры.
// Параметры указывают в круглых скобках, после названия функции: function myFunc(num) {}

// ! =============================  Arguments ========================================
// Аргументами функции называют значения, которые передаются во время вызова функции, эти значения попадают в параметры указанные при создании функции: myFunc(5) 

// * Функции могут иметь неограниченное количество параметров.
// * Передаваемые аргументы в свою очередь, должны быть точно в том количестве что и указанные параметры.

// аргументы могут работать без заданных параметров
function random1() {
    // console.log(a,b,c,d,e,f,g);
    console.log(arguments);
    console.log(arguments.length); // показывает количество аргументов
    console.log(arguments[3]); // показывает определенный индекс
    console.log(...arguments); // распаковывает аргументы
    console.log([...arguments]); // похож на первый вариант
}
random1 (1,2,3,4,5,6,7);


// Объект (псевдомассив) arguments, это массивоподобный объект, доступный только внутри функций (имеет свойство length и индексацию с 0, но не имеет доступа к методам массива). Через переменную arguments можно ссылаться на аргументы функции внутри неё:

// ! =========================== Function EXPRESSION =================================

// * синтаксис
// переменная = function() {
//  тело функции
// };
// переменная
let funcExp = function () {
    console.log("***************");
}
funcExp();
// Хойстинг не работает на function expression

// todo сделайте функцию, которая возвращает квадрат числа. число задается параметром

let cub = function (num) {
    return num**2 // возводит в квадрат
}
console.log(cub(5));


// todo создайте функцию, которая принимает параметром число от 1 до 7, в возвращает день недели
let day = function (digit) {
    switch (digit) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            "Выберите другую цифру"
    } 
}
console.log(day(6));

// ! return
// Аналогия с банкоматом
function bankomat(pin, sum) {
    return pin + sum;
  }
  
  bankomat(22, 1000); // таким образом нельзя увидеть результат
  // let result = bankomat(33, 500) // таким образом мы сохраняем вывод функции в переменную result, но не сработает так как нет return
  let result = bankomat(44, 500); // сработает т.к. поставили return
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerText = result;

// ! ============================ Методы объекта ===========================
// функция, созданная внутри объекта - метод объекта

// todo
let obj = {
    type: "Boeing 777",
    inService: 999,
    isActive: true,
    // fly: function(city) {
    //     return `Самолет ${obj.type} лет в город ${city}!`;
    // },

    // код выше можно сократить
    fly(city) {
        return `Самолет ${obj.type} лет в город ${city}!`;
    }
};
console.log(obj);
console.log(obj.fly("New York"));

//TODO Дан объект passenger. Напишите метод для этого объекта,который возвращает информацию о пассажире. Также, напишите второй метод, который меняет значение свойства baggage на то значение, которое получает в качестве параметра.
let passenger = {
    firstName: "Sam",
    lastName: "Winchester",
    passportNum: "US12345678",
    baggage: 20,
};

  passenger.getInfo = function() {
    return `Passenger ${passenger.firstName} ${passenger.lastName}. assport number is ${passenger.passportNum}. Maximum luggage weight is ${passenger.baggage}kg`;
  }

  console.log(passenger.getInfo());

  passenger.setBaggage = function(kg) {
    passenger.baggage = kg;
  };
  passenger.setBaggage(30);

  console.log(passenger.getInfo());

// Пример
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 20kg
//   passenger.setBaggage(30);
//   passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 30kg

// todo Дан объект user. Напишите метод byTicket для этого объекта. При вызове метода количество билетов должно увеличиваться на единицу, при условии, что у пользователя будет достаточно средств на балансе. Также, с баланса должна сниматься стоимость билета (400). Если на счету недостаточно средств вывести соответствующее сообщение.

let user = {
    name: "Sam",
    age: 17,
    balans: 2000,
    tickets: 0,
    price: 400,
}

user.byTicket = function() {
    if (user.balans >= user.price) {
        user.tickets++;
        user.balans -= user.price;
        return "Вы успешно купили билет"
    } else {
        return "У вас недостаточно денег"
    }
}

console.log(user);
console.log(user.byTicket()); 
console.log(user.byTicket()); 
console.log(user.byTicket()); 
console.log(user.byTicket()); 
console.log(user.byTicket()); 
console.log(user.byTicket()); 
console.log(user);

// ! --------------------------- Object.keys ----------------------------
// вытаскивает ключи объекта (создает массив ключей объекта)
const obj1 = {
    str: "stroka",
    num: 123,
    bool: true,
    zero: null,
};
console.log(Object.keys(obj1));

// ! ---------------------------- Object.value ---------------------------
// вытаскивает значения объекта
console.log(Object.values(obj1));

// ! ---------------------------- Object.entries --------------------------
// создает массивы ключей объекта в виде ключ/значение
console.log(Object.entries(obj1));

// ! -------------------------- Object.freeze ------------------------------
// закрывает доступ к объекту для изменений
// * Object.freeze(obj1);
obj1.bigInt = 1234567n;

// ! -------------------------- Object.assign ------------------------------
// копирует значения из одного объекта в другой
let user1 = {
    job: "JS Dev",
    firstName: "Greg"
};

let user2 = {
    company: "Google",
    country: "US",
}

let user3 = Object.assign(user1, user2);
console.log(user3);

// ! -------------------------- this ----------------------------------------
// это ключевое слово которое обращается к своему контексту (к своему родителю)
// обращается только к ключам объекта
console.log(this);

// todo
let parent = {
    name: "Steve",
    lastName: "Jobs",
    sayHi() {
        return `Hello ${this.name} ${this.lastName}!`
    },
};
console.log(parent.sayHi());

// todo
let dev1 = {
    name: "Azret",
    language: "JS",
}
let dev2 = {
    name: "Nastya",
    language: "Python",
}

// создаем новый ключ через метод this чтобы он обращался к своему родителю
// через expression
let methodObj = function() {
    return `Hello, my name is ${this.name}. My language is ${this.language}`
}

// добавляем новый ключ в dev1 присваивая ему methodObj
dev1.sayName = methodObj;
console.log(dev1.sayName());

dev2.sayName = methodObj;
console.log(dev2.sayName());

// todo
let dog = {
    name: "Tsesa",
    age: 6,
    color: "black",
    breed: "shepperd",
    intro: () => this.name,
};
console.log(dog.intro()); // ничего не выйдет потому что
// в стрелочных функциях this работает не так как в других функциях. У стрелочных функций нет своего контекста.
// но если стрелочная функция находится в другой функции, то она сработает

// ! --------------------- вложенный this -------------------------------------------
let obj2 = {
    name: "Vika",
    age: 36,
    child: {
        name: "Milana",
        sayName() {
            let func = () => this.name; // создаем стрелочную функцию внутри declaration
            return func();
        },
    },
};
console.log(obj2.child.sayName());

// ! --------------------------- spread оператор ------------------------------------------------
// распаковщик
// используется в массивах и объектах
let women = {
    name: "Vika",
    lastName: "Ibraeva",
    age: 36,
    job: "PR, sales",
    address: {
        country: "UK",
        city: "London",
        index: 12345
    }
}

// let men = women; 
// * это не копирование, это присваивание. таким образом создается лишь ссылка на оригинал объекта. аналогия - создать ярлык на рабочем столе.

// * чтобы скопировать данные с предыдущего объекта, надо сделать следующее
let men = {...women};
men.name = "Emil";
men.lastName = "Ibraev";
// * spread оператор не может копировать вложенные объекты, на него он создаст ссылку, как в строчке ниже
// * но spread оператор копирует методы
men.address.country = "Kyrgyzstan"; 

console.log("women", women);
console.log("men", men);


// ! ---------------- Поверхностное копирование ------------------------
let mentor = {
    name: "Mirdin",
    age: 23,
    stack: {
        js: "middle",
        c: "junior",
    },
};
let copyMentor = {...mentor}
console.log(mentor, copyMentor);

// ! ------------------ Глубокое копирование ------------------------------
// * чтобы скопировались вложенные объекты
let mentor1 = {
    name: "Azret",
    birthday: "14/10",
    job: "JS Dev",
    company: "Makers",
    stack: {
        html: "done",
        css: "done",
        js: "done",
        py: "in progress"
    },
    sayHi() {
        return this.name;
    },
}

let mentor2 = JSON.parse(JSON.stringify(mentor1));
// скопировались все ключи включая вложенные объекты
// * но здесь есть изьян: JSON.stringify не отправляет методы

mentor2.name = "Emir";
mentor2.birthday = "9/03";
mentor2.stack.py = "there is smth"

console.log(mentor1.sayHi());

console.log("mentor1", mentor1);
console.log("mentor2", mentor2);

// ? Если нужно скопировать объект БЕЗ вложенных объектов, используем spread оператор (поверхностное копирование)
// ? Если нужно скопировать объект С вложенными объектами, используем JSON.stringify и JSON.parse (глубокое копирование). Методы объектов не скопируются.

// ! ------------------------- callback --------------------------------
// Коллбэк это функция, которая передается как аргумент другой функции и вызывается внутри этой функции. Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно когда-нибудь позже, если это будет необходимо(от англ. «call back» – обратный вызов).

function callback(x) {
    console.log("Коллбэк начал работу");
    console.log(x); // "Hello"
    console.log("Коллбэк закончил работу");
}

function main(y) {
    console.log("Главная функция начала работу");
    callback(y);
    console.log("Главная функция закончила работу");
}

main("Hello")

// ! ================= makers tasks | functions =========================
// todo 1. Напишите функцию checkTask(), которая при вызове будет возвращать строку: Привет, JavaScript! 
function checkTask() {
    str = "Привет, JavaScript!";
    return str;
}
console.log(checkTask);

// todo 2. Создайте функцию checkTask(), которая принимает в качестве аргумента два числа и возвращает их сумму.
function checkTask1(num1, num2) {
    return num1 + num2;
  }
console.log(checkTask1(5,9))

// todo 3. Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр. Например, для числа 456, функция должна вернуть: 15
function checkTask2(num) {
    let sum = 0;
    let numStr = String(num);
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    return sum;
  }
  console.log(checkTask2(999))

// todo 12.
function checkTask4(start, end) {
    let res = []
    for (let i = start; i <= end; i++) {
        let elem = i.toString().split(""); // ["2", "0", "0", "0"], ["2", "0", "0", "1"] ...
        let isEven = true
        for (let j of elem) {
            if (j % 2 !== 0) {
                isEven = false
            }
        }
        if(isEven) {
            res.push(i)
        }
    }
    return res
}
console.log(checkTask4(2000, 3001));

// todo 13.
function checkTask6() {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "$!?&%@#*";
    let password = "";
    for (let i = 0; i < 2; i++) {
        password += lower.charAt(Math.floor(Math.random() * lower.length));
        password += upper.charAt(Math.floor(Math.random() * upper.length));
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}
console.log(checkTask6());

// todo 14.
function checkTask5(str1) {
    if (str1.length != 10) {
        return false;
    }
    let north = 0,
        south = 0,
        west = 0,
        east = 0;
        for (let i = 0; i < str1.length; i++) {
            switch (str1[i]) {
                case "с":
                    north++;
                    break;
                case "ю":
                    south++;
                    break;
                case "з":
                    west++;
                    break;
                case "в":
                    east++;
                    break;
            }
        }
        if (south == north && east == west) {
            return true;
        } else {
            return false;
        }
}
console.log(checkTask5("сюсюсюсюсю"));


// todo Elevator
/* Создайте объект checkTask, который будет представлять из себя лифт.
У него должны быть методы:

● printFloor - печатает текущий этаж, на котором находится лифт

● upOneFloor - перемещает на один этаж вверх

● downOneFloor - перемещает на один этаж вниз

● toFloor - принимает целое числовое значение от 1 до 16 - переместиться на определенный этаж.

Изначально лифт находится на первом этаже(1).
Когда мы вызываем метод toFloor(), программа должна в консоли отобразить постепенное перемещение лифта на нужный этаж (только в этом методе).

● Лифт должен хранить текущий этаж, на котором он находится.
● Метод toFloor должен использовать методы upOneFloor и downOneFloor для перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.

Используйте return

● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа, иначе нужно вывести в консоль:
Error! 

К примеру, поднимемся на третий этаж:
checkTask.toFloor(3) 
вывод:
1 
2 
3 

Переместимся на этаж выше:
checkTask.upOneFloor()  
checkTask.printFloor() 
вывод: 4

спустимся на этаж ниже:
checkTask.downOneFloor() 
checkTask.printFloor() 
вывод будет: 3 

поедем на восьмой этаж:
checkTask.toFloor(8) 
вывод будет:
4 
5 
6 
7 
8 
*/

let checkTask3 = {
    floor: 1,
    printFloor() {
        console.log(this.floor);
    },
    upOneFloor() {
        if(this.floor < 16) {
            this.floor++
        } else {
            console.log("Вы на последнем этаже!");
        }
    },
    downOneFloor() {
        if(this.floor > 1) {
            this.floor--
        } else {
            console.log("Вы на первом этаже!");
        }
    },
    toFloor: function(num3) {
        if (num3 <= 16 && num3 >= 1) {
            this.printFloor();
        
        do {
            if (num3 < this.floor) {
                this.downOneFloor()
            } else if(num3 > this.floor) {
                this.upOneFloor()
            }
            this.printFloor();
        } while (this.floor != num3)
    } else {
        console.log("Error");
    }
},
};

checkTask3.toFloor(16);

// ! ========================== Arrow functions | Стрелочые функции ==========================
// *синтаксис
// (параметры) => {тело функции}
// (a) => console.log(a)

// у стрелочных функций нет хойстинга

// todo Пример
// function someFunc(param) {
//     return param;
// }
// console.log(someFunc("8 March"));
// let func = (param) => {
//     return param;
// };

// код выше можно написать одной строкой
let func = (param) => param;
console.log(func("Hello"));

// Если стрелочная функция принимает один параметр и возвращает однострочный результат, можно опустить все скобки и не использовать ключевое слово return

// todo Сумма
let getSum = (x,y) => x + y;
console.log(getSum(4,5));

// todo Если лежит число, вытащить "это число", если не число, то вытащить "это другой тип данных"
let type = (x) => typeof x == "number" ? "это число": "это другой тип данных";
console.log(type(33));

// ! в стрелочных функциях arguments не работает

// ! ------------ makers tasks / arrow functions ------------------------
// todo 1.
const checkTask7 = () => {console.log("Hello World!")}



- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
  Вивести кожну змінну за допомогою: console.log , alert, document.write

```
  let hello = "hello";
      let owu = "owu";
      let com = "com";
      let ua = "ua";
      let int1 = 1;
      let int10 = 10;
      let int123 = 123;
      let intng999 = -999;
      let intPI = 3.14;
      let intEPSILON = 2.7;
      let int16 = 16;
      let True = true;
      let False = false;

      //log; alert; document.write;
      console.log(hello);
      console.log(owu);
      console.log(com);
      console.log(ua);
      console.log(int1);
      //
      document.write(int123 + "<br/>");
      document.write(intng999 + "<br/>");
      document.write(intPI + "<br/>");
      document.write(intEPSILON + "<br/>");
      document.write(int16 + "<br/>");
      //
      alert(True);
      alert(False);

```

- Переприсвоїти кожній змінній з завдання значення на довільне.
  Вивести кожну змінну за допомогою: console.log , alert, document.write

  ```
      hello = "helloOKten";
      owu = "owuTheBest";
      com = "comminity";
      ua = "ua";
      int1 = 1.1;
      int10 = 1000;
      int123 = 12345;
      intng999 = -999999;
      intPI = 3.1415;
      intEPSILON = 2.69;
      int16 = 16.7;
      True = "It's true";
      False = "It's false";

  ```

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

  ```
      firstName = "Pavlo";
      middleName = "Igorovich";
      lastName = "Makohon";
      console.log(firstName + " " + middleName + " " + lastName);

  ```

- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
  Вивести "Вітаю _Імя_ _По батькові_. Тобі _вік_ років".

  ```
  let firstName = prompt("Enter firstname");
    let middleName = prompt("Enter middleName");
    let age = prompt("Enter your age");
    console.log(
      "Вітаю! " + firstName + " " + middleName + ". Тобі - " + age + " років"
    );

  ```

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

  ```
  let a = 100;
      let b = "100";
      let c = true;

      console.log(typeof a);
      console.log(typeof b);
      console.log(typeof c);
  <<<<<<< HEAD:JavaScript/H1_JS/README.md
  ```

```


=======

```

> > > > > > > 898170f8d9cc8701f554275c05da505c50c1b367:JavaScript/README.md

- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
  В однакових виразах не використовувати однакові оператори!!!

```

5 < 6 -> true
5 > 6 -> false
5 === 6 -> false
5 >= 6 -> false
10 == 10 -> true
10 === 10 -> true
10 < 10 -> false
10 > 10 -> false
10 != 10 -> false
123 === '123' -> false
123 == '123' -> true

```

- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода? и почему?
  <<<<<<< HEAD:JavaScript/H1_JS/README.md
  let str = "20";
  let a = 5;
  document.write(str + a + "<br/>");
  document.write(str - a + "<br/>");
  document.write(str \* "2" + "<br/>");
  document.write(str / 2 + "<br/>");

###Output

```

205
15
Error
10

```

```
=======
  let str = "20";
  let a = 5;
  document.write(str + a + "<br/>");
  document.write(str - a + "<br/>");
  document.write(str \* "2" + "<br/>");
  document.write(str / 2 + "<br/>");

  ###Output

```

205
15
Error
10

```
>>>>>>> 898170f8d9cc8701f554275c05da505c50c1b367:JavaScript/README.md
```

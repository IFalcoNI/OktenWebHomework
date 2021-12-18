// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let name = document.forms.userInfo.name;
let age = document.forms.userInfo.age;
let button = document.forms.userInfo.myButton;

let userToStorage = (userName, userAge) => {
  let user = {
    name: userName,
    age: userAge,
  };
  localStorage.setItem("userInfo", JSON.stringify(user));
};

button.onclick = () => {
  userToStorage(name.value, age.value);
};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.forms.carInfo.model;
let type = document.forms.carInfo.type;
let volume = document.forms.carInfo.volume;
let buttonCar = document.forms.carInfo.myCarButton;

let carToStorage = (carModel, carType, carVolume) => {
  let car = {
    model: carModel,
    type: carType,
    volume: carVolume,
  };
  localStorage.setItem("carInfo", JSON.stringify(car));
};

buttonCar.onclick = () => {
  carToStorage(model.value, type.value, volume.value);
};

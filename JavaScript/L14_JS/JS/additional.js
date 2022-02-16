// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let name = document.forms.itemForm.name;
let count = document.forms.itemForm.count;
let price = document.forms.itemForm.price;
let image = document.forms.itemForm.image;
// let button = document.forms.itemForm.button;

let itemToStorage = (itemName, itemCount, itemPrice, itemImage) => {
  let item = {
    name: itemName,
    count: itemCount,
    price: itemPrice,
    image: itemImage,
  };
  localStorage.setItem("itemInfo", JSON.stringify(item));
};

const add = () => {
  itemToStorage(name.value, count.value, price.value, image.value);
};

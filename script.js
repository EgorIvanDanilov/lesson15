const formItems = document.getElementById("form-items");
const loader = document.getElementById("loader");
const productList = document.getElementById("product-list");
//обратились к фоме по айди
formItems.addEventListener("submit", (event) => {
  // предотвратили поведение по умолчанию
  event.preventDefault();
  // включили Loader
  loader.style.display = "block";
  const amount = event.target["form-amount"].value;
  event.target["form-amount"].value = ""; // чистка строки
  // подставили в запрос переменную через шаблонные строки
  fetch(`http://fakestoreapi.com/products?limit=${amount}`).then((response) => {
    if (response.ok) {
      throw new Error("Errror");
    }
    return response.json();
  });
});

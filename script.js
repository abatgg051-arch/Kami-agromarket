let cartCount = 0;

async function loadProducts() {
  const catalog = document.querySelector('.catalog');
  try {
    const response = await fetch('db.json');
    const data = await response.json();
    const products = data.products;
    renderProducts(products);
  } catch (error) {
    catalog.innerHTML += '<p>Не удалось загрузить товары. Проверьте, что страница открыта через Live Server.</p>';
  }
}

function renderProducts(products) {
  const catalog = document.querySelector('.catalog');
  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} тг</p>
      <button>В корзину</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      cartCount++;
      document.getElementById('cart-count').textContent = cartCount;
    });
    catalog.appendChild(card);
  });
}

loadProducts();
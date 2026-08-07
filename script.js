const productContainer = document.getElementById("products");
const productCount = document.getElementById("productCount");

function displayProducts(items) {

  productContainer.innerHTML = "";

  productCount.textContent =
    `${items.length} ${items.length === 1 ? "PRODUCT" : "PRODUCTS"}`;

  if (items.length === 0) {
    productContainer.innerHTML = `
      <div class="empty">
        No products found.
      </div>
    `;
    return;
  }

  items.forEach(product => {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

      <div class="image-container">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          loading="lazy"
        >

        <div class="watermark">
          DRIP CULTURE
        </div>

      </div>

      <div class="product-info">

        <div class="product-category">
          ${product.category}
        </div>

        <div class="product-name">
          ${product.name}
        </div>

        <div class="price">
          ${product.price}
        </div>

        <a
          href="${product.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="shop-btn"
        >
          SHOP ON MYNTRA →
        </a>

      </div>

    `;

    productContainer.appendChild(card);

  });

}


function filterProducts(category, button) {

  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  if (category === "All") {
    displayProducts(products);
    return;
  }

  const filtered = products.filter(
    product => product.category === category
  );

  displayProducts(filtered);

}


displayProducts(products);

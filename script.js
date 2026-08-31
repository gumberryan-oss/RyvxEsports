/*

==================================================

RYVX STORE SETTINGS

==================================================

Replace the sample products below with your own

legitimate digital products/services.

Do NOT use this template to sell unauthorized

third-party virtual currency or restricted goods.

*/

const PRODUCTS = [

  {

    id: "editing-pack",

    name: "RYVX Editing Pack",

    price: 5.00,

    mark: "R",

    description:

      "Original editing assets and presets for creators."

  },

  {

    id: "graphics-pack",

    name: "RYVX Graphics Pack",

    price: 8.00,

    mark: "G",

    description:

      "Original graphics and templates for creators."

  },

  {

    id: "creator-session",

    name: "Creator Setup Session",

    price: 15.00,

    mark: "C",

    description:

      "A digital creator setup and feedback session."

  }

];

/*

==================================================

CHECKOUT

==================================================

Put your legitimate hosted checkout URL here.

Example:

const CHECKOUT_URL =

  "https://your-payment-provider.com/checkout";

Leave it blank until your checkout is ready.

*/

const CHECKOUT_URL = "";

/*

==================================================

CART

==================================================

*/

let cart =

  JSON.parse(

    localStorage.getItem("ryvx_cart") || "[]"

  );

/*

==================================================

HELPERS

==================================================

*/

function getProduct(id) {

  return PRODUCTS.find(

    product => product.id === id

  );

}

function money(amount) {

  return "$" + amount.toFixed(2);

}

/*

==================================================

RENDER PRODUCTS

==================================================

*/

function renderProducts() {

  const container =

    document.getElementById("products");

  container.innerHTML =

    PRODUCTS.map(product => {

      return `

        <article class="product">

          <div class="product-image">

            ${product.mark}

          </div>

          <h3>

            ${product.name}

          </h3>

          <p class="product-description">

            ${product.description}

          </p>

          <div class="product-row">

            <span class="product-price">

              ${money(product.price)}

            </span>

            <button

              class="add-button"

              onclick="addToCart('${product.id}')"

            >

              Add to cart

            </button>

          </div>

        </article>

      `;

    }).join("");

}

/*

==================================================

ADD TO CART

==================================================

*/

function addToCart(id) {

  cart.push(id);

  saveCart();

  openCart();

}

/*

==================================================

REMOVE FROM CART

==================================================

*/

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

}

/*

==================================================

SAVE CART

==================================================

*/

function saveCart() {

  localStorage.setItem(

    "ryvx_cart",

    JSON.stringify(cart)

  );

  renderCart();

}

/*

==================================================

RENDER CART

==================================================

*/

function renderCart() {

  const count =

    document.getElementById("cartCount");

  const items =

    document.getElementById("cartItems");

  const totalElement =

    document.getElementById("cartTotal");

  count.textContent = cart.length;

  if (cart.length === 0) {

    items.innerHTML = `

      <div class="empty-cart">

        Your cart is empty.

      </div>

    `;

  } else {

    items.innerHTML =

      cart.map((id, index) => {

        const product =

          getProduct(id);

        return `

          <div class="cart-item">

            <div>

              <strong>

                ${product.name}

              </strong>

              <br>

              <span>

                ${money(product.price)}

              </span>

            </div>

            <button

              class="remove-button"

              onclick="removeFromCart(${index})"

            >

              Remove

            </button>

          </div>

        `;

      }).join("");

  }

  const total =

    cart.reduce(

      (sum, id) =>

        sum + getProduct(id).price,

      0

    );

  totalElement.textContent =

    money(total);

}

/*

==================================================

OPEN / CLOSE CART

==================================================

*/

function openCart() {

  document.body.classList.add(

    "cart-open"

  );

}

function closeCart() {

  document.body.classList.remove(

    "cart-open"

  );

}

/*

==================================================

BUTTONS

==================================================

*/

document

  .getElementById("cartButton")

  .addEventListener(

    "click",

    openCart

  );

document

  .getElementById("closeCart")

  .addEventListener(

    "click",

    closeCart

  );

document

  .getElementById("cartOverlay")

  .addEventListener(

    "click",

    closeCart

  );

/*

==================================================

CHECKOUT

==================================================

*/

document

  .getElementById("checkoutButton")

  .addEventListener(

    "click",

    function () {

      if (cart.length === 0) {

        alert(

          "Your cart is empty."

        );

        return;

      }

      if (!CHECKOUT_URL) {

        alert(

          "Checkout is not connected yet. " +

          "Add your legitimate checkout URL " +

          "inside script.js."

        );

        return;

      }

      window.location.href =

        CHECKOUT_URL;

    }

  );

/*

==================================================

YEAR

==================================================

*/

document.getElementById("year").textContent =

  new Date().getFullYear();

/*

==================================================

START

==================================================

*/

renderProducts();

renderCart();
# <!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>RYVX Store</title>

  <meta

    name="description"

    content="Official RYVX digital products and services."

  >

  <link rel="stylesheet" href="styles.css">

</head>

<body>

  <!-- NAVBAR -->

  <header class="navbar">

    <a href="#" class="logo">RYVX</a>

    <nav>

      <a href="#shop">Shop</a>

      <a href="#faq">FAQ</a>

      <a href="#support">Support</a>

* {

  box-sizing: border-box;

}

html {

  scroll-behavior: smooth;

}

body {

  margin: 0;

  background: #070707;

  color: #f5f5f5;

  font-family: Arial, Helvetica, sans-serif;

}

a {

  color: inherit;

  text-decoration: none;

}

/* NAVBAR */

.navbar {

  height: 72px;

  padding: 0 7%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom: 1px solid #222;

  background: rgba(7, 7, 7, 0.9);

  backdrop-filter: blur(15px);

  position: sticky;

  top: 0;

  z-index: 100;

}

.logo {

  font-size: 24px;

  font-weight: 900;

  letter-spacing: 0.18em;

}

.navbar nav {

  display: flex;

  gap: 28px;

  color: #888;

  font-size: 14px;

}

.navbar nav a:hover {

  color: white;

}

.cart-button {

  border: 0;

  background: white;

  color: black;

  padding: 10px 16px;

  border-radius: 999px;

  font-weight: 800;

  cursor: pointer;

}

.cart-button span {

  background: black;

  color: white;

  border-radius: 50%;

  padding: 2px 6px;

  margin-left: 4px;

}

/* HERO */

.hero {

  min-height: 650px;

  padding: 90px 8%;

  display: grid;

  grid-template-columns: 1.15fr 0.85fr;

  align-items: center;

  gap: 50px;

  background:

    radial-gradient(

      circle at 80% 45%,

      #242424 0,

      transparent 38%

    );

}

.eyebrow {

  color: #888;

  font-size: 11px;

  font-weight: 900;

  letter-spacing: 0.25em;

}

.hero h1 {

  font-size: clamp(55px, 8vw, 105px);

  line-height: 0.86;

  letter-spacing: -0.07em;

  margin: 18px 0 25px;

}

.hero h1 span {

  color: #777;

}

.hero-description {

  max-width: 500px;

  color: #999;

  line-height: 1.7;

  margin-bottom: 32px;

}

.primary-button {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  border: 0;

  background: white;

  color: black;

  border-radius: 10px;

  padding: 14px 19px;

  font-weight: 900;

  cursor: pointer;

}

.primary-button:hover {

  transform: translateY(-2px);

}

.hero-logo {

  width: min(390px, 80vw);

  height: 390px;

  border: 1px solid #303030;

  border-radius: 30px;

  display: grid;

  place-items: center;

  margin: auto;

  font-size: 160px;

  font-weight: 950;

  background:

    linear-gradient(

      145deg,

      #191919,

      #090909

    );

  box-shadow:

    0 30px 100px #000;

}

/* SECTIONS */

.section {

  max-width: 1400px;

  margin: auto;

  padding: 90px 8%;

}

.section-header {

  display: flex;

  justify-content: space-between;

  align-items: end;

  margin-bottom: 30px;

}

.section h2 {

  font-size: 44px;

  letter-spacing: -0.05em;

  margin: 8px 0;

}

.section-note {

  color: #666;

}

/* PRODUCTS */

.product-grid {

  display: grid;

  grid-template-columns:

    repeat(3, 1fr);

  gap: 16px;

}

.product {

  background: #101010;

  border: 1px solid #252525;

  border-radius: 18px;

  padding: 15px;

  transition: 0.2s;

}

.product:hover {

  transform: translateY(-4px);

  border-color: #444;

}

.product-image {

  height: 210px;

  border-radius: 13px;

  background:

    linear-gradient(

      135deg,

      #292929,

      #0c0c0c

    );

  display: grid;

  place-items: center;

  font-size: 70px;

  font-weight: 950;

}

.product h3 {

  margin: 18px 0 7px;

}

.product-description {

  color: #888;

  font-size: 13px;

  line-height: 1.5;

  min-height: 40px;

}

.product-row {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-top: 20px;

}

.product-price {

  font-size: 20px;

  font-weight: 900;

}

.add-button {

  border: 0;

  background: white;

  color: black;

  border-radius: 9px;

  padding: 10px 13px;

  font-weight: 800;

  cursor: pointer;

}

/* FEATURES */

.features {

  border-block: 1px solid #222;

  padding: 30px 8%;

  display: grid;

  grid-template-columns:

    repeat(3, 1fr);

  gap: 30px;

}

.feature {

  display: flex;

  flex-direction: column;

  gap: 7px;

}

.feature span {

  color: #666;

  font-size: 12px;

}

/* FAQ */

.faq details {

  border-top: 1px solid #222;

  padding: 22px 0;

}

.faq details:last-child {

  border-bottom: 1px solid #222;

}

.faq summary {

  cursor: pointer;

  font-weight: 800;

}

.faq details p {

  color: #888;

  line-height: 1.6;

}

/* FOOTER */

footer {

  padding: 35px 8%;

  display: flex;

  justify-content: space-between;

  color: #666;

  font-size: 12px;

  border-top: 1px solid #222;

}

/* CART */

.cart-overlay {

  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.7);

  opacity: 0;

  pointer-events: none;

  transition: 0.25s;

  z-index: 200;

}

.cart {

  position: fixed;

  right: 0;

  top: 0;

  height: 100%;

  width: min(430px, 100%);

  background: #0c0c0c;

  border-left: 1px solid #292929;

  transform: translateX(100%);

  transition: 0.25s;

  z-index: 201;

  padding: 25px;

  display: flex;

  flex-direction: column;

}

body.cart-open .cart {

  transform: translateX(0);

}

body.cart-open .cart-overlay {

  opacity: 1;

  pointer-events: auto;

}

.cart-header {

  display: flex;

  justify-content: space-between;

  align-items: center;

}

.cart-header h2 {

  margin: 0;

}

.close-button {

  background: none;

  border: 0;

  color: white;

  font-size: 30px;

  cursor: pointer;

}

.cart-items {

  flex: 1;

  overflow-y: auto;

  padding: 20px 0;

}

.cart-item {

  display: flex;

  justify-content: space-between;

  gap: 15px;

  border-bottom: 1px solid #222;

  padding: 15px 0;

}

.remove-button {

  background: none;

  border: 0;

  color: #777;

  cursor: pointer;

}

.empty-cart {

  text-align: center;

  color: #666;

  margin-top: 60px;

}

.cart-total {

  border-top: 1px solid #222;

  padding: 20px 0;

  display: flex;

  justify-content: space-between;

  font-size: 20px;

}

.full {

  width: 100%;

}

.checkout-note {

  color: #666;

  font-size: 11px;

  line-height: 1.5;

}

/* MOBILE */

@media (max-width: 800px) {

  .hero {

    grid-template-columns: 1fr;

    padding-top: 60px;

  }

  .hero-logo {

    height: 260px;

    width: 260px;

    font-size: 100px;

  }

  .product-grid,

  .features {

    grid-template-columns: 1fr;

  }

  .navbar nav {

    display: none;

  }

  .section-header {

    display: block;

  }

  .section-note {

    margin-top: 8px;

  
// Update Price
function updatePrice() {
  const plusMemoryCost = Number(exMemoryCost.innerText);
  const plusStorageCost = Number(exStorageCost.innerText);
  const plusDeleveryCost = Number(deleveryCost.innerText);
  const newBestPrice = Number(bestPrice.innerText);

  const newTotal =
    newBestPrice + plusMemoryCost + plusStorageCost + plusDeleveryCost;
  totalPrice.innerText = Number(totalPrice.innerText);
  totalPrice.innerText = newTotal;
}

/* Memory */

const eightGb = document.getElementById("config-memory-eight-gb");
const sixteenGb = document.getElementById("config-memory-sixteen-gb");
const exMemoryCost = document.getElementById("ex-memory-cost");

// Add Event Listerner of Memories

eightGb.addEventListener("click", function () {
  exMemoryCost.innerText = 0;
  updatePrice();
});

sixteenGb.addEventListener("click", function () {
  exMemoryCost.innerText = 180;
  updatePrice();
});

/* Storage */

const ssdFiveTwelveGb = document.getElementById("config-ssd-fiveTwelve-gb");
const ssdOneTb = document.getElementById("config-ssd-one-tb");
const ssdTwoFiftySixGb = document.getElementById("config-ssd-twoFiftySix-gb");
const exStorageCost = document.getElementById("ex-storage-cost");

// Add Event Listerner of Storeges

ssdTwoFiftySixGb.addEventListener("click", function () {
  exStorageCost.innerText = 0;
  updatePrice();
});

ssdFiveTwelveGb.addEventListener("click", function () {
  exStorageCost.innerText = 100;
  updatePrice();
});

ssdOneTb.addEventListener("click", function () {
  exStorageCost.innerText = 180;
  updatePrice();
});

/* Delevery  */

const freeDelevery = document.getElementById("free-delevery");
const chargeDelevery = document.getElementById("charge-delevery");
const deleveryCost = document.getElementById("delevery-cost");

// Add Event Listerner of Storeges Delelveries

freeDelevery.addEventListener("click", function () {
  deleveryCost.innerText = 0;

  updatePrice();
});

chargeDelevery.addEventListener("click", function () {
  deleveryCost.innerText = 20;
  updatePrice();
});

// best price

const bestPrice = document.getElementById("best-price");
bestPrice.innerText = 1299;
/* bestPrice.addEventListener("click", function () {
  bestPrice.innerText = 1299;
}); */

/* Total Price */

const totalPrice = document.getElementById("total");

// Bonus Part-----------------------------------

// promo code
const grandTotal = document.getElementById("grand-Total");
const promoInput = document.getElementById("promo-input");
const promoBtn = document.getElementById("promo-btn");

function order(product) {
  let number = "93700000000";
  let message = "سلام، می‌خواهم " + product + " را خرید کنم";
  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url);
}

/* SEARCH */
document.getElementById("search").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});

/* FILTER */
function filter(type) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if(type === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(type)
        ? "block"
        : "none";
    }
  });
}
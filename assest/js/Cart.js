document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtns = document.querySelectorAll(".decrease");
    const increaseBtns = document.querySelectorAll(".increase");
    const quantityInputs = document.querySelectorAll(".quantity");
    const priceElement = document.querySelector(".price");
    const totalElement = document.querySelector(".total");
    const subtotalElement = document.querySelector(".subtotal");
    const grandTotalElement = document.querySelector(".grand-total");
    const price = 700000; 

    function updateTotal() {
        let quantity = parseInt(quantityInputs[0].value);
        let total = quantity * price;
        totalElement.textContent = total.toLocaleString("vi-VN") + " đ";
        subtotalElement.textContent = totalElement.textContent;
        grandTotalElement.textContent = totalElement.textContent;
    }

    decreaseBtns[0].addEventListener("click", function () {
        let quantity = parseInt(quantityInputs[0].value);
        if (quantity > 1) {
            quantityInputs[0].value = quantity - 1;
            updateTotal();
        }
    });

    increaseBtns[0].addEventListener("click", function () {
        let quantity = parseInt(quantityInputs[0].value);
        quantityInputs[0].value = quantity + 1;
        updateTotal();
    });

    quantityInputs[0].addEventListener("input", function () {
        if (isNaN(quantityInputs[0].value) || quantityInputs[0].value < 1) {
            quantityInputs[0].value = 1;
        }
        updateTotal();
    });

    updateTotal();
});

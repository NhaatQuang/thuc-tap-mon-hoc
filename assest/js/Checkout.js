document.addEventListener("DOMContentLoaded", function () {
    let addressCheckbox = document.getElementById("different-address");
    let addressField = document.getElementById("extra-address-field");

    // Ẩn phần nhập địa chỉ khác ban đầu
    addressField.style.display = "none";

    addressCheckbox.addEventListener("change", function () {
        if (this.checked) {
            addressField.style.display = "block";
        } else {
            addressField.style.display = "none";
        }
    });

    let orderButton = document.getElementById("place-order");
    orderButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn form submit thật
        alert("Đơn hàng của bạn đã được đặt thành công!");
    });
});

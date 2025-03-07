document.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.getElementById("main-img");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const prevBtn = document.querySelector(".prev-img");
    const nextBtn = document.querySelector(".next-img");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    const quantityInput = document.querySelector(".quantity-input");
    const increaseBtn = document.querySelector(".increase");
    const decreaseBtn = document.querySelector(".decrease");

    let currentIndex = 0;
    const imageSources = Array.from(thumbnails).map((img) => img.src);

    // Chuyển ảnh khi click vào thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("mouseover", () => {
            mainImg.src = thumbnail.src;
        });
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            mainImg.src = thumbnail.src;
        });
    });

    // Chuyển ảnh bằng nút prev/next
    prevBtn.addEventListener("click", () => {
        currentIndex =
            (currentIndex - 1 + imageSources.length) % imageSources.length;
        mainImg.src = imageSources[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        mainImg.src = imageSources[currentIndex];
    });

    // Chuyển đổi tab Mô tả và Đánh giá
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            tabContents.forEach((content) =>
                content.classList.remove("active")
            );
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });

    // Xử lý tăng/giảm số lượng sản phẩm
    increaseBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    decreaseBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
});

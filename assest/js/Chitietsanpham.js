document.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.getElementById("main-img");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const addToCartBtn = document.querySelector(".add-to-cart");

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

            tabContents.forEach((content) => content.classList.add("hidden"));
            document
                .getElementById(button.dataset.tab)
                .classList.remove("hidden");
        });
    });

    // Hiệu ứng hover cho nút Thêm vào giỏ hàng
    addToCartBtn.addEventListener("mouseover", () => {
        addToCartBtn.style.backgroundColor = "#c45a00";
    });
    addToCartBtn.addEventListener("mouseout", () => {
        addToCartBtn.style.backgroundColor = "#d77a00";
    });
});

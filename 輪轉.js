let currentIndex = 0;// 當前顯示的圖片索引

// 顯示對應索引的圖片
function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    // 確保索引循環處理
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // 移除所有圖片的 active 狀態，然後為當前圖片添加 active
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
    });
}

// 移動到上一張或下一張圖片
function moveSlide(step) {
    showSlide(currentIndex + step);
}

// 自動輪播圖片（可選）
setInterval(() => {
    moveSlide(1);
}, 5000); // 每 5 秒切換一張
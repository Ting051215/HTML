const carouselImages = document.querySelector('.carousel-images');
const indicators = document.querySelectorAll('.carousel-indicators span');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const imageCount = indicators.length;

// 切换到指定索引的图片
function goToSlide(index) {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// 自动播放轮播图
let interval = setInterval(() => {
    goToSlide((currentIndex + 1) % imageCount);
}, 3000);

// 添加手动切换功能
prevButton.addEventListener('click', () => {
    goToSlide((currentIndex - 1 + imageCount) % imageCount);
    resetInterval();
});

nextButton.addEventListener('click', () => {
    goToSlide((currentIndex + 1) % imageCount);
    resetInterval();
});

// 添加指示器点击事件
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
        resetInterval();
    });
});

// 重置自动播放计时器
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        goToSlide((currentIndex + 1) % imageCount);
    }, 3000);
}

// 카드 클릭 시 콘솔 로그 출력 (추후 인터랙션 추가용)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        console.log(`${card.querySelector('h3').innerText} 섹션으로 이동합니다.`);
    });
});

// 헤더 스크롤 이벤트
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
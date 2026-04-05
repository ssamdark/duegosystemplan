// 헤더 스크롤 이벤트
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/**
 * 탭 전환 로직 (공통)
 * @param {string} targetId - 보여줄 패널의 ID
 * @param {HTMLElement} btn - 클릭된 버튼 요소
 * @param {string} panelClass - 패널 그룹의 공통 클래스
 * @param {string} tabClass - 탭 버튼 그룹의 공통 클래스
 */
function switchTab(targetId, btn, panelClass, tabClass) {
    const panels = document.querySelectorAll(`.${panelClass}`);
    const tabs = btn.parentNode.querySelectorAll(`.${tabClass}`);
    
    // 모든 패널 숨김 및 탭 비활성화
    panels.forEach(p => p.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));
    
    // 선택한 패널 표시 및 탭 활성화
    const target = document.getElementById(targetId);
    if(target) target.classList.add('active');
    btn.classList.add('active');
}

/**
 * 상위 뎁스 Phase 탭 전환용
 */
function showPhase(phaseId, btn) {
    switchTab(phaseId, btn, 'tab-panel', 'phase-tab');
}

/**
 * [레퍼런스] 하위 상세 탭 전환용
 */
function showSub(subId, btn) {
    switchTab(subId, btn, 'sub-panel', 'sub-tab');
}

/**
 * [UI/UX] 와이어프레임 하위 탭 전환용
 */
function showWF(wfId, btn) {
    switchTab(wfId, btn, 'wf-panel', 'sub-tab');
}

/**
 * [브리핑] 챕터 탭 전환용
 */
function showChapter(chId, btn) {
    switchTab(chId, btn, 'tab-panel', 'chapter-tab');
}
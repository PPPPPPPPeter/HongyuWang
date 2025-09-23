document.addEventListener('DOMContentLoaded', () => {

    // ---(深/浅模式) ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    const htmlEl = document.documentElement;

    // 应用保存的主题
    if (currentTheme) {
        htmlEl.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.textContent = '☀️'; // 太阳图标
        }
    }

    themeToggle.addEventListener('click', () => {
        if (htmlEl.getAttribute('data-theme') === 'dark') {
            htmlEl.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙'; // 切换到浅色，显示月亮
        } else {
            htmlEl.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️'; // 切换到深色，显示太阳
        }
    });



    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang-zh]');

    const switchLanguage = (lang) => {

        translatableElements.forEach(el => {
            el.textContent = el.dataset[lang === 'zh' ? 'langZh' : 'langEn'];
        });


        htmlEl.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');


        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });


        localStorage.setItem('language', lang);
    };


    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = e.target.dataset.lang;
            switchLanguage(selectedLang);
        });
    });


    const savedLang = localStorage.getItem('language') || 'zh';
    switchLanguage(savedLang);

});
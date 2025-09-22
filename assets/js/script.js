document.addEventListener('DOMContentLoaded', () => {

    // ---(深色/浅色模式) ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    const htmlEl = document.documentElement;

    // 页面加载时，应用保存的主题
    if (currentTheme) {
        htmlEl.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.textContent = '☀️'; // 如果是深色模式，显示太阳图标
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


    // --- 语言切换 (中/英) ---
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang-zh]');

    const switchLanguage = (lang) => {
        // 遍历所有需要翻译的元素
        translatableElements.forEach(el => {
            el.textContent = el.dataset[lang === 'zh' ? 'langZh' : 'langEn'];
        });

        // 更新HTML的lang属性
        htmlEl.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

        // 更新按钮的激活状态
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // 保存用户的选择
        localStorage.setItem('language', lang);
    };

    // 为每个语言按钮添加点击事件
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = e.target.dataset.lang;
            switchLanguage(selectedLang);
        });
    });

    // 应用保存的语言或默认语言
    const savedLang = localStorage.getItem('language') || 'zh';
    switchLanguage(savedLang);

});
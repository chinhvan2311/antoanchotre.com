class KidShieldApp {
    constructor() {
        // Tự động nhận diện cài đặt hệ thống cũ hoặc mặc định cấu hình
        this.lang = localStorage.getItem('ks_lang') || 'vi';
        this.theme = localStorage.getItem('ks_theme') || 'dark';
    }

    init() {
        this.buildGiaoDien();
        this.switchLanguage(this.lang);
        this.setTheme(this.theme);
        this.bindEvents();
    }

    buildGiaoDien() {
        document.getElementById('navbar-root').innerHTML = UI.Navbar();
        document.getElementById('hero-root').innerHTML = UI.Hero();
        document.getElementById('features-root').innerHTML = UI.Features();
        document.getElementById('ai-security-root').innerHTML = UI.AISecurity();
        document.getElementById('pricing-root').innerHTML = UI.Pricing();
        document.getElementById('faq-root').innerHTML = UI.FAQ();
        document.getElementById('footer-root').innerHTML = UI.Footer();
    }

    bindEvents() {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const targetTheme = this.theme === 'dark' ? 'light' : 'dark';
                this.setTheme(targetTheme);
            });
        }

        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    setTheme(themeName) {
        this.theme = themeName;
        localStorage.setItem('ks_theme', themeName);
        document.documentElement.setAttribute('data-theme', themeName);

        if (themeName === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    switchLanguage(langCode) {
        this.lang = langCode;
        localStorage.setItem('ks_lang', langCode);
        document.documentElement.lang = langCode;

        const label = document.getElementById('current-lang-label');
        if (label) label.innerText = langCode.toUpperCase();

        const targets = document.querySelectorAll('[data-i18n]');
        targets.forEach(element => {
            const translationKey = element.getAttribute('data-i18n');
            if (i18nDictionary[langCode] && i18nDictionary[langCode][translationKey]) {
                element.innerText = i18nDictionary[langCode][translationKey];
            }
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

// Chạy khởi tạo ứng dụng
const app = new KidShieldApp();
document.addEventListener('DOMContentLoaded', () => app.init());
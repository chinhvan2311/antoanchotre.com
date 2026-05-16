// ==========================================
// 1. TỪ ĐIỂN ĐA NGÔN NGỮ NÂNG CẤP SÂU CAO CẤP
// ==========================================
const i18nDictionary = {
    vi: {
        nav_features: "Giải pháp", nav_ai: "Công nghệ AI", nav_pricing: "Bảng giá", nav_faq: "Hỏi đáp", nav_download: "Tải xuống", btn_login: "Đăng nhập", btn_free_trial: "Thử miễn phí",
        hero_badge: "⚡ Hệ thống Core AI v1.0 độc quyền (sắp ra mắt)",
        hero_title_1: "Lớp lá chắn tối tân bảo vệ trẻ", hero_title_2: "Trước mọi hiểm họa internet",
        hero_desc: "Nền tảng Antoanchotre ứng dụng học sâu (Deep Learning) thời gian thực, quản trị tập trung đa nền tảng giúp ngăn chặn nội dung độc hại bạo lực và bảo vệ tâm lý số cho trẻ nhỏ.",
        btn_get_started: "Bắt đầu ngay", btn_watch_ai: "Phân tích lõi công nghệ",
        
        // Thống kê số liệu
        stat_users: "Gia đình tin dùng", stat_blocked: "Mối đe dọa đã chặn", stat_uptime: "Độ trễ phản xạ AI",
        
        // Bento Grid Features (kept for backward compatibility)
        feat_badge: "HỆ THỐNG GIẢI PHÁP TOÀN DIỆN", feat_title: "Kiểm soát chủ động - Tự động bảo mật",
        feat_1_t: "Theo dõi & Báo cáo", feat_1_d: "Theo dõi hoạt động trên web và ứng dụng, đồng thời nhận báo cáo dễ hiểu dành cho phụ huynh.",
        feat_2_t: "Lọc Web & Ứng Dụng", feat_2_d: "Chặn website theo danh mục và kiểm soát ứng dụng để ngăn nội dung độc hại.",
        feat_23_t: "Giới hạn Onscreen linh hoạt", feat_3_d: "Thiết lập khung giờ khóa máy thông minh, giới hạn thời gian chạy ngầm ứng dụng (TikTok, YouTube).",
        feat_4_t: "Cảnh Báo Theo Thời Gian Thực & Điều Khiển Từ Xa", feat_4_d: "Nhận thông báo tức thì và điều khiển tạm dừng/gia hạn thiết bị từ xa dành cho phụ huynh.",
        feat_5_t: "Phân Tích Rủi Ro & Hành Vi Bằng AI", feat_5_d: "AI tiên tiến phân tích hành vi và tín hiệu rủi ro để phát hiện sớm các vấn đề tiềm ẩn.",

        // AI Engine Process Flow
        ai_badge: "MÔ HÌNH XỬ LÝ DỮ LIỆU SẠCH", ai_title: "Quy trình 3 lớp bảo mật tự động bảo vệ tuyệt đối",
        ai_step_1_t: "1. Thu thập & Mã hóa", ai_step_1_d: "Mã hóa đầu cuối luồng dữ liệu truy cập mạng của thiết bị con trẻ.",
        ai_step_2_t: "2. Phân tích Ngữ cảnh", ai_step_2_d: "Mô hình NLP phân tích hành vi, loại bỏ các cảnh báo sai (False Positive).",
        ai_step_3_t: "3. Thực thi Đóng băng", ai_step_3_d: "Ngắt kết nối hoặc ẩn nội dung độc hại chỉ trong vòng dưới 5 mili-giây.",

        // Pricing (updated to include Free plan at start)
        price_title: "Chi phí minh bạch cho mọi gia đình", price_subtitle: "Đầu tư cho sự an toàn trực tuyến của con trẻ. Không có phí ẩn.",

        // Free Plan (new)
        p0_t: "Gói Miễn Phí",
        p0_sub: "Theo dõi hoạt động truy cập web và ứng dụng, xem báo cáo cơ bản.",
        p0_p: "Miễn phí",
        p0_l1: "Theo dõi hoạt động web & ứng dụng",
        p0_l2: "Báo cáo cơ bản",
        p0_l3: "Lưu dữ liệu 7 ngày",

        // Plan 1 - Family Basic (was p1)
        p1_t: "Gói Gia Đình Cơ Bản",
        p1_sub: "Bao gồm tính năng gói Miễn Phí + lọc web theo danh mục.",
        p1_p: "99.000đ",
        p1_l1: "Bao gồm tính năng gói Miễn Phí",
        p1_l2: "Lọc website theo danh mục",
        p1_l3: "Lưu dữ liệu 30 ngày",
        p1_l4: "Giới hạn thời gian sử dụng mỗi ngày",

        // Plan 2 - Family Plus (was p2)
        p2_t: "Gói Gia Đình Nâng Cao",
        p2_sub: "Mở rộng tính năng cơ bản với kiểm soát ứng dụng và báo cáo xu hướng.",
        p2_p: "149.000đ",
        p2_l1: "Bao gồm Gói Gia Đình Cơ Bản",
        p2_l2: "Chặn ứng dụng & lọc web nâng cao",
        p2_l3: "Báo cáo xu hướng sử dụng",
        p2_l4: "Lưu dữ liệu 90 ngày",
        p2_l5: "Giới hạn thời gian mỗi lần sử dụng",

        // Plan 3 - Premium (was p3)
        p3_t: "Gói Cao Cấp",
        p3_sub: "Quyền kiểm soát cao cấp và điều khiển từ xa cho gia đình.",
        p3_p: "249.000đ",
        p3_l1: "Bao gồm Gói Gia Đình Nâng Cao",
        p3_l2: "Thông báo thời gian thực",
        p3_l3: "Tắt máy từ xa / tạm ngưng thiết bị",
        p3_l4: "Gia hạn thời gian sử dụng theo yêu cầu",
        p3_l5: "Lưu dữ liệu 180 ngày",

        // Plan 4 - Premium AI (was p4)
        p4_t: "Gói Cao Cấp AI",
        p4_sub: "Bảo vệ cao cấp với phân tích rủi ro và hành vi bằng AI.",
        p4_p: "399.000đ",
        p4_l1: "Bao gồm Gói Cao Cấp",
        p4_l2: "Phân tích rủi ro bằng AI",
        p4_l3: "Phân tích hành vi truy cập bằng AI",
        p4_l4: "Lưu dữ liệu 1 năm",

        // Download section texts
        download_title: "Tải Bộ Cài Windows",
        download_desc: "Chọn định dạng cài đặt cho máy tính Windows. Tải trực tiếp file .exe để cài đặt nhanh hoặc file .zip để kiểm tra nội dung trước khi cài đặt.",
        dl_exe: "Tải file .exe (cài đặt trực tiếp)",
        dl_zip: "Tải file .zip (nén, giải nén thủ công)",

        btn_buy: "Bắt đầu ngay", btn_trial: "Miễn phí hè này", p_recom: "Khuyên dùng", btn_soon: "Sắp ra mắt", 

        // FAQ
        faq_title: "Các câu hỏi thường gặp",
        faq_q1: "Antoanchotre có làm chậm tốc độ internet của thiết bị không?", faq_a1: "Không. Nhờ kiến trúc lọc biên tối ưu hóa, độ trễ xử lý của Antoanchotre dưới 5ms, hoàn toàn không gây giật lag khi trẻ học tập hay giải trí.",
        faq_q2: "Quyền riêng tư của con tôi được đảm bảo như thế nào?", faq_a2: "Hệ thống áp dụng chuẩn mã hóa zero-knowledge. Toàn bộ nhật ký phân tích tâm lý được xử lý và chỉ gửi báo cáo duy nhất cho cha mẹ.",

        footer_rights: "© 2026 Antoanchotre Corp. Toàn quyền bảo lưu.",
        footer_terms: "Điều Khoản Sử Dụng",
        footer_privacy: "Chính Sách Quyền Riêng Tư",
        footer_terms_link: "terms-of-use.vi.html",
        footer_privacy_link: "privacy-policy.vi.html"
    },
    en: {
        nav_features: "Solutions", nav_ai: "AI Engine", nav_pricing: "Pricing", nav_faq: "FAQ", nav_download: "Download", btn_login: "Sign In", btn_free_trial: "Free Trial",
        hero_badge: "⚡ Proprietary Core AI v1.0 System (coming soon)",
        hero_title_1: "Advanced AI Cyber Shield Protecting Kids", hero_title_2: "From All Online Threats",
        hero_desc: "A deep-learning child safety platform providing real-time network filtering and cross-platform centralized management to defend your children's mental and digital well-being.",
        btn_get_started: "Activate Free Protection", btn_watch_ai: "Analyze Core Tech",
        
        stat_users: "Active Families", stat_blocked: "Threats Blocked", stat_uptime: "AI Response Latency",

        feat_badge: "COMPREHENSIVE SOLUTIONS", feat_title: "Proactive Monitoring - Automated Defense",
        feat_1_t: "Monitoring & Reports", feat_1_d: "Track web and app activity and receive easy-to-read reports for parents.",
        feat_2_t: "Web & App Filtering", feat_2_d: "Category-based web blocking and application controls to stop harmful content.",
        feat_3_t: "Smart Onscreen Limiter", feat_3_d: "Set intelligent downtime schedules and daily usage quotas for background apps like TikTok and YouTube.",
        feat_4_t: "Real-time Alerts & Remote Control", feat_4_d: "Instant notifications and remote device suspend/extend controls for parents.",
        feat_5_t: "AI Risk & Behavior Analysis", feat_5_d: "Advanced AI analyzes risk and behavior patterns to detect potential issues early.",

        ai_badge: "DATA SANITIZATION PROCESS", ai_title: "3-Layer Automated Security Protocol",
        ai_step_1_t: "1. Ingestion & Encryption", ai_step_1_d: "End-to-end encryption of the child device's outbound network data flow.",
        ai_step_2_t: "2. Contextual NLP Analysis", ai_step_2_d: "Deep Learning models analyze context to eliminate false positives.",
        ai_step_3_t: "3. Instant Freeze Execution", ai_step_3_d: "Terminate unsafe connections or drop malicious payloads within 5 milliseconds.",

        price_title: "Transparent Pricing for Everyone", price_subtitle: "Invest in your children's digital safety. No hidden fees.",

        // Free Plan (new)
        p0_t: "Free Plan",
        p0_sub: "Track web & app activity, view basic reports.",
        p0_p: "$0",
        p0_l1: "Track web & app activity",
        p0_l2: "Basic reporting",
        p0_l3: "7 days data retention",

        // Plan 1 - Family Basic
        p1_t: "Family Basic",
        p1_sub: "Includes Free plan features + category-based website filtering.",
        p1_p: "$4.99",
        p1_l1: "Includes Free plan features",
        p1_l2: "Category website filtering",
        p1_l3: "30 days data retention",
        p1_l4: "Daily usage limit",

        // Plan 2 - Family Plus
        p2_t: "Family Plus",
        p2_sub: "Builds on Basic with app blocking and trend reports.",
        p2_p: "$7.99",
        p2_l1: "Includes Family Basic",
        p2_l2: "App blocking & advanced web filter",
        p2_l3: "Usage trend reports",
        p2_l4: "90 days data retention",
        p2_l5: "Per-session time limits",

        // Plan 3 - Premium
        p3_t: "Premium",
        p3_sub: "Advanced control and remote device management for families.",
        p3_p: "$12.99",
        p3_l1: "Includes Family Plus",
        p3_l2: "Real-time notifications",
        p3_l3: "Remote shutdown / device suspend",
        p3_l4: "Extend session time on demand",
        p3_l5: "180 days data retention",

        // Plan 4 - Premium AI
        p4_t: "Premium AI",
        p4_sub: "Top-tier protection with AI risk & behavior analysis.",
        p4_p: "$19.99",
        p4_l1: "Includes Premium",
        p4_l2: "AI risk analysis",
        p4_l3: "AI access-behavior analytics",
        p4_l4: "1 year data retention",

        // Download section texts
        download_title: "Download Windows Installer",
        download_desc: "Choose installer format for Windows. Download .exe for quick install or .zip to inspect contents before installing.",
        dl_exe: "Download .exe (direct installer)",
        dl_zip: "Download .zip (archive)",

        btn_buy: "Get Started", btn_trial: "Start Free this Summer", p_recom: "Recommended", btn_soon: "Coming Soon",

        faq_title: "Frequently Asked Questions",
        faq_q1: "Does Antoanchotre slow down device internet speeds?", faq_a1: "No. Thanks to edge-filtering infrastructure, Antoanchotre's latency is under 5ms, ensuring seamless network performance.",
        faq_q2: "How is my child's privacy secured?", faq_a2: "We operate on a zero-knowledge encryption architecture. Mental health data is processed locally, and logs are exclusively viewable by verified parents.",

        footer_rights: "© 2026 Antoanchotre Corp. All rights reserved.",
        footer_terms: "Terms of Use",
        footer_privacy: "Privacy Policy",
        footer_terms_link: "terms-of-use.en.html",
        footer_privacy_link: "privacy-policy.en.html"
    }
};

// ==========================================
// 2. LAYOUT COMPONENTS (BENTO GRID UI CHUYÊN NGHIỆP)
// ==========================================
const UI = {
    Navbar: () => `
        <nav class="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <a href="#" class="flex items-center space-x-2 cursor-pointer">
                    <div class="flex items-center space-x-2 cursor-pointer">
                        <div class="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                            <i data-lucide="shield-check" class="w-6 h-6 text-white"></i>
                        </div>
                        <span class="text-xl font-bold tracking-tight text-white">Antoan<span class="text-cyan-400">chotre</span></span>
                    </div>
                </a>
                <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    <a href="#features" data-i18n="nav_features" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#ai-security" data-i18n="nav_ai" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#pricing" data-i18n="nav_pricing" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#faq" data-i18n="nav_faq" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#download" data-i18n="nav_download" class="hover:text-cyan-400 transition-colors"></a>
                    
                    <!-- Nút Đổi Theme Mượt Mà -->
                    <button id="theme-toggle-btn" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all">
                        <i data-lucide="sun" class="w-4 h-4 hidden dark:block text-amber-400"></i>
                        <i data-lucide="moon" class="w-4 h-4 block dark:hidden text-emerald-400"></i>
                    </button>

                    <!-- Lang Dropdown -->
                    <div class="relative group">
                        <button class="flex items-center space-x-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-white">
                            <i data-lucide="globe" class="w-4 h-4"></i>
                            <span id="current-lang-label">VI</span>
                            <i data-lucide="chevron-down" class="w-3 h-3"></i>
                        </button>
                        <div class="absolute right-0 mt-2 w-28 rounded-md shadow-lg glass-panel opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                            <div class="py-1 text-xs">
                                <button onclick="app.switchLanguage('vi')" class="w-full text-left block px-4 py-2 hover:bg-white/10 text-white font-medium">Tiếng Việt</button>
                                <button onclick="app.switchLanguage('en')" class="w-full text-left block px-4 py-2 hover:bg-white/10 text-white font-medium">English</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <!-- <a href="#" data-i18n="btn_login" class="hidden sm:inline-flex text-sm text-slate-300 font-medium px-4 py-2 rounded-lg hover:text-white transition-all"></a> -->
                    <a href="#pricing" data-i18n="btn_free_trial" class="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md hover:opacity-90 transition-all"></a>
                    <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-400 hover:text-white"><i data-lucide="menu" class="w-6 h-6"></i></button>
                </div>
            </div>

            <div id="mobile-menu" class="hidden md:hidden border-t border-white/5 bg-slate-950 px-4 py-4 space-y-2">
                <a href="#features" data-i18n="nav_features" class="block py-2 text-slate-300"></a>
                <a href="#ai-security" data-i18n="nav_ai" class="block py-2 text-slate-300"></a>
                <a href="#pricing" data-i18n="nav_pricing" class="block py-2 text-slate-300"></a>
                <a href="#faq" data-i18n="nav_faq" class="block py-2 text-slate-300"></a>
                <a href="#download" data-i18n="nav_download" class="block py-2 text-slate-300"></a>
            </div>
        </nav>
    `,

    Hero: () => `
        <section class="relative pt-32 pb-20 md:pt-44 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border-cyan-500/30 text-xs text-cyan-300 mb-6">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                    <span data-i18n="hero_badge"></span>
                </div>
                <h1 class="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    <span data-i18n="hero_title_1" class="text-gradient"></span>
                    <span data-i18n="hero_title_2" class="text-brand-gradient mt-2"></span>
                </h1>
                <p data-i18n="hero_desc" class="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed"></p>
                
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                    <a href="#pricing" data-i18n="btn_get_started" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:scale-[1.02] transition-transform"></a>
                    <a href="#ai-security" data-i18n="btn_watch_ai" class="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:bg-white/10 transition-all"></a>
                </div>

                <!-- Social Proof Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-b border-white/5 py-8 mb-12">
                    <div>
                        <h4 class="text-2xl md:text-3xl font-extrabold text-white">1,000+</h4>
                        <p data-i18n="stat_users" class="text-xs text-slate-500 mt-1"></p>
                    </div>
                    <div>
                        <h4 class="text-2xl md:text-3xl font-extrabold text-cyan-400">2M+</h4>
                        <p data-i18n="stat_blocked" class="text-xs text-slate-500 mt-1"></p>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <h4 class="text-2xl md:text-3xl font-extrabold text-emerald-400">&lt; 5ms</h4>
                        <p data-i18n="stat_uptime" class="text-xs text-slate-500 mt-1"></p>
                    </div>
                </div>
            </div>
        </section>
    `,

    // Updated Features section to reflect pricing plans and their core capabilities.
        Features: () => `
        <section id="features" class="py-24 bg-slate-950/30 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <span data-i18n="feat_badge" class="text-xs font-bold text-cyan-400 tracking-widest uppercase"></span>
                    <h2 data-i18n="feat_title" class="text-2xl md:text-4xl font-bold text-gradient mt-2"></h2>
                    <p data-i18n="price_subtitle" class="text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light"></p>
                </div>

                <!-- Feature summary derived from pricing capabilities (uses feat_* i18n keys) -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Feature 1 -->
                    <div class="glass-panel p-6 rounded-2xl flex flex-col h-full">
                        <div class="flex items-start mb-4">
                            <div class="w-12 h-12 rounded-lg bg-white/5 text-cyan-400 flex items-center justify-center mr-4">
                                <i data-lucide="monitor" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 data-i18n="feat_1_t" class="text-lg font-bold text-white"></h3>
                                <p data-i18n="feat_1_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <ul class="mt-2 space-y-2 text-sm text-slate-300 ml-2">
                            <li class="flex items-start"><i data-lucide="file-text" class="w-4 h-4 text-amber-400 mr-2 mt-1"></i><span data-i18n="p0_l2"></span></li>
                            <li class="flex items-start"><i data-lucide="archive" class="w-4 h-4 text-emerald-400 mr-2 mt-1"></i><span data-i18n="p0_l3"></span></li>
                        </ul>
                    </div>

                    <!-- Feature 2 -->
                    <div class="glass-panel p-6 rounded-2xl flex flex-col h-full">
                        <div class="flex items-start mb-4">
                            <div class="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mr-4">
                                <i data-lucide="shield-off" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 data-i18n="feat_2_t" class="text-lg font-bold text-white"></h3>
                                <p data-i18n="feat_2_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <ul class="mt-2 space-y-2 text-sm text-slate-300 ml-2">
                            <li class="flex items-start"><i data-lucide="globe" class="w-4 h-4 text-cyan-400 mr-2 mt-1"></i><span data-i18n="p1_l2"></span></li>
                            <li class="flex items-start"><i data-lucide="slash" class="w-4 h-4 text-rose-400 mr-2 mt-1"></i><span data-i18n="p2_l2"></span></li>
                        </ul>
                    </div>

                    <!-- Feature 3 -->
                    <div class="glass-panel p-6 rounded-2xl flex flex-col h-full">
                        <div class="flex items-start mb-4">
                            <div class="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mr-4">
                                <i data-lucide="clock" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 data-i18n="feat_23_t" class="text-lg font-bold text-white"></h3>
                                <p data-i18n="feat_3_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <ul class="mt-2 space-y-2 text-sm text-slate-300 ml-2">
                            <li class="flex items-start"><i data-lucide="clock" class="w-4 h-4 text-purple-400 mr-2 mt-1"></i><span data-i18n="p1_l4"></span></li>
                            <li class="flex items-start"><i data-lucide="clock" class="w-4 h-4 text-purple-400 mr-2 mt-1"></i><span data-i18n="p2_l5"></span></li>
                        </ul>
                    </div>

                    <!-- Feature 4 -->
                    <div class="glass-panel p-6 rounded-2xl flex flex-col h-full">
                        <div class="flex items-start mb-4">
                            <div class="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mr-4">
                                <i data-lucide="bell" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 data-i18n="feat_4_t" class="text-lg font-bold text-white"></h3>
                                <p data-i18n="feat_4_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <ul class="mt-2 space-y-2 text-sm text-slate-300 ml-2">
                            <li class="flex items-start"><i data-lucide="bell" class="w-4 h-4 text-emerald-400 mr-2 mt-1"></i><span data-i18n="p3_l2"></span></li>
                            <li class="flex items-start"><i data-lucide="power" class="w-4 h-4 text-rose-400 mr-2 mt-1"></i><span data-i18n="p3_l3"></span></li>
                            <li class="flex items-start"><i data-lucide="repeat" class="w-4 h-4 text-amber-400 mr-2 mt-1"></i><span data-i18n="p3_l4"></span></li>
                        </ul>
                    </div>

                    <!-- Feature 5 (AI) -->
                    <div class="glass-panel p-6 rounded-2xl flex flex-col h-full lg:col-span-2">
                        <div class="flex items-start mb-4">
                            <div class="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mr-4">
                                <i data-lucide="cpu" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h3 data-i18n="feat_5_t" class="text-lg font-bold text-white"></h3>
                                <p data-i18n="feat_5_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <ul class="mt-2 space-y-2 text-sm text-slate-300 ml-2">
                            <li class="flex items-start"><i data-lucide="cpu" class="w-4 h-4 text-emerald-400 mr-2 mt-1"></i><span data-i18n="p4_l2"></span></li>
                            <li class="flex items-start"><i data-lucide="eye" class="w-4 h-4 text-amber-400 mr-2 mt-1"></i><span data-i18n="p4_l3"></span></li>
                            <li class="flex items-start"><i data-lucide="archive" class="w-4 h-4 text-cyan-400 mr-2 mt-1"></i><span data-i18n="p4_l4"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,

    AISecurity: () => `
        <section id="ai-security" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span data-i18n="ai_badge" class="text-xs font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-md bg-cyan-500/5"></span>
                    <h2 data-i18n="ai_title" class="text-2xl md:text-4xl font-bold text-gradient mt-4 mb-8 leading-tight"></h2>
                    
                    <!-- Lớp tiến trình AI (Flow Pipeline) -->
                    <div class="space-y-6">
                        <div class="flex space-x-4">
                            <div class="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white">1</div>
                            <div>
                                <h4 data-i18n="ai_step_1_t" class="text-sm font-bold text-white"></h4>
                                <p data-i18n="ai_step_1_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <div class="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white">2</div>
                            <div>
                                <h4 data-i18n="ai_step_2_t" class="text-sm font-bold text-white"></h4>
                                <p data-i18n="ai_step_2_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <div class="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white">3</div>
                            <div>
                                <h4 data-i18n="ai_step_3_t" class="text-sm font-bold text-white"></h4>
                                <p data-i18n="ai_step_3_d" class="text-xs text-slate-400 mt-1"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center lg:justify-end">
                    <div class="w-full max-w-[360px] aspect-square rounded-3xl glass-panel p-8 flex flex-col justify-between border-cyan-500/20 shadow-[0_0_40px_rgba(0,242,254,0.1)] relative">
                        <div class="absolute inset-0 m-auto w-40 h-40 rounded-full border border-dashed border-cyan-500/20 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                            <div class="w-28 h-28 rounded-full border border-dashed border-purple-500/30"></div>
                        </div>
                        <div class="flex justify-between items-center text-[10px] font-mono text-slate-400"><span>PIPELINE_ACTIVE</span><i data-lucide="refresh-cw" class="w-3 h-3 text-cyan-400 animate-spin"></i></div>
                        <div class="text-center"><i data-lucide="shield-alert" class="w-14 h-14 text-cyan-400 mx-auto mb-2 drop-shadow-[0_0_15px_rgba(0,242,254,0.5)]"></i><span class="text-xs font-bold text-white tracking-wider font-mono">THREAT DEFIANCE MODULE</span></div>
                        <div class="text-[10px] text-center font-mono text-slate-500">ALGORITHM SYSTEM SECURE</div>
                    </div>
                </div>
            </div>
        </section>
    `,

    Pricing: () => `
        <section id="pricing" class="py-24 bg-slate-950/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 data-i18n="price_title" class="text-2xl md:text-4xl font-bold text-gradient mb-4"></h2>
                    <p data-i18n="price_subtitle" class="text-slate-400 max-w-2xl mx-auto font-light text-sm md:text-base"></p>
                </div>

                <!-- Five plans layout (Free plan added first) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                    <!-- Free Plan -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-dashed border-white/5">
                        <div>
                            <h3 data-i18n="p0_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p0_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p0_p" class="text-3xl font-bold text-white"></span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-start space-x-2"><i data-lucide="monitor" class="w-4 h-4 text-cyan-400 mt-1"></i><span data-i18n="p0_l1"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="file-text" class="w-4 h-4 text-amber-400 mt-1"></i><span data-i18n="p0_l2"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="archive" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p0_l3"></span></li>
                            </ul>
                        </div>
                        <a href="#download">
                            <button data-i18n="btn_get_started" class="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"></button>
                        </a>
                    </div>

                    <!-- Plan 1 -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between">
                        <div>
                            <h3 data-i18n="p1_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p1_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p1_p" class="text-3xl font-bold text-white"></span><span class="text-slate-400 text-xs ml-2">/ tháng</span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-start space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400 mt-1"></i><span data-i18n="p1_l1"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400 mt-1"></i><span data-i18n="p1_l2"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="archive" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p1_l3"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="clock" class="w-4 h-4 text-purple-400 mt-1"></i><span data-i18n="p1_l4"></span></li>
                            </ul>
                        </div>
                        <a href="#download">
                            <button data-i18n="btn_buy" class="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"></button>
                        </a>
                    </div>

                    <!-- Plan 2 (recommended) -->
                    <div class="glass-panel p-8 rounded-2xl border-cyan-500/40 shadow-[0_0_35px_rgba(0,242,254,0.08)] relative flex flex-col justify-between overflow-hidden">
                        <div data-i18n="p_recom" class="absolute top-0 right-0 bg-gradient-to-l from-cyan-400 to-blue-500 text-black font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-xl"></div>
                        <div>
                            <h3 data-i18n="p2_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p2_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p2_p" class="text-3xl font-bold text-white"></span><span class="text-slate-400 text-xs ml-2">/ tháng</span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-start space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400 mt-1"></i><span data-i18n="p2_l1"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="shield-off" class="w-4 h-4 text-rose-400 mt-1"></i><span data-i18n="p2_l2"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="bar-chart" class="w-4 h-4 text-amber-400 mt-1"></i><span data-i18n="p2_l3"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="archive" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p2_l4"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="clock" class="w-4 h-4 text-purple-400 mt-1"></i><span data-i18n="p2_l5"></span></li>
                            </ul>
                        </div>
                        <a href="#download">
                            <button data-i18n="btn_trial" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm shadow-md hover:opacity-90 transition-all"></button>
                        </a>
                    </div>

                    <!-- Plan 3 -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between">
                        <div>
                            <h3 data-i18n="p3_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p3_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p3_p" class="text-3xl font-bold text-white"></span><span class="text-slate-400 text-xs ml-2">/ tháng</span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-start space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400 mt-1"></i><span data-i18n="p3_l1"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="bell" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p3_l2"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="power" class="w-4 h-4 text-rose-400 mt-1"></i><span data-i18n="p3_l3"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="repeat" class="w-4 h-4 text-amber-400 mt-1"></i><span data-i18n="p3_l4"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="archive" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p3_l5"></span></li>
                            </ul>
                        </div>
                        <button data-i18n="btn_soon" class="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"></button>
                    </div>

                    <!-- Plan 4 -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between border-cyan-500/20 shadow-[0_0_30px_rgba(0,242,254,0.06)]">
                        <div>
                            <h3 data-i18n="p4_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p4_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p4_p" class="text-3xl font-bold text-white"></span><span class="text-slate-400 text-xs ml-2">/ tháng</span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-start space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400 mt-1"></i><span data-i18n="p4_l1"></span></li>
                                <li class="flex items-start space-x-2"><i data-lucide="cpu" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p4_l2"></span></li>
                                <li data-i18n="p4_l3" class="flex items-start space-x-2 hidden">
                                    <i data-lucide="cpu" class="w-4 h-4 text-emerald-400 mt-1"></i><span></span>
                                </li>
                                <li class="flex items-start space-x-2"><i data-lucide="archive" class="w-4 h-4 text-emerald-400 mt-1"></i><span data-i18n="p4_l4"></span></li>
                            </ul>
                        </div>
                        <button data-i18n="btn_soon" class="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"></button>
                    </div>
                </div>
            </div>
        </section>
    `,

    // Download section (kept as non-popup)
    Download: () => `
        <section id="download" class="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-panel p-6 rounded-2xl">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-2" data-i18n="download_title"></h3>
                        <p class="text-slate-400 text-sm mb-4 max-w-2xl" data-i18n="download_desc"></p>
                        <div class="text-xs text-slate-500 mb-2">Windows x64 • SHA256 signed</div>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-4 md:mt-0">
                        <a href="https://drive.google.com/file/d/1pm7HMnQT5BiBvZ8SnFzSn0oADs4sa7ih/view?usp=sharing" download class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium shadow-sm">
                            <i data-lucide="cpu" class="w-4 h-4 mr-2"></i><span data-i18n="dl_exe"></span>
                        </a>
                        <a href="https://drive.google.com/file/d/1dBhZGpbWmKhznZMKxTm34GoPnQGcEvo_/view?usp=sharing" download class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10">
                            <i data-lucide="archive" class="w-4 h-4 mr-2"></i><span data-i18n="dl_zip"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,

    FAQ: () => `
        <section id="faq" class="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 data-i18n="faq_title" class="text-2xl md:text-3xl font-bold text-center text-gradient mb-12"></h2>
            <div class="space-y-4">
                <div class="glass-panel p-5 rounded-xl cursor-pointer" onclick="this.querySelector('.faq-ans').classList.toggle('hidden')">
                    <div class="flex justify-between items-center font-bold text-white text-sm md:text-base">
                        <span data-i18n="faq_q1"></span><i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
                    </div>
                    <p data-i18n="faq_a1" class="faq-ans text-xs md:text-sm text-slate-400 mt-3 font-light leading-relaxed hidden border-t border-white/5 pt-3"></p>
                </div>
                <div class="glass-panel p-5 rounded-xl cursor-pointer" onclick="this.querySelector('.faq-ans').classList.toggle('hidden')">
                    <div class="flex justify-between items-center font-bold text-white text-sm md:text-base">
                        <span data-i18n="faq_q2"></span><i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
                    </div>
                    <p data-i18n="faq_a2" class="faq-ans text-xs md:text-sm text-slate-400 mt-3 font-light leading-relaxed hidden border-t border-white/5 pt-3"></p>
                </div>
            </div>
        </section>
    `,

    Footer: () => `
        <footer class="border-t border-white/5 bg-slate-950/40 py-8 text-sm text-slate-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div class="flex items-center space-x-2"><span class="text-white font-bold">Antoan<span class="text-cyan-400">chotre</span></span><span data-i18n="footer_rights"></span></div>
                <div class="flex space-x-6 text-xs">
                    <a href="terms.md" data-i18n-link="footer_terms_link" target="_blank" class="hover:text-slate-300 transition-colors" data-i18n="footer_terms"></a>
                    <a href="privacy.md" data-i18n-link="footer_privacy_link" target="_blank" class="hover:text-slate-300 transition-colors" data-i18n="footer_privacy"></a>
                </div>
            </div>
        </footer>
    `
};

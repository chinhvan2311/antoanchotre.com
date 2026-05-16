// ==========================================
// 1. TỪ ĐIỂN ĐA NGÔN NGỮ NÂNG CẤP SÂU CAO CẤP
// ==========================================
const i18nDictionary = {
    vi: {
        nav_features: "Giải pháp", nav_ai: "Công nghệ AI", nav_pricing: "Bảng giá", nav_faq: "Hỏi đáp", btn_login: "Đăng nhập", btn_free_trial: "Thử miễn phí",
        hero_badge: "⚡ Hệ thống Core AI v2.6 độc quyền (sớm ra mắt)",
        hero_title_1: "Lớp lá chắn AI tối tân bảo vệ con trẻ", hero_title_2: "Trước mọi hiểm họa internet",
        hero_desc: "Nền tảng Child Safety ứng dụng học sâu (Deep Learning) thời gian thực, quản trị tập trung đa nền tảng giúp ngăn chặn nội dung độc hại bạo lực và bảo vệ tâm lý số cho trẻ nhỏ.",
        btn_get_started: "Kích hoạt bảo vệ miễn phí", btn_watch_ai: "Phân tích lõi công nghệ",
        
        // Thống kê số liệu
        stat_users: "Gia đình tin dùng", stat_blocked: "Mối đe dọa đã chặn", stat_uptime: "Độ trễ phản xạ AI",
        
        // Bento Grid Features
        feat_badge: "HỆ THỐNG GIẢI PHÁP TOÀN DIỆN", feat_title: "Kiểm soát chủ động - Tự động bảo mật",
        feat_1_t: "Chặn lọc nội dung Deep-Layer", feat_1_d: "Lọc tầng DNS & Kiểm quét hình ảnh trực tiếp giúp phát hiện bạo lực, cờ bạc, tab ẩn danh.",
        feat_2_t: "Giới hạn Onscreen linh hoạt", feat_2_d: "Thiết lập khung giờ khóa máy thông minh, giới hạn thời gian chạy ngầm ứng dụng (TikTok, YouTube).",
        feat_3_t: "Định vị & Hàng rào địa lý AI", feat_3_d: "Cảnh báo ngay lập tức khi trẻ di chuyển ra khỏi vùng an toàn (Trường học, nhà ở) theo thời gian thực.",
        feat_4_t: "Radar phân tích tâm lý NLP", feat_4_d: "Phát hiện sớm dấu hiệu bắt nạt học đường (Cyberbullying), trầm cảm dựa qua phân tích hành vi gõ bàn phím.",

        // AI Engine Process Flow
        ai_badge: "MÔ HÌNH XỬ LÝ DỮ LIỆU SẠCH", ai_title: "Quy trình 3 lớp bảo mật tự động bảo vệ tuyệt đối",
        ai_step_1_t: "1. Thu thập & Mã hóa", ai_step_1_d: "Mã hóa đầu cuối luồng dữ liệu truy cập mạng của thiết bị con trẻ.",
        ai_step_2_t: "2. Phân tích Ngữ cảnh", ai_step_2_d: "Mô hình NLP phân tích hành vi, loại bỏ các cảnh báo sai (False Positive).",
        ai_step_3_t: "3. Thực thi Đóng băng", ai_step_3_d: "Ngắt kết nối hoặc ẩn nội dung độc hại chỉ trong vòng dưới 5 mili-giây.",

        // Pricing
        price_title: "Chi phí minh bạch cho mọi gia đình", price_subtitle: "Đầu tư cho sự an toàn trực tuyến của con trẻ. Không có phí ẩn.",
        p1_t: "Gói Gia Đình Nhỏ", p1_sub: "Phù hợp bảo vệ cơ bản trên điện thoại.", p1_p: "99.000đ", p1_l1: "Giám sát tối đa 3 thiết bị", p1_l2: "Chặn lọc web độc hại cơ bản", p1_l3: "Không có radar phân tích NLP",
        p2_t: "Gói Cao Cấp AI Pro", p2_sub: "Bảo vệ đa tầng thông minh, không giới hạn.", p2_p: "199.000đ", p2_l1: "Không giới hạn thiết bị (PC, Phone, Máy tính bảng)", p2_l2: "Bộ lọc AI NLP & Định vị thời gian thực", p2_l3: "Hỗ trợ kỹ thuật tối cao 24/7",
        btn_buy: "Bắt đầu ngay", btn_trial: "Dùng thử miễn phí 7 ngày", p_recom: "Khuyên dùng",

        // FAQ
        faq_title: "Các câu hỏi thường gặp",
        faq_q1: "Antoanchotre có làm chậm tốc độ internet của thiết bị không?", faq_a1: "Không. Nhờ kiến trúc lọc biên tối ưu hóa, độ trễ xử lý của Antoanchotre dưới 5ms, hoàn toàn không gây giật lag khi trẻ học tập hay giải trí.",
        faq_q2: "Quyền riêng tư của con tôi được đảm bảo như thế nào?", faq_a2: "Hệ thống áp dụng chuẩn mã hóa zero-knowledge. Toàn bộ nhật ký phân tích tâm lý được xử lý tự động bởi AI và chỉ gửi báo cáo duy nhất cho cha mẹ.",

        footer_rights: "© 2026 Antoanchotre AI Corp. Toàn quyền bảo lưu."
    },
    en: {
        nav_features: "Solutions", nav_ai: "AI Engine", nav_pricing: "Pricing", nav_faq: "FAQ", btn_login: "Sign In", btn_free_trial: "Free Trial",
        hero_badge: "⚡ Proprietary Core AI v2.6 System (comming soon)",
        hero_title_1: "Advanced AI Cyber Shield Protecting Kids", hero_title_2: "From All Online Threats",
        hero_desc: "A deep-learning child safety platform providing real-time network filtering and cross-platform centralized management to defend your children's mental and digital well-being.",
        btn_get_started: "Activate Free Protection", btn_watch_ai: "Analyze Core Tech",
        
        stat_users: "Active Families", stat_blocked: "Threats Blocked", stat_uptime: "AI Response Latency",

        feat_badge: "COMPREHENSIVE SOLUTIONS", feat_title: "Proactive Monitoring - Automated Defense",
        feat_1_t: "Deep-Layer Content Filtering", feat_1_d: "DNS-level filtering and real-time image scanning to detect violence, gambling, even in incognito tabs.",
        feat_2_t: "Smart Onscreen Limiter", feat_2_d: "Set intelligent downtime schedules and daily usage quotas for background apps like TikTok and YouTube.",
        feat_3_t: "AI Geofencing & Tracking", feat_3_d: "Get instant notifications when your child enters or leaves safe zones (School, Home) in real time.",
        feat_4_t: "NLP Psychological Radar", feat_4_d: "Early detection of school cyberbullying and depression signs based on keyword and typing behavior analysis.",

        ai_badge: "DATA SANITIZATION PROCESS", ai_title: "3-Layer Automated Security Protocol",
        ai_step_1_t: "1. Ingestion & Encryption", ai_step_1_d: "End-to-end encryption of the child device's outbound network data flow.",
        ai_step_2_t: "2. Contextual NLP Analysis", ai_step_2_d: "Deep Learning models analyze context to eliminate false positives.",
        ai_step_3_t: "3. Instant Freeze Execution", ai_step_3_d: "Terminate unsafe connections or drop malicious payloads within 5 milliseconds.",

        price_title: "Transparent Pricing for Everyone", price_subtitle: "Invest in your children's digital safety. No hidden fees.",
        p1_t: "Standard Home Plan", p1_sub: "Essential protection for mobile devices.", p1_p: "$4.99", p1_l1: "Monitor up to 3 devices", p1_l2: "Basic content filtering", p1_l3: "No NLP psychological analytics",
        p2_t: "Premium AI Pro", p2_sub: "Ultimate cross-platform automated protection.", p2_p: "$9.99", p2_l1: "Unlimited devices (PC, Phone, Tablet)", p2_l2: "Full NLP AI Filter & Real-time Geofencing", p2_l3: "24/7 Priority engineering support",
        btn_buy: "Get Started", btn_trial: "Start 7-Day Free Trial", p_recom: "Recommended",

        faq_title: "Frequently Asked Questions",
        faq_q1: "Does Antoanchotre slow down device internet speeds?", faq_a1: "No. Thanks to edge-filtering infrastructure, Antoanchotre's latency is under 5ms, ensuring seamless network performance.",
        faq_q2: "How is my child's privacy secured?", faq_a2: "We operate on a zero-knowledge encryption architecture. Mental health data is processed locally by AI, and logs are exclusively viewable by verified parents.",

        footer_rights: "© 2026 Antoanchotre AI Corp. All rights reserved."
    }
};

// ==========================================
// 2. LAYOUT COMPONENTS (BENTO GRID UI CHUYÊN NGHIỆP)
// ==========================================
const UI = {
    Navbar: () => `
        <nav class="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div class="flex items-center space-x-2 cursor-pointer">
                    <div class="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                        <i data-lucide="shield-check" class="w-6 h-6 text-white"></i>
                    </div>
                    <span class="text-xl font-bold tracking-tight text-white">Antoan<span class="text-cyan-400">chotre</span></span>
                </div>
                <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    <a href="#features" data-i18n="nav_features" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#ai-security" data-i18n="nav_ai" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#pricing" data-i18n="nav_pricing" class="hover:text-cyan-400 transition-colors"></a>
                    <a href="#faq" data-i18n="nav_faq" class="hover:text-cyan-400 transition-colors"></a>
                    
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
                    <a href="#" data-i18n="btn_login" class="hidden sm:inline-flex text-sm text-slate-300 font-medium px-4 py-2 rounded-lg hover:text-white transition-all"></a>
                    <a href="#" data-i18n="btn_free_trial" class="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md hover:opacity-90 transition-all"></a>
                    <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-400 hover:text-white"><i data-lucide="menu" class="w-6 h-6"></i></button>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden border-t border-white/5 bg-slate-950 px-4 py-4 space-y-2">
                <a href="#features" data-i18n="nav_features" class="block py-2 text-slate-300"></a>
                <a href="#ai-security" data-i18n="nav_ai" class="block py-2 text-slate-300"></a>
                <a href="#pricing" data-i18n="nav_pricing" class="block py-2 text-slate-300"></a>
                <a href="#faq" data-i18n="nav_faq" class="block py-2 text-slate-300"></a>
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
                    <span data-i18n="hero_title_2" class="text-brand-gradient block mt-2"></span>
                </h1>
                <p data-i18n="hero_desc" class="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed"></p>
                
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                    <a href="#" data-i18n="btn_get_started" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:scale-[1.02] transition-transform"></a>
                    <a href="#ai-security" data-i18n="btn_watch_ai" class="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:bg-white/10 transition-all"></a>
                </div>

                <!-- Social Proof Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-b border-white/5 py-8 mb-12">
                    <div>
                        <h4 class="text-2xl md:text-3xl font-extrabold text-white">50,000+</h4>
                        <p data-i18n="stat_users" class="text-xs text-slate-500 mt-1"></p>
                    </div>
                    <div>
                        <h4 class="text-2xl md:text-3xl font-extrabold text-cyan-400">42M+</h4>
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

    Features: () => `
        <section id="features" class="py-24 bg-slate-950/30 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span data-i18n="feat_badge" class="text-xs font-bold text-cyan-400 tracking-widest uppercase"></span>
                    <h2 data-i18n="feat_title" class="text-2xl md:text-4xl font-bold text-gradient mt-2"></h2>
                    <p data-i18n="feat_subtitle" class="text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light"></p>
                </div>
                
                <!-- BENTO GRID SYSTEM 2026 LAYOUT -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Box 1 (Rộng 2 ô) -->
                    <div class="glass-panel p-8 rounded-2xl md:col-span-2 flex flex-col justify-between">
                        <div>
                            <div class="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6"><i data-lucide="eye-off" class="w-5 h-5"></i></div>
                            <h3 data-i18n="feat_1_t" class="text-xl font-bold mb-2 text-white"></h3>
                            <p data-i18n="feat_1_d" class="text-slate-400 text-sm font-light leading-relaxed"></p>
                        </div>
                        <div class="mt-6 h-12 border-t border-white/5 pt-4 text-xs font-mono text-slate-500">DNS SECURE FILTER LAYER ACTIVE</div>
                    </div>
                    
                    <!-- Box 2 (Rộng 1 ô) -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between">
                        <div>
                            <div class="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6"><i data-lucide="clock" class="w-5 h-5"></i></div>
                            <h3 data-i18n="feat_2_t" class="text-xl font-bold mb-2 text-white"></h3>
                            <p data-i18n="feat_2_d" class="text-slate-400 text-sm font-light leading-relaxed"></p>
                        </div>
                    </div>

                    <!-- Box 3 (Rộng 1 ô) -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between">
                        <div>
                            <div class="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
                            <h3 data-i18n="feat_3_t" class="text-xl font-bold mb-2 text-white"></h3>
                            <p data-i18n="feat_3_d" class="text-slate-400 text-sm font-light leading-relaxed"></p>
                        </div>
                    </div>

                    <!-- Box 4 (Rộng 2 ô - NLP) -->
                    <div class="glass-panel p-8 rounded-2xl md:col-span-2 flex flex-col justify-between">
                        <div>
                            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6"><i data-lucide="activity" class="w-5 h-5"></i></div>
                            <h3 data-i18n="feat_4_t" class="text-xl font-bold mb-2 text-white"></h3>
                            <p data-i18n="feat_4_d" class="text-slate-400 text-sm font-light leading-relaxed"></p>
                        </div>
                        <div class="mt-6 flex items-center space-x-2 text-xs text-emerald-400 font-mono"><span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span><span>REALTIME KEYWORD LENS DETECTING</span></div>
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
                <div class="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8">
                    <!-- Plan 1 -->
                    <div class="glass-panel p-8 rounded-2xl flex flex-col justify-between">
                        <div>
                            <h3 data-i18n="p1_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p1_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p1_p" class="text-3xl font-bold text-white"></span><span class="text-slate-400 text-xs ml-2">/ tháng</span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400"></i><span data-i18n="p1_l1"></span></li>
                                <li class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400"></i><span data-i18n="p1_l2"></span></li>
                                <li class="flex items-center space-x-2 text-slate-500 line-through"><i data-lucide="x" class="w-4 h-4"></i><span data-i18n="p1_l3"></span></li>
                            </ul>
                        </div>
                        <button data-i18n="btn_buy" class="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"></button>
                    </div>
                    <!-- Plan 2 -->
                    <div class="glass-panel p-8 rounded-2xl border-cyan-500/40 shadow-[0_0_35px_rgba(0,242,254,0.1)] relative flex flex-col justify-between overflow-hidden">
                        <div data-i18n="p_recom" class="absolute top-0 right-0 bg-gradient-to-l from-cyan-400 to-blue-500 text-black font-extrabold text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-xl"></div>
                        <div>
                            <h3 data-i18n="p2_t" class="text-lg font-semibold text-white mb-2"></h3>
                            <p data-i18n="p2_sub" class="text-slate-400 text-xs mb-6"></p>
                            <div class="flex items-baseline mb-6"><span data-i18n="p2_p" class="text-3xl font-bold text-white"></span><span class="text-slate-400 text-xs ml-2">/ tháng</span></div>
                            <ul class="space-y-3 text-sm text-slate-300 mb-8 border-t border-white/5 pt-4">
                                <li class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400"></i><span data-i18n="p2_l1"></span></li>
                                <li class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400"></i><span data-i18n="p2_l2"></span></li>
                                <li class="flex items-center space-x-2"><i data-lucide="check" class="w-4 h-4 text-cyan-400"></i><span data-i18n="p2_l3"></span></li>
                            </ul>
                        </div>
                        <button data-i18n="btn_trial" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm shadow-md hover:opacity-90 transition-all"></button>
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
                <div class="flex items-center space-x-2"><span class="text-white font-bold">Kid<span class="text-cyan-400">Shield</span></span><span data-i18n="footer_rights"></span></div>
                <div class="flex space-x-6 text-xs"><a href="#" class="hover:text-slate-300 transition-colors">Terms of Use</a><a href="#" class="hover:text-slate-300 transition-colors">Privacy Policy</a></div>
            </div>
        </footer>
    `
};

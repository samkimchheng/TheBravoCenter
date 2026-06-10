document.addEventListener("DOMContentLoaded", function () {
    // 1. កូដ HTML នៃ Navigation Bar
    const navbarHTML = `
    <nav class="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 fixed w-full z-50 top-0 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-90 transition-opacity shrink-0 overflow-hidden">
                    <img src="assets/images/a.jpg" alt="Logo មជ្ឈមណ្ឌល" class="h-10 sm:h-12 w-auto rounded-lg shadow-sm shrink-0">
                    <span class="text-lg sm:text-xl lg:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 tracking-tight whitespace-nowrap">
                        <span class="text-km">មជ្ឈមណ្ឌលមិត្តពូកែ</span>
                        <span class="text-en notranslate">TheBravoCenter</span>
                    </span>
                </div>
                <div class="hidden xl:flex items-center space-x-2 2xl:space-x-4">
                    <div class="flex items-center bg-gray-50/80 p-1.5 rounded-full border border-gray-100 shadow-inner whitespace-nowrap text-sm 2xl:text-base">
                        <a href="index.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300">ទំព័រដើម</a>
                        <a href="about.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300">អំពីយើង</a>
                        <a href="courses.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300">វគ្គសិក្សា</a>
                        <a href="features.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300">សកម្មភាព</a>
                        <div class="relative group">
                            <a href="quiz.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300 inline-flex items-center gap-1">
                                ពង្រឹងចំណេះដឹង
                                <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                            <div class="absolute left-0 mt-2 w-60 opacity-0 invisible translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-500 -z-10"></div>
                                <div class="relative bg-white border border-gray-100 rounded-2xl shadow-xl p-2 space-y-1">
                                    <a href="quiz.html?tab=quizzes" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-xl transition-colors">តេស្តសមត្ថភាព</a>
                                    <a href="quiz.html?tab=lessons" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-xl transition-colors">មេរៀនសំខាន់ៗ</a>
                                    <a href="quiz.html?tab=shortcuts" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-xl transition-colors">មេរៀន Shortcut Key</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative group">
                            <button class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300 inline-flex items-center gap-1">
                                ហ្គេម
                                <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-64 opacity-0 invisible translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                                <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-500 -z-10"></div>
                                <div class="relative bg-white border border-gray-100 rounded-2xl shadow-xl p-2 space-y-1">
                                    <a href="memory-game.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-xl transition-colors">ល្បងប្រាជ្ញាស្វែងរកគូ</a>
                                    <a href="spin-wheel.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-xl transition-colors">កម្មវិធីបង្វិលកងចាប់ឈ្មោះ</a>
                                    <a href="robot-game.html" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium rounded-xl transition-colors">រ៉ូបូតសង្គ្រោះថាមពល</a>
                                </div>
                            </div>
                        </div>
                        <a href="testimonials.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300">ចំណាប់អារម្មណ៍សិស្ស</a>
                        <a href="contact.html" class="nav-link desktop-link text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 px-5 py-2 rounded-full transition-all duration-300">ទំនាក់ទំនង</a>
                    </div>
                    <a href="online-register.html" class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 2xl:px-7 2xl:py-2.5 text-sm 2xl:text-base rounded-full font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 ring-2 ring-white/50 relative overflow-hidden group whitespace-nowrap shrink-0 ml-2">
                        <span class="relative z-10">ចុះឈ្មោះអនឡាញ</span>
                        <div class="absolute inset-0 h-full w-full bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-700 ease-out skew-x-12"></div>
                    </a>
                </div>
                <div class="flex items-center xl:hidden">
                    <button id="mobile-menu-btn" class="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors">
                        <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden xl:hidden bg-white/95 backdrop-blur-md px-4 pt-4 pb-8 space-y-4 shadow-2xl border-t border-gray-100 absolute w-full rounded-b-3xl">
            <div class="bg-gray-50/80 p-2 rounded-2xl border border-gray-100 shadow-inner space-y-1">
                <a href="index.html" class="nav-link mobile-link block px-5 py-3 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">ទំព័រដើម</a>
                <a href="about.html" class="nav-link mobile-link block px-5 py-3 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">អំពីយើង</a>
                <a href="courses.html" class="nav-link mobile-link block px-5 py-3 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">វគ្គសិក្សា</a>
                <a href="features.html" class="nav-link mobile-link block px-5 py-3 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">សកម្មភាព</a>
                <div class="space-y-1 py-1">
                    <span class="block px-5 py-2 text-gray-400 font-bold text-sm uppercase tracking-wider">ពង្រឹងចំណេះដឹង</span>
                    <a href="quiz.html?tab=quizzes" class="nav-link mobile-link block px-8 py-2.5 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">តេស្តសមត្ថភាព</a>
                    <a href="quiz.html?tab=lessons" class="nav-link mobile-link block px-8 py-2.5 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">មេរៀនសំខាន់ៗ</a>
                    <a href="quiz.html?tab=shortcuts" class="nav-link mobile-link block px-8 py-2.5 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">មេរៀន Shortcut Key</a>
                </div>
                <div class="space-y-1 py-1">
                    <span class="block px-5 py-2 text-gray-400 font-bold text-sm uppercase tracking-wider">ហ្គេម</span>
                    <a href="memory-game.html" class="nav-link mobile-link block px-8 py-2.5 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">ល្បងប្រាជ្ញាស្វែងរកគូ</a>
                    <a href="spin-wheel.html" class="nav-link mobile-link block px-8 py-2.5 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">កម្មវិធីបង្វិលកងចាប់ឈ្មោះ</a>
                                <a href="robot-game.html" class="nav-link mobile-link block px-8 py-2.5 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">រ៉ូបូតសង្គ្រោះថាមពល</a>
                </div>
                <a href="testimonials.html" class="nav-link mobile-link block px-5 py-3 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">ចំណាប់អារម្មណ៍សិស្ស</a>
                <a href="contact.html" class="nav-link mobile-link block px-5 py-3 text-gray-600 font-medium hover:text-blue-600 hover:bg-white/80 rounded-xl transition-all duration-300">ទំនាក់ទំនង</a>
            </div>
            <a href="online-register.html" class="block w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-4 rounded-xl font-bold text-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group mt-2">
                <span class="relative z-10">ចុះឈ្មោះអនឡាញ</span>
            </a>
        </div>
    </nav>
    `;

    // 2. បញ្ចូល Navbar ទៅក្នុង <div id="navbar-container"></div>
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }

    // 3. ដំណើរការ Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 4. កំណត់ពណ៌ម៉ឺនុយស្វ័យប្រវត្តិ (Active Link Logic)
    // ទាញយកឈ្មោះឯកសារបច្ចុប្បន្ន (ឧ. 'quiz.html')
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            // ដក Class ពណ៌ប្រផេះធម្មតាចេញ
            link.classList.remove('text-gray-600', 'font-medium', 'hover:text-blue-600', 'hover:bg-white/80');

            if (link.classList.contains('desktop-link')) {
                // បន្ថែម Class សម្រាប់ម៉ឺនុយ Desktop ដែលកំពុង Active
                link.classList.add('text-blue-700', 'font-bold', 'bg-white', 'shadow-sm', 'ring-1', 'ring-gray-900/5');
            } else if (link.classList.contains('mobile-link')) {
                // បន្ថែម Class សម្រាប់ម៉ឺនុយ Mobile ដែលកំពុង Active
                link.classList.add('text-blue-700', 'font-bold', 'bg-white', 'shadow-sm', 'ring-1', 'ring-gray-900/5');
            }
        }
    });
});
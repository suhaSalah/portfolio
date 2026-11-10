document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Translations (نظام الترجمة)
    // ========================================== 
    const translations = {
        en: {
            "nav-work": "Work", "nav-services": "Services", "nav-about": "About", "nav-contact": "Contact", "btn-talk": "Let's Talk",
            "back-projects": "Back to Projects",
            "proj-id": "PROJECT 01 — WORDPRESS",
            "proj-category": "Construction Website",
            "proj-intro": "A modern, responsive construction company website built with WordPress and Elementor, with a focus on clean design, clear content hierarchy, and a smooth user experience.",
            "sec-1-num": "01 / PROJECT OVERVIEW", "sec-1-title": "About the Project",
            "sec-1-desc": "Norex is a construction company website designed to showcase their services, projects, and expertise in the building and construction industry. The goal was to create a professional online presence that reflects their brand identity and builds trust with potential clients.",
            "info-type-title": "Type", "info-type-desc": "Business Website",
            "info-goal-title": "Goal", "info-goal-desc": "Showcase services & projects and attract new clients.",
            "info-role-title": "My Role", "info-role-desc": "I implemented the website using WordPress and Elementor, adapting a provided visual reference into a fully functional, responsive site.",
            "sec-2-num": "02 / THE IMPLEMENTATION", "sec-2-title": "Built with Attention to Detail",
            "sec-2-desc": "I built and customized the entire website using WordPress and Elementor. This involved setting up the core structure, customizing the layout to match the design, and ensuring all sections—such as Home, About, Services, Projects, and Contact—function seamlessly and look visually engaging.",
            "btn-view-site": "View Full Website",
            "impl-1-title": "Homepage", "impl-1-desc": "Strong first impression with a modern hero section.",
            "impl-2-title": "Services Section", "impl-2-desc": "Clear layout to highlight their core services.",
            "impl-3-title": "Projects Section", "impl-3-desc": "Showcasing completed and ongoing projects.",
            "sec-3-num": "03 / RESPONSIVE EXPERIENCE", "sec-3-title": "Designed for Every Screen",
            "sec-3-desc": "The website is fully responsive, providing a seamless experience across all devices. Whether on desktop, tablet, or mobile, the layout adapts perfectly and maintains a consistent visual style.",
            "sec-4-num": "04 / PROJECT DETAILS", "sec-4-title": "Tools & Implementation",
            "sec-4-desc": "This project was built using modern tools and best practices to ensure performance, flexibility, and a great user experience.",
            "video-label": "Watch Project Video",
            "cta-title": "Have a Website to Improve?", "cta-desc": "Let's talk about your project.",
            "nav-prev": "Previous Project", "nav-next": "Next Project",
            "btn-watch-demo-lightbox": "Want to see the interactions? Watch Demo",
             "med-proj-id": "PROJECT 03 — WEBSITE",
            "med-proj-category": "Healthcare Website",
           "med-proj-intro": "A self-initiated concept for a healthcare website, built with WordPress and Elementor. The project focuses on translating a clean, trustworthy design into a fully functional, responsive layout.",
            "med-sec-1-num": "01 / ABOUT THE PROJECT",
            "med-sec-1-title": "About the Project",
           "med-sec-1-desc": "Medical Clinic is a self-initiated portfolio project simulating a healthcare institution's website. The goal was to demonstrate front-end customization skills by building a structured, accessible platform from a visual reference.",
            "med-info-type-title": "Type",   "med-info-type-desc": "Healthcare Website Concept",
            "med-info-goal-title": "Goal","med-info-goal-desc": "Showcase services & improve patient access.",
            "med-info-role-title":  "Role" , "med-info-role-desc": "Built the website from scratch, customizing the layout, colors, typography, and responsive behavior.",
            "med-sec-2-num": "02 / THE SOLUTION",
            "med-sec-2-title": "Built with Attention to Detail",
           "med-sec-2-desc": "I built this one-page website from scratch using WordPress and Elementor Containers. I focused on creating clear navigation, an easy-to-use appointment section, and a trustworthy visual design. Custom CSS was applied to refine the layout and ensure a seamless experience across devices.",
            "med-impl-1-title": "Homepage", "med-impl-1-desc": "Strong first impression with a clear hero section.",
            "med-impl-2-title": "Services Section", "med-impl-2-desc": "Organized to showcase medical services clearly.",
            "med-impl-3-title": "Doctors Section", "med-impl-3-desc": "Highlighting experienced doctors and staff.",
            "med-sec-3-num": "03 / RESPONSIVE EXPERIENCE",
            "med-sec-3-title": "Designed for Every Screen",
            "med-sec-3-desc": "I adapted the layout for desktop, tablet, and mobile screens using Elementor's responsive controls and Flexbox. This involved adjusting element positioning, font sizes, and spacing on smaller screens. Where necessary, I hid specific elements on mobile to prevent clutter and maintain a clean user interface.",
            "med-sec-4-num": "04 / PROJECT DETAILS",
            "med-sec-4-title": "Tools & Implementation",
            "med-sec-4-desc": "The website was developed using WordPress and Elementor, utilizing Elementor Containers and Flexbox for a structured layout. Custom CSS was applied to refine visual details. A dedicated header and footer extension was used to maintain structural control.",
        },
        ar: {
            "nav-work": "أعمالي", "nav-services": "خدماتي", "nav-about": "نبذة عني", "nav-contact": "تواصل معي", "btn-talk": "لنتحدث",
            "back-projects": "العودة للمشاريع",
            "proj-id": "المشروع 01 — ووردبريس",
            "proj-category": "موقع شركة إنشاءات",
            "proj-intro": "موقع إلكتروني حديث ومتجاوب لشركة إنشاءات، تم بناؤه باستخدام ووردبريس وإليمنتور، مع التركيز على التصميم النظيف، والتسلسل الهرمي الواضح للمحتوى، وتجربة مستخدم سلسة.",
            "sec-1-num": "01 / نظرة عامة على المشروع", "sec-1-title": "عن المشروع",
            "sec-1-desc": "نوريكس هو موقع إلكتروني لشركة إنشاءات، تم تصميمه لعرض خدماتهم ومشاريعهم وخبراتهم في مجال البناء والتشييد. كان الهدف هو إنشاء حضور احترافي عبر الإنترنت يعكس هوية علامتهم التجارية ويبني الثقة مع العملاء المحتملين.",
            "info-type-title": "النوع", "info-type-desc": "موقع أعمال",
            "info-goal-title": "الهدف", "info-goal-desc": "عرض الخدمات والمشاريع وجذب عملاء جدد.",
            "info-role-title": "دوري", "info-role-desc": "قمت بتنفيذ الموقع باستخدام ووردبريس وإليمنتور، وتحويل مرجع بصري مقدم إلى موقع متكامل ومتجاوب بالكامل.",
            "sec-2-num": "02 / التنفيذ", "sec-2-title": "مبني باهتمام بالتفاصيل",
            "sec-2-desc": "قمت ببناء وتخصيص الموقع بالكامل باستخدام ووردبريس وإليمنتور. تضمن ذلك إعداد الهيكل الأساسي، وتخصيص التصميم ليتطابق مع النموذج، وضمان عمل جميع الأقسام — مثل الرئيسية، من نحن، الخدمات، المشاريع، والتواصل — بسلاسة ومظهر جذاب.",
            "btn-view-site": "عرض الموقع بالكامل",
            "impl-1-title": "الصفحة الرئيسية", "impl-1-desc": "انطباع أول قوي مع قسم رئيسي حديث.",
            "impl-2-title": "قسم الخدمات", "impl-2-desc": "تخطيط واضح لإبراز خدماتهم الأساسية.",
            "impl-3-title": "قسم المشاريع", "impl-3-desc": "عرض المشاريع المكتملة والجارية.",
            "sec-3-num": "03 / تجربة متجاوبة", "sec-3-title": "مصمم لكل شاشة",
            "sec-3-desc": "الموقع متجاوب بالكامل، مما يوفر تجربة سلسة عبر جميع الأجهزة. سواء على سطح المكتب أو الجهاز اللوحي أو الهاتف المحمول، يتكيف التخطيط تماماً ويحافظ على نمط بصري متسق.",
            "sec-4-num": "04 / تفاصيل المشروع", "sec-4-title": "الأدوات والتنفيذ",
            "sec-4-desc": "تم بناء هذا المشروع باستخدام أدوات حديثة وأفضل الممارسات لضمان الأداء والمرونة وتجربة مستخدم رائعة.",
            "video-label": "شاهد فيديو المشروع",
            "cta-title": "هل لديك موقع يحتاج إلى تحسين؟", "cta-desc": "لنتحدث عن مشروعك.",
            "nav-prev": "المشروع السابق", "nav-next": "المشروع التالي",
            "btn-watch-demo-lightbox": "هل تريد رؤية التفاعلات؟ شاهد الفيديو",
             "med-proj-id": "المشروع 03 — موقع إلكتروني",
            "med-proj-category": "موقع رعاية صحية",
            "med-proj-intro": "مشروع تصميم (Concept) لموقع رعاية صحية، تم بناؤه باستخدام ووردبريس وإليمنتور. يركز المشروع على تحويل تصميم نظيف وموثوق إلى تخطيط متجاوب ومتكامل.",
            "med-sec-1-num": "01 / عن المشروع",
            "med-sec-1-title": "عن المشروع",
            "med-sec-1-desc": "\"Medical Clinic\" هو مشروع شخصي ضمن أعمالي يحاكي موقع مؤسسة رعاية صحية. كان الهدف هو إثبات مهارات تخصيص الواجهة الأمامية من خلال بناء منصة منظمة وسهلة الوصول من مرجع بصري.",
            "med-info-type-title": "النوع",  "med-info-type-desc": "موقع رعاية صحية (مشروع تصميم)",
            "med-info-goal-title": "الهدف",  "med-info-goal-desc": "عرض الخدمات وتحسين وصول المرضى.",
            "med-info-role-title": "دوري", "med-info-role-desc": "بناء الموقع من الصفر، مع تخصيص التخطيط والألوان والخطوط وسلوك التجاوب.",
            "med-sec-2-num": "02 / الحل",
            "med-sec-2-title": "مبني باهتمام بالتفاصيل",
            "med-sec-2-desc": "قمت ببناء هذا الموقع (من صفحة واحدة) من الصفر باستخدام ووردبريس وحاويات إليمنتور (Elementor Containers). ركزت على إنشاء تنقل واضح، وقسم سهل لحجز المواعيد، وتصميم بصري يبعث على الثقة. تم استخدام CSS المخصص لتحسين التخطيط وضمان تجربة سلسة عبر الأجهزة.",
            "med-impl-1-title": "الصفحة الرئيسية","med-impl-1-desc": "انطباع أول قوي مع قسم رئيسي واضح.",
            "med-impl-2-title": "قسم الخدمات", "med-impl-2-desc": "منظم لعرض الخدمات الطبية بوضوح.",
            "med-impl-3-title": "قسم الأطباء","med-impl-3-desc": "إبراز الأطباء والموظفين ذوي الخبرة.",
            "med-sec-3-num": "03 / تجربة متجاوبة",
            "med-sec-3-title": "مصمم لكل شاشة",
            "med-sec-3-desc": "قمت بتكييف التخطيط ليناسب شاشات الكمبيوتر والأجهزة اللوحية والهواتف المحمولة باستخدام إعدادات التجاوب في إليمنتور و Flexbox. تضمن ذلك ضبط مواضع العناصر وأحجام الخطوط والمسافات على الشاشات الأصغر. وحيثما كان ضرورياً، قمت بإخفاء عناصر معينة على الموبايل لمنع الفوضى والحفاظ على واجهة نظيفة.",
            "med-sec-4-num": "04 / تفاصيل المشروع",
            "med-sec-4-title": "الأدوات والتنفيذ",
            "med-sec-4-desc": "تم تطوير الموقع باستخدام ووردبريس وإليمنتور، مع الاعتماد على حاويات إليمنتور (Containers) و Flexbox لبناء هيكل منظم. تم استخدام تنسيقات CSS المخصصة لضبط التفاصيل البصرية. كما تم استخدام إضافة مخصصة للهيدر والفوتر للحفاظ على تحكم هيكلي أفضل.",
        }
    };

    // تحديث اللغة
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('preferred-lang', lang);
    }

    // تفعيل اللغة المحفوظة أو الإنجليزية افتراضياً
    let currentLang = localStorage.getItem('preferred-lang') || 'en';
    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // ==========================================
    // 2. Mobile Menu
    // ==========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navWrapper = document.querySelector('.nav-wrapper');
    if (mobileMenuBtn && navWrapper) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navWrapper.classList.toggle('active');
        });
    }

    // ==========================================
    // 3. Gallery Logic (Hero)
    // ==========================================
    const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
    const mainGalleryImg = document.getElementById('mainGalleryImg');
    const prevBtn = document.getElementById('prevImg');
    const nextBtn = document.getElementById('nextImg');
    let currentImgIndex = 0;

    // دالة تغيير الصورة (تُستدعى من onclick في الـ HTML)
    window.changeGalleryImg = function(thumbElement, src) {
        mainGalleryImg.src = src;
        galleryThumbs.forEach(t => t.classList.remove('active'));
        thumbElement.classList.add('active');
        // تحديث العداد
        const index = Array.from(galleryThumbs).indexOf(thumbElement);
        currentImgIndex = index;
        updateCounter();
    };

    function updateCounter() {
        const counter = document.querySelector('.gallery-count');
        if(counter) counter.textContent = `${currentImgIndex + 1} / ${galleryThumbs.length}`;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex - 1 + galleryThumbs.length) % galleryThumbs.length;
            galleryThumbs[currentImgIndex].click();
        });

        nextBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex + 1) % galleryThumbs.length;
            galleryThumbs[currentImgIndex].click();
        });
    }

    document.querySelector('.gallery-close')?.addEventListener('click', () => {
        document.querySelector('.floating-gallery').style.display = 'none';
    });

    // ==========================================
    // 4. Image Modal Viewer
    // ==========================================
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    window.openImageModal = function(src) {
        imageModal.classList.add('show');
        modalImg.src = src;
    };

    window.closeImageModal = function() {
        imageModal.classList.remove('show');
    };

    // ==========================================
    // 5. Video Modal
    // ==========================================
    const videoModal = document.getElementById('videoModal');
    const projectVideo = document.getElementById('projectVideo');

    window.openVideoModal = function() {
        videoModal.classList.add('show');
        if(projectVideo) projectVideo.play();
    };

    window.closeVideoModal = function() {
        videoModal.classList.remove('show');
        if(projectVideo) {
            projectVideo.pause();
            projectVideo.currentTime = 0;
        }
    };

    // إغلاق المودال عند الضغط على المسافة أو ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImageModal();
            closeVideoModal();
        }
    });
});

    // ==========================================
    // Image Preview Lightbox Logic
    // ==========================================
    let currentZoom = 1;

    window.openImagePreview = function(src) {
        const modal = document.getElementById('imagePreviewModal');
        const img = document.getElementById('previewImage');
        
        if(!modal || !img) return;
        
        img.src = src;
        currentZoom = 1;
        img.style.width = '100%'; // الحجم الافتراضي
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // منع تمرير الخلفية
    };

    window.closeImagePreview = function() {
        const modal = document.getElementById('imagePreviewModal');
        const scrollContainer = document.getElementById('previewScrollContainer');
        
        if(!modal) return;
        
        modal.classList.remove('show');
        document.body.style.overflow = ''; // إعادة التمرير الطبيعي
        
        // إرجاع الصورة لأعلى نقطة عند الإغلاق
        if (scrollContainer) scrollContainer.scrollTop = 0;
    };

    window.zoomImage = function(amount) {
        const img = document.getElementById('previewImage');
        if(!img) return;
        
        currentZoom += amount;
        
        // تحديد حدود التكبير (من 50% إلى 300%)
        if (currentZoom < 0.5) currentZoom = 0.5;
        if (currentZoom > 3) currentZoom = 3;
 
        img.style.width = (currentZoom * 100) + '%';
    };

    // إغلاق النافذة بزر Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImagePreview();
        }
    });

    // إغلاق النافذة عند الضغط على الخلفية السوداء
    document.getElementById('imagePreviewModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'imagePreviewModal') {
            closeImagePreview();
        }
    });
    

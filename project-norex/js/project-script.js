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
            "proj-intro": "A self-initiated concept website for a construction company. Built with WordPress and Elementor, this project focuses on translating a visual reference into a fully functional, responsive one-page layout.",
            "sec-1-num": "01 / PROJECT OVERVIEW", "sec-1-title": "About the Project",
            "sec-1-desc": "Norex is a construction company website designed to showcase their services, projects, and expertise in the building and construction industry. The goal was to create a professional online presence that reflects their brand identity and builds trust with potential clients.",
            "info-type-title": "Type", "info-type-desc": "Business Website Concept",
            "info-goal-title": "Goal", "info-goal-desc": "Demonstrate front-end customization skills by recreating a complex layout from a visual reference using Elementor.",
            "info-role-title": "My Role","info-role-desc": "Built the website from scratch, adapting a provided visual reference into a functional website. Customized the layout, colors, typography, and responsive behavior.",
            "sec-2-num": "02 / THE IMPLEMENTATION", "sec-2-title": "Built with Attention to Detail",
            "sec-2-desc": "I built this one-page website from scratch using WordPress and Elementor Containers, recreating the structure from a visual reference rather than using a pre-made template. I designed and customized the header and footer using a dedicated Elementor extension, implemented smooth anchor navigation links, and integrated a functional contact form. Additional custom CSS was applied to refine the typography, colors, and overall layout.",
            "btn-view-site": "View Full Website",
            "impl-1-title": "Homepage", 
            "impl-1-desc": "Strong visual hierarchy with a structured layout and clear call-to-action.",
            "impl-2-title": "Services Section", 
            "impl-2-desc": "Organized using Flexbox containers to present the core offerings clearly.",
            "impl-3-title": "Projects Section", 
            "impl-3-desc": "A clean visual gallery to showcase completed construction work.",
            "sec-3-num": "03 / RESPONSIVE EXPERIENCE", "sec-3-title": "Designed for Every Screen",
            "sec-3-desc": "I adapted the website layout for desktop, tablet, and mobile screens using Elementor's responsive controls and Flexbox. For smaller screens, I adjusted element positioning and spacing to ensure readability. Where necessary, I strategically hid specific elements on mobile that interfered with the core content, maintaining a clean and user-friendly interface without clutter.",
            "sec-4-num": "04 / PROJECT DETAILS", "sec-4-title": "Tools & Implementation",
            "sec-4-desc": "The website was developed using WordPress and Elementor, utilizing Elementor Containers and Flexbox to build a structured, responsive layout. Custom CSS was applied to refine specific visual elements and ensure the design accurately matched the intended brand identity. A dedicated header and footer extension was used for better structural control.",
            "video-label": "Watch the Interactive Demo",
            "cta-title": "Have a Website to Improve?", "cta-desc": "Let's talk about your project.",
            "nav-prev": "Previous Project", "nav-next": "Next Project",
            "btn-watch-demo-lightbox": "Want to see the interactions? Watch Demo",
        },
        ar: {
            "nav-work": "أعمالي", "nav-services": "خدماتي", "nav-about": "نبذة عني", "nav-contact": "تواصل معي", "btn-talk": "لنتحدث",
            "back-projects": "العودة للمشاريع",
            "proj-id": "المشروع 01 — ووردبريس",
            "proj-category": "موقع شركة إنشاءات",
            "proj-intro": "مشروع تصميم افتراضي (Concept) لموقع شركة إنشاءات. تم بناؤه باستخدام ووردبريس وإليمنتور، ويركز على تحويل مرجع بصري إلى صفحة واحدة متكاملة ومتجاوبة.",
            "sec-1-num": "01 / نظرة عامة على المشروع", "sec-1-title": "عن المشروع",
            "sec-1-desc": "نوريكس هو مشروع شخصي ضمن أعمالي (Portfolio) يهدف إلى محاكاة موقع حقيقي لشركة إنشاءات. يغطي المشروع خدمات البناء السكني والتجاري والمؤسسي، وقد تم تنظيمه في تصميم من صفحة واحدة.",
            "info-type-title": "النوع", "info-type-desc": "موقع أعمال (مشروع تصميم)",
            "info-goal-title": "الهدف", "info-goal-desc": "إثبات مهارات تخصيص الواجهة الأمامية من خلال إعادة بناء تصميم معقد من مرجع بصري باستخدام إليمنتور.",
            "info-role-title": "دوري","info-role-desc": "بناء الموقع بالكامل من الصفر، وتحويل مرجع بصري إلى موقع فعلي، مع تخصيص التخطيط والألوان والخطوط وسلوك التجاوب مع الأجهزة.",
            "sec-2-num": "02 / التنفيذ", "sec-2-title": "مبني باهتمام بالتفاصيل",
            "sec-2-desc": "قمت ببناء هذا الموقع (من صفحة واحدة) من الصفر باستخدام ووردبريس وحاويات إليمنتور (Elementor Containers)، حيث أعدت بناء الهيكل من مرجع بصري بدلاً من استخدام قالب جاهز. قمت بتصميم الهيدر والفوتر باستخدام إضافة مخصصة، وبرمجة روابط التنقل بين الأقسام (Anchor Links)، ودمج نموذج تواصل فعال. كما استخدمت تنسيقات CSS مخصصة لضبط الألوان والخطوط وتنسيق التخطيط العام.",
            "btn-view-site": "عرض الموقع بالكامل",
           "impl-1-title": "الصفحة الرئيسية", 
            "impl-1-desc": "تسلسل بصري قوي مع تخطيط هيكلي واضح يدعو الزائر لاتخاذ إجراء.",
             "impl-2-title": "قسم الخدمات", 
            "impl-2-desc": "منظم باستخدام حاويات Flexbox لعرض الخدمات الأساسية بوضوح.",
            "impl-3-title": "قسم المشاريع", 
            "impl-3-desc": "معرض بصري نظيف لعرض أعمال البناء المكتملة.",
            "sec-3-num": "03 / تجربة متجاوبة", "sec-3-title": "مصمم لكل شاشة",
            "sec-3-desc": "قمت بتكييف تخطيط الموقع ليناسب شاشات الكمبيوتر، والأجهزة اللوحية، والهواتف المحمولة باستخدام إعدادات التجاوب في إليمنتور و Flexbox. بالنسبة للشاشات الصغيرة، قمت بضبط مواضع العناصر والمسافات لضمان سهولة القراءة. وحيثما كان ضرورياً، قمت بإخفاء بعض العناصر على الموبايل بشكل مدروس لتجنب تداخلها مع المحتوى الأساسي، مما يحافظ على واجهة نظيفة وخالية من الفوضى.",
            "sec-4-num": "04 / تفاصيل المشروع", "sec-4-title": "الأدوات والتنفيذ",
            "sec-4-desc": "تم تطوير الموقع باستخدام ووردبريس وإليمنتور، مع الاعتماد على حاويات إليمنتور (Containers) و Flexbox لبناء هيكل منظم ومتجاوب. تم استخدام تنسيقات CSS المخصصة لضبط بعض العناصر البصرية وضمان مطابقة التصميم للهوية البصرية المستهدفة بدقة. كما تم استخدام إضافة مخصصة لتصميم الهيدر والفوتر للحصول على تحكم هيكلي أفضل.",
             "video-label": "شاهد العرض التفاعلي",
            "cta-title": "هل لديك موقع يحتاج إلى تحسين؟", "cta-desc": "لنتحدث عن مشروعك.",
            "nav-prev": "المشروع السابق", "nav-next": "المشروع التالي",
            "btn-watch-demo-lightbox": "هل تريد رؤية التفاعلات؟ شاهد الفيديو",
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
    // ==========================================
    // Mobile Menu Toggle (For Project Pages)
    // ==========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-wrapper a');

    if (mobileMenuBtn && navWrapper) {
        mobileMenuBtn.addEventListener('click', () => {
            // إضافة وإزالة الكلاس اللي بيفتح ويقفل القائمة
            mobileMenuBtn.classList.toggle('active');
            navWrapper.classList.toggle('active');
            
            // تحديث خصائص الوصول (Accessibility)
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // إغلاق القائمة تلقائياً عند الضغط على أي رابط
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navWrapper.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

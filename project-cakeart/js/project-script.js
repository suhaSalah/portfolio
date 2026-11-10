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
              // CakeArt Translations
            "cake-proj-id": "PROJECT #2 — WORDPRESS",
            "cake-proj-category": "Bakery Website Design",
            "cake-proj-intro": "A self-initiated one-page concept for a bakery brand, built with WordPress and Elementor. The site organizes products, classes, and recipes into a clean, structured layout based on a visual reference.",
            "cake-sec-1-num": "01 / PROJECT OVERVIEW",
            "cake-sec-1-title": "About the Project",
            "cake-sec-1-desc": "CakeArt is a portfolio project simulating a bakery brand's online presence. The goal was to organize diverse content—products, classes, and recipes—into a seamless one-page experience, demonstrating my ability to translate a visual design into a functional, responsive website.",
            "cake-info-type-title": "Project Type", "cake-info-type-desc": "One-Page Website Concept",
            "cake-info-ind-title": "Industry", "cake-info-ind-desc": "Bakery & Desserts",
            "cake-info-role-title": "Role", "cake-info-role-desc": "Built the website from scratch, structuring the layout, customizing the brand colors and typography, and ensuring responsive behavior across devices.",
            "cake-sec-2-num": "02 / DESIGN & DEVELOPMENT",
            "cake-sec-2-title": "Built with Attention to Detail",
            "cake-sec-2-desc": "I built this website from scratch using WordPress and Elementor, recreating the layout from a visual reference. I organized the content into distinct sections, implemented smooth anchor navigation links, and used custom CSS to refine the visual styling.",
            "cake-impl-1-title": "Product Showcase",  "cake-impl-1-desc": "A structured layout displaying featured desserts with clear imagery, names, and pricing.",
            "cake-impl-2-title": "Cake Classes", "cake-impl-2-desc": "A dedicated section highlighting baking classes with clear calls-to-action.",
            "cake-impl-3-title": "Recipe Collection", "cake-impl-3-desc": "A clean visual gallery showcasing different cakes and recipes.",
            "cake-sec-3-num": "03 / RESPONSIVE DESIGN",
            "cake-sec-3-title": "Designed for Every Screen",
            "cake-sec-3-desc": "I adapted the layout for desktop, tablet, and mobile screens using Elementor's responsive controls and Flexbox. This involved adjusting element positioning, font sizes, and spacing on smaller screens. Where necessary, I hid specific elements on mobile to prevent them from interfering with the core content and maintain a clean user interface.",
            "cake-sec-4-num": "04 / TOOLS & IMPLEMENTATION",
            "cake-sec-4-title": "Bringing the Design to Life",
            "cake-sec-4-desc": "The website was developed using WordPress and Elementor, utilizing Elementor Containers and Flexbox for a structured, responsive layout. Custom CSS was applied to refine the visual details and match the intended design reference. A dedicated header and footer extension was used to maintain structural control.",
            "cake-cta-title": "Have a Website Project in Mind?", "cake-cta-desc": "Let's bring your next idea to life."
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
             "cake-sec-3-desc": "قمت بتكييف التخطيط ليناسب شاشات الكمبيوتر والأجهزة اللوحية والهواتف المحمولة باستخدام إعدادات التجاوب في إليمنتور و Flexbox. تضمن ذلك ضبط مواضع العناصر وأحجام الخطوط والمسافات على الشاشات الأصغر. وحيثما كان ضرورياً، قمت بإخفاء عناصر معينة على الموبايل لمنع تداخلها مع المحتوى الأساسي والحفاظ على واجهة نظيفة.",
            "sec-4-num": "04 / تفاصيل المشروع", "sec-4-title": "الأدوات والتنفيذ",
            "cake-sec-4-desc": "تم تطوير الموقع باستخدام ووردبريس وإليمنتور، مع الاعتماد على حاويات إليمنتور (Containers) و Flexbox لبناء هيكل منظم ومتجاوب. تم استخدام تنسيقات CSS المخصصة لضبط التفاصيل البصرية ومطابقة التصميم المرجعي المستهدف. كما تم استخدام إضافة مخصصة للهيدر والفوتر للحفاظ على تحكم هيكلي أفضل.",
            "video-label": "شاهد فيديو المشروع",
            "cta-title": "هل لديك موقع يحتاج إلى تحسين؟", "cta-desc": "لنتحدث عن مشروعك.",
            "nav-prev": "المشروع السابق", "nav-next": "المشروع التالي",
            "btn-watch-demo-lightbox": "هل تريد رؤية التفاعلات؟ شاهد الفيديو",
             // CakeArt Translations
            "cake-proj-id": "المشروع #2 — ووردبريس",
            "cake-proj-category": "تصميم موقع إلكتروني لمخبز",
            "cake-proj-intro": "مشروع تصميم (Concept) من صفحة واحدة لعلامة تجارية للمخبوزات، تم بناؤه باستخدام ووردبريس وإليمنتور. ينظم الموقع المنتجات والدروس والوصفات في تخطيط نظيف ومنظم بناءً على مرجع بصري.",
            "cake-sec-1-num": "01 / نظرة عامة على المشروع",
            "cake-sec-1-title": "عن المشروع",
            "cake-sec-1-desc": "CakeArt هو مشروع بورتفوليو يحاكي الحضور الرقمي لعلامة تجارية للمخبوزات. كان الهدف هو تنظيم محتوى متنوع — منتجات، دروس، ووصفات — في تجربة سلسة من صفحة واحدة، مما يثبت قدرتي على تحويل التصميم البصري إلى موقع فعلي ومتجاوب.",
            "cake-info-type-title": "نوع المشروع", "cake-info-type-desc": "موقع إلكتروني من صفحة واحدة",
            "cake-info-ind-title": "المجال", "cake-info-ind-desc": "المخابز والحلويات",
            "cake-info-role-title": "الدور","cake-info-role-desc": "بناء الموقع من الصفر، وهيكلة التخطيط، وتخصيص ألوان وخطوط العلامة التجارية، وضمان تجاوب الموقع مع مختلف الأجهزة.",
            "cake-sec-2-num": "02 / التصميم والتطوير",
            "cake-sec-2-title": "اهتمام بالتفاصيل في كل جزء",
             "cake-sec-2-desc": "قمت ببناء هذا الموقع من الصفر باستخدام ووردبريس وإليمنتور، معيداً إنشاء التخطيط من مرجع بصري. نظمت المحتوى في أقسام واضحة، وبرمجت روابط تنقل سلسة بين الأقسام (Anchor Links)، واستخدمت CSS المخصص لتحسين التنسيق البصري.",
            "cake-impl-1-title": "عرض المنتجات",  "cake-impl-1-desc": "تخطيط منظم لعرض الحلويات المميزة مع صور وأسماء وأسعار واضحة.",
            "cake-impl-2-title": "دروس إعداد الكيك", "cake-impl-2-desc": "قسم مخصص لإبراز دروس المخبوزات مع دعوات واضحة لاتخاذ إجراء.",
            "cake-impl-3-title": "مجموعة الوصفات", "cake-impl-3-desc": "معرض بصري نظيف لعرض مختلف الكيكات والوصفات.",
            "cake-sec-3-num": "03 / التصميم المتجاوب",
            "cake-sec-3-title": "تجربة متناسقة على جميع الشاشات",
            "cake-sec-3-desc": "تم تكييف تصميم الموقع ليتناسب مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف المحمولة، مع الحفاظ على التناسق البصري وتنظيم المحتوى بما يتناسب مع أحجام الشاشات المختلفة.",
            "cake-sec-4-num": "04 / الأدوات والتنفيذ",
            "cake-sec-4-title": "تحويل التصميم إلى موقع فعلي",
            "cake-sec-4-desc": "تم تطوير الموقع باستخدام WordPress وElementor، مع إضافة تنسيقات CSS وتعديلات على تخطيط العناصر لتحسين المظهر العام للموقع وتوافقه مع مختلف الأجهزة.",
            "cake-cta-title": "هل لديك مشروع موقع إلكتروني؟", "cake-cta-desc": "دعنا نحوّل فكرتك القادمة إلى واقع."
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
   

// 响应式菜单切换
const menuToggle = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.mobile-nav');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 如果菜单是打开的，点击后关闭
            if (navLinks && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        }
    });
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // 模拟表单提交
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '提交中...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = '提交成功！';
            
            // 重置表单
            setTimeout(() => {
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        }, 1500);
    });
}

// 滚动时的导航栏效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('.top-nav');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 43, 91, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--primary-blue)';
            header.style.backdropFilter = 'none';
        }
    }
});

// 元素进入视口时的动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .feature-card, .service-card, .person-card, .practice-card, .enterprise-section').forEach(element => {
    observer.observe(element);
});

// 按钮悬停效果增强
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
    
    btn.addEventListener('mousedown', function () {
        this.style.transform = 'translateY(0)';
    });
    
    btn.addEventListener('mouseup', function () {
        this.style.transform = 'translateY(-2px)';
    });
});

// 输入框焦点效果
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function () {
        this.parentElement.classList.remove('focused');
    });
});

// 响应式调整
function handleResize() {
    if (window.innerWidth > 768 && navLinks) {
        navLinks.style.display = 'none';
    }
}

window.addEventListener('resize', handleResize);

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    handleResize();
    // 触发一次滚动事件，确保导航栏状态正确
    window.dispatchEvent(new Event('scroll'));
    
    // 页面加载完成后隐藏加载动画
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1000);
});
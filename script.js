// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinksScroll = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksScroll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Resume Tab Switching
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and details
        resumeBtns.forEach(b => b.classList.remove('active'));
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get the data-tab attribute
        const tabName = btn.getAttribute('data-tab');
        
        // Show corresponding content
        const targetContent = document.querySelector(`[data-content="${tabName}"]`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all filter buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter category
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioBoxes.forEach(box => {
            const category = box.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                box.classList.remove('hide');
                setTimeout(() => {
                    box.style.display = 'block';
                }, 10);
            } else {
                box.classList.add('hide');
                setTimeout(() => {
                    box.style.display = 'none';
                }, 400);
            }
        });
    });
});

// Portfolio Image Slider
document.querySelectorAll('.portfolio-box').forEach((box, boxIndex) => {
    const sliderWrapper = box.querySelector('.slider-wrapper');
    if (!sliderWrapper) return;
    
    const images = sliderWrapper.querySelectorAll('img');
    const indicators = box.querySelectorAll('.indicator');
    const prevBtn = box.querySelector('.slider-btn.prev');
    const nextBtn = box.querySelector('.slider-btn.next');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Remove active class from all images and indicators
        images.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Add active class to current slide
        if (images[index]) {
            images[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= images.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = images.length - 1;
        }
        showSlide(prev);
    }
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });
    }
    
    // Indicator click
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto-slide every 5 seconds
    if (images.length > 1) {
        setInterval(nextSlide, 5000);
    }
});

// Scroll Reveal Animation (simple fade-in effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.home-content, .home-img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Validation and Submission
const contactForm = document.querySelector('.contact-form form');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
        const phone = contactForm.querySelector('input[placeholder="Your Phone Number"]').value.trim();
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value.trim();
        const message = contactForm.querySelector('textarea[placeholder="Your Message"]').value.trim();
        
        // Reset status
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';
        
        // Validate required fields
        if (!name || !email || !subject || !message) {
            showFormStatus('error', 'Please fill in all required fields!');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormStatus('error', 'Please enter a valid email address!');
            return;
        }
        
        // Validate phone if provided
        if (phone) {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                showFormStatus('error', 'Please enter a valid phone number!');
                return;
            }
        }
        
        // Validate message length
        if (message.length < 10) {
            showFormStatus('error', 'Message must be at least 10 characters long!');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend call)
        setTimeout(() => {
            // Success
            showFormStatus('success', 'Thank you! Your message has been sent successfully. I will get back to you soon!');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }, 2000);
    });
}

function showFormStatus(type, message) {
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    
    // Auto-hide error messages after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}
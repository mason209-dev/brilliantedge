 // Typing Animation for Hero Text
        const mainText = document.getElementById('mainText');
        const phrases = [
            'BRILLIANT EDGE',
            'We Design',
            'We Build',
            'We Create',
            'We Innovate',
            'We Transform',
            'We Develop',
            'We Inspire'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        let isFirstPhrase = true;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                mainText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                mainText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = isFirstPhrase ? 100 : 150;
            }

            // Add blinking cursor effect
            mainText.style.animation = 'blink 0.7s step-end infinite';

            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at end of phrase
                typingSpeed = isFirstPhrase ? 2500 : 2000;
                isDeleting = true;
                isFirstPhrase = false;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // Services Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.service-slide');
        const totalSlides = slides.length;
        const slider = document.getElementById('servicesSlider');
        const dotsContainer = document.getElementById('sliderDots');

        // Create dots
        function initializeSlider() {
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('button');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            const dots = document.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function previousSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        // Testimonials Slider
        let currentTestimonial = 0;
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const totalTestimonials = testimonialSlides.length;
        const testimonialSlider = document.getElementById('testimonialsSlider');
        const testimonialDotsContainer = document.getElementById('testimonialDots');

        function initializeTestimonialSlider() {
            for (let i = 0; i < totalTestimonials; i++) {
                const dot = document.createElement('button');
                dot.classList.add('testimonial-dot');
                if (i === 0) dot.classList.add('active');
                dot.onclick = () => goToTestimonial(i);
                testimonialDotsContainer.appendChild(dot);
            }
        }

        function updateTestimonialSlider() {
            testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            
            // Update dots
            const dots = document.querySelectorAll('.testimonial-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            updateTestimonialSlider();
        }

        function previousTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            updateTestimonialSlider();
        }

        function goToTestimonial(index) {
            currentTestimonial = index;
            updateTestimonialSlider();
        }

        // FAQ Toggle Function
        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            const allFaqs = document.querySelectorAll('.faq-item');
            const icon = element.querySelector('.faq-toggle i');
            
            // Close all other FAQs
            allFaqs.forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    const otherIcon = item.querySelector('.faq-toggle i');
                    otherIcon.className = 'fas fa-plus';
                }
            });
            
            // Toggle current FAQ
            faqItem.classList.toggle('active');
            
            // Change icon
            if (faqItem.classList.contains('active')) {
                icon.className = 'fas fa-minus';
            } else {
                icon.className = 'fas fa-plus';
            }
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize services slider
            initializeSlider();
            
            // Auto-advance services slides every 5 seconds
            setInterval(nextSlide, 5000);

            // Start typing effect after a short delay
            setTimeout(typeEffect, 500);
        });

        function toggleMenu() {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('active');
        }

        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navMenu').classList.remove('active');
            });
        });

        // Smooth scroll with offset for fixed navbar
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        function downloadCV(event) {
            event.preventDefault();
            alert('Please upload your CV file and update the href link in the HTML code to point to your CV file.');
            // Update this link to your actual CV file path
            // window.location.href = 'path/to/your/cv.pdf';
        }

        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.padding = '0.5rem 5%';
            } else {
                nav.style.padding = '1rem 5%';
            }
        });

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('contact-name');
        const nameError = document.getElementById('contact-name-error');
        if (name.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const email = document.getElementById('contact-email');
        const emailError = document.getElementById('contact-email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        const subject = document.getElementById('contact-subject');
        const subjectError = document.getElementById('contact-subject-error');
        if (subject.value === '') {
            subjectError.textContent = 'Please select a subject';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }

        const message = document.getElementById('contact-message');
        const messageError = document.getElementById('contact-message-error');
        if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        const successMsg = document.getElementById('contact-success');
        if (isValid) {
            contactForm.submit();
        } else {
            successMsg.textContent = '';
        }
    });
}

const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('booking-name');
        const nameError = document.getElementById('booking-name-error');
        if (name.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const phone = document.getElementById('booking-phone');
        const phoneError = document.getElementById('booking-phone-error');
        const phonePattern = /^[0-9\s+()-]{7,15}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phoneError.textContent = 'Please enter a valid phone number';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        const email = document.getElementById('booking-email');
        const emailError = document.getElementById('booking-email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        const service = document.getElementById('booking-service');
        const serviceError = document.getElementById('booking-service-error');
        if (service.value === '') {
            serviceError.textContent = 'Please select a service';
            isValid = false;
        } else {
            serviceError.textContent = '';
        }

        const date = document.getElementById('booking-date');
        const dateError = document.getElementById('booking-date-error');
        if (date.value === '') {
            dateError.textContent = 'Please select a date';
            isValid = false;
        } else {
            dateError.textContent = '';
        }

        const time = document.getElementById('booking-time');
        const timeError = document.getElementById('booking-time-error');
        if (time.value === '') {
            timeError.textContent = 'Please select a time';
            isValid = false;
        } else {
            timeError.textContent = '';
        }

        const successMsg = document.getElementById('booking-success');
        if (isValid) {
            successMsg.textContent = 'Thank you! Your booking has been received.';
            bookingForm.reset();
        } else {
            successMsg.textContent = '';
        }
    });
}

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

const modalButtons = document.querySelectorAll('[data-modal]');
const modalCloseButtons = document.querySelectorAll('[data-close]');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('active');
    });
});

modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-close');
        document.getElementById(modalId).classList.remove('active');
    });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = header.classList.contains('active');

        accordionHeaders.forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
            header.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

const mapElement = document.getElementById('map');

if (mapElement) {
    const map = L.map('map').setView([-25.396, 27.981], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    fetch('https://nominatim.openstreetmap.org/search?q=670+Lebanon+Street+Winterveld+Mabopane+South+Africa&format=json&limit=1')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);
                map.setView([lat, lon], 16);
                const marker = L.marker([lat, lon]).addTo(map);
                marker.bindPopup('<b>Moonlight Car Wash</b><br>670 Lebanon St, Winterveld, Mabopane').openPopup();
            } else {
                const marker = L.marker([-25.396, 27.981]).addTo(map);
                marker.bindPopup('<b>Moonlight Car Wash</b><br>Mabopane, South Africa').openPopup();
            }
        })
        .catch(() => {
            const marker = L.marker([-25.396, 27.981]).addTo(map);
            marker.bindPopup('<b>Moonlight Car Wash</b><br>Mabopane, South Africa').openPopup();
        });
}

const faqSearchInput = document.getElementById('faq-search-input');
const accordionItems = document.querySelectorAll('.accordion-item');
const noResults = document.getElementById('no-results');

if (faqSearchInput) {
    faqSearchInput.addEventListener('input', () => {
        const query = faqSearchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        accordionItems.forEach(item => {
            const questionText = item.querySelector('.accordion-header').textContent.toLowerCase();
            const answerText = item.querySelector('.accordion-content').textContent.toLowerCase();

            if (questionText.includes(query) || answerText.includes(query)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
}

const fadeHeadings = document.querySelectorAll('.fade-heading');

const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fadeHeadings.forEach(heading => headingObserver.observe(heading));

const enquiryType = document.getElementById('enquiry-type');
const serviceGroup = document.getElementById('service-group');

if (enquiryType) {
    enquiryType.addEventListener('change', () => {
        if (enquiryType.value === 'service') {
            serviceGroup.style.display = 'flex';
        } else {
            serviceGroup.style.display = 'none';
        }
    });
}

const enquiryForm = document.getElementById('enquiry-form');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('enquiry-name');
        const nameError = document.getElementById('enquiry-name-error');
        if (name.value.trim() === '') {
            nameError.textContent = 'Please enter your name';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const email = document.getElementById('enquiry-email');
        const emailError = document.getElementById('enquiry-email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        const phone = document.getElementById('enquiry-phone');
        const phoneError = document.getElementById('enquiry-phone-error');
        const phonePattern = /^[0-9\s+()-]{7,15}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phoneError.textContent = 'Please enter a valid phone number';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        const type = document.getElementById('enquiry-type');
        const typeError = document.getElementById('enquiry-type-error');
        if (type.value === '') {
            typeError.textContent = 'Please select an enquiry type';
            isValid = false;
        } else {
            typeError.textContent = '';
        }

        const message = document.getElementById('enquiry-message');
        const messageError = document.getElementById('enquiry-message-error');
        if (message.value.trim().length < 10) {
            messageError.textContent = 'Please enter a message of at least 10 characters';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            enquiryForm.style.display = 'none';

            const response = document.getElementById('enquiry-response');
            const responseTitle = document.getElementById('response-title');
            const responseBody = document.getElementById('response-body');
            const responseBtn = document.getElementById('response-btn');

            const serviceInfo = {
                basic: { name: 'Basic Wash', price: 'R80', duration: '20-30 minutes', available: 'Monday to Saturday, 7am - 5pm' },
                valet: { name: 'Valet Service', price: 'R250', duration: '45-60 minutes', available: 'Monday to Saturday, 8am - 4pm' },
                mobile: { name: 'Mobile Car Wash', price: 'R150', duration: '45-60 minutes', available: 'Monday to Friday, 8am - 3pm' },
                engine: { name: 'Engine Cleaning', price: 'R100', duration: '30-45 minutes', available: 'Monday to Saturday, 8am - 4pm' },
                detailing: { name: 'Interior Detailing', price: 'R120', duration: '30-45 minutes', available: 'Monday to Saturday, 8am - 4pm' }
            };

            if (type.value === 'service') {
                const selectedService = document.getElementById('enquiry-service').value;
                if (selectedService && serviceInfo[selectedService]) {
                    const info = serviceInfo[selectedService];
                    responseTitle.textContent = 'Thank you, ' + name.value.trim() + '!';
                    responseBody.innerHTML = 'Here is the information for your selected service:<br><br>' +
                        '<strong>Service:</strong> ' + info.name + '<br>' +
                        '<strong>Price:</strong> ' + info.price + ' per vehicle<br>' +
                        '<strong>Estimated Duration:</strong> ' + info.duration + '<br>' +
                        '<strong>Availability:</strong> ' + info.available + '<br><br>' +
                        'To book this service, click the button below or call us on <strong>082 912 2030</strong>.';
                    responseBtn.style.display = 'inline-block';
                } else {
                    responseTitle.textContent = 'Thank you, ' + name.value.trim() + '!';
                    responseBody.textContent = 'We have received your service enquiry and will get back to you shortly with pricing and availability details. You can also reach us on 082 912 2030.';
                }
            } else {
                responseTitle.textContent = 'Thank you for your interest, ' + name.value.trim() + '!';
                responseBody.innerHTML = 'We appreciate your interest in becoming a sponsor or partner of Moonlight Car Wash.<br><br>' +
                    'A member of our team will review your enquiry and contact you within 2-3 business days to discuss potential partnership opportunities.<br><br>' +
                    'In the meantime, feel free to reach us at <strong>info@moonlightcarwash.com</strong> or call <strong>082 912 2030</strong>.';
            }

            response.style.display = 'block';
        }
    });
}
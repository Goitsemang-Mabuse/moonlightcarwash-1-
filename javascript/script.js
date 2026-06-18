
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
            successMsg.textContent = 'Thank you! Your message has been sent.';
            contactForm.reset();
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

const fadeHeadings = document.querySelectorAll('.fade-heading');

const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fadeHeadings.forEach(heading => headingObserver.observe(heading));
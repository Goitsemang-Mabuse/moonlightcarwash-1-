
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

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
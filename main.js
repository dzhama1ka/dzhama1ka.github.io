function changeImage(imageSrc) {
    document.getElementById('project-image').src = imageSrc;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contacts form');
    const nameSelect = document.querySelector('.custom-select');
    const emailInput = document.querySelector('input[type="email"]');
    const subjectInput = document.querySelector('input[placeholder="Имя"]');
    const messageTextarea = document.querySelector('textarea');
    const submitBtn = document.querySelector('.submit-btn');

    const dialog = document.getElementById('successDialog');
    const closeBtn = document.querySelector('.close-dialog');
    const okBtn = document.querySelector('.ok-btn');

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    function showError(element, message) {
        const existingError = element.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        element.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        element.parentElement.appendChild(errorDiv);
    }

    function clearError(element) {
        element.classList.remove('error');
        const existingError = element.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    function validateForm() {
        let isValid = true;

        if (nameSelect.value === '' || nameSelect.selectedIndex === 0) {
            showError(nameSelect, 'Пожалуйста, выберите имя');
            isValid = false;
        } else {
            clearError(nameSelect);
        }

        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Пожалуйста, введите email');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Пожалуйста, введите корректный email');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Пожалуйста, введите имя');
            isValid = false;
        } else {
            clearError(subjectInput);
        }

        if (messageTextarea.value.trim() === '') {
            showError(messageTextarea, 'Пожалуйста, введите сообщение');
            isValid = false;
        } else {
            clearError(messageTextarea);
        }

        return isValid;
    }

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (validateForm()) {
            dialog.style.display = 'block';

            nameSelect.selectedIndex = 0;
            emailInput.value = '';
            subjectInput.value = '';
            messageTextarea.value = '';
        }
    });

    // Закрытие диалога
    closeBtn.onclick = function() {
        dialog.style.display = 'none';
    }

    okBtn.onclick = function() {
        dialog.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == dialog) {
            dialog.style.display = 'none';
        }
    }
});

function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
});

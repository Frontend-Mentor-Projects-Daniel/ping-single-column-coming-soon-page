//! DON'T FORGET TO ADD A GAP OF 3REM TO .form--subscription WHEN AN ERROR IS DISPLAYED
const form = document.querySelector('[data-form]');
const inputEmail = document.querySelector('[data-input-email]');
const errorMsg = document.querySelector('[data-error-message]');
const body = document.body;

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

// have gap increase when on mobile view on error
const observer = new ResizeObserver((entries) => {
  const bodyElement = entries[0];
  const smallScreenSize = bodyElement.contentRect.width <= 488;

  smallScreenSize ? (form.style.gap = '3rem') : (form.style.gap = '1rem');
});

const handleSubmit = (e) => {
  observer.observe(body);

  // check for empty, null or undefined values
  if (inputEmail.value === '' || inputEmail.value == null) {
    e.preventDefault();
    inputEmail.classList.add('error--border');
    errorMsg.classList.remove('hide');

    return;
  } else {
    inputEmail.classList.remove('error--border');
    errorMsg.classList.add('hide');
  }

  // check for valid email address
  if (!ValidateEmail(inputEmail)) {
    e.preventDefault();
    inputEmail.classList.add('error--border');
    errorMsg.classList.remove('hide');
    return;
  } else {
    inputEmail.classList.remove('error--border');
    errorMsg.classList.add('hide');
  }
};

form.addEventListener('submit', handleSubmit);

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var departureTime = document.getElementById('departure-time').value;
    var destination = document.getElementById('destination').value;
    var ticketQuantity = document.getElementById('ticket-quantity').value;
  
    var isValid = true;
  
    // Reset previous error styles
    resetErrorStyles();
  
    // Validation for Name (required, max 30 characters)
    if (name === '' || name.length > 30) {
      showError('name', 'Nama Pelanggan harus diisi (maksimum 30 karakter).');
      isValid = false;
    }
  
    // Validation for Email (required, email format)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
      showError('email', 'Format email tidak valid.');
      isValid = false;
    }
  
    // Validation for Departure Time (required, HH:mm format)
    var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (departureTime === '' || !timeRegex.test(departureTime)) {
      showError('departure-time', 'Format jam keberangkatan tidak valid (HH:mm).');
      isValid = false;
    }
  
    // Validation for Destination (required)
    if (destination === '') {
      showError('destination', 'Tujuan Keberangkatan harus diisi.');
      isValid = false;
    }
  
    // Validation for Ticket Quantity (required, integer between 1 and 10)
    if (ticketQuantity === '' || isNaN(ticketQuantity) || ticketQuantity < 1 || ticketQuantity > 10) {
      showError('ticket-quantity', 'Jumlah Tiket harus diisi (antara 1 dan 10).');
      isValid = false;
    }
  
    // If the form is valid, display the result
    if (isValid) {
      displayResult();
    }
  }
  
  function showError(elementId, message) {
    var element = document.getElementById(elementId);
    element.style.borderColor = 'red';
  
    var errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.textContent = message;
  
    element.parentNode.appendChild(errorSpan);
  }
  
  function resetErrorStyles() {
    var elements = document.querySelectorAll('.error-message');
    elements.forEach(function (el) {
      el.parentNode.removeChild(el);
    });
  
    var formElements = document.querySelectorAll('input');
    formElements.forEach(function (el) {
      el.style.borderColor = '';
    });
  }
  
  function displayResult() {
    var resultContainer = document.getElementById('result-container');
    var formContainer = document.getElementById('form-container');
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var departureTime = document.getElementById('departure-time').value;
    var destination = document.getElementById('destination').value;
    var ticketQuantity = document.getElementById('ticket-quantity').value;
  
    document.getElementById('result-name').textContent = 'Nama Pelanggan: ' + name;
    document.getElementById('result-email').textContent = 'Email: ' + email;
    document.getElementById('result-departure-time').textContent = 'Jam Keberangkatan: ' + departureTime;
    document.getElementById('result-destination').textContent = 'Tujuan Keberangkatan: ' + destination;
    document.getElementById('result-ticket-quantity').textContent = 'Jumlah Tiket: ' + ticketQuantity;
  
    resultContainer.classList.remove('hidden');
    formContainer.classList.add('hidden');
  }
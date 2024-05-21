// Оголосити поза будь-якими функціями об’єкт formData з полями email та message
let formData = {
    email: "",
    message: ""
  };
  
  // Функція збереження formData в локальне сховище
  function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  // Функція  завантаження даних з локального сховища
  function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      formData = JSON.parse(savedData);
      document.querySelector('input[name="email"]').value = formData.email || '';
      document.querySelector('textarea[name="message"]').value = formData.message || '';
    }
  }
  
  // обробник події input для форми
  document.querySelector('.feedback-form').addEventListener('input', event => {
    if (event.target.name === 'email') {
      formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
      formData.message = event.target.value.trim();
    }
    saveToLocalStorage();
  });
  
  //  обробник події submit для форми
  document.querySelector('.feedback-form').addEventListener('submit', event => {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    saveToLocalStorage();
    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    event.target.reset();
  
  });
  
  // Завантажити дані з локального сховища при завантаженні сторінки
  window.addEventListener('load', loadFromLocalStorage);


  
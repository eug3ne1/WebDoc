
let formData = {
    email: "",
    message: ""
  };

  form = document.querySelector('.feedback-form')
  

  function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }



  function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      formData = JSON.parse(savedData);
      document.querySelector('input[name="email"]').value = formData.email;
      document.querySelector('textarea[name="message"]').value = formData.message;
    }
  }
  

  // якщо перезавантаження сторінки - перевірити сховище 
  window.addEventListener('load', loadFromLocalStorage);

  // обробник події input 
  form.addEventListener('input', event => {
    if (event.target.name === 'email') {
      formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
      formData.message = event.target.value.trim();
    }
    saveToLocalStorage();
  });
  

  //  обробник події submit 
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    if (!formData.message || !formData.email  ) {
      alert('Fill please all fields');
      return;
    }
    saveToLocalStorage();
    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    event.target.reset();
  
  });
  



  
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', () => {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedFormData) {
    form.email.value = savedFormData.email;
    form.message.value = savedFormData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.email.value || !form.message.value) {
    alert('Please fill in all fields');
    return;
  }

  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');

  form.reset();
});

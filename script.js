// ================= MODAL ================= 
const openModalButtons = document.querySelectorAll('.btn, .btn-header');
const modal = document.getElementById('appointmentModal');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('appointmentForm');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    nameError.textContent = '';
    phoneError.textContent = '';
  });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });

// Обробка форми
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = form.name.value.trim();
  const phoneValue = form.phone.value.trim();

  let valid = true;

  if(!/^[А-Яа-яЁёЇїІіЄєҐґ'’\s]+$/.test(nameValue)){
    nameError.textContent = "Будь ласка, введіть коректне ім’я (тільки літери).";
    valid = false;
  } else nameError.textContent = '';

  if(!/^\+?\d{10,15}$/.test(phoneValue)){
    phoneError.textContent = "Будь ласка, введіть коректний номер телефону (тільки цифри та +).";
    valid = false;
  } else phoneError.textContent = '';

  if(!valid) return;

  form.innerHTML = `
    <h2>Заявка надіслана</h2>
    <p>Ми зв’яжемося з вами в найкоротший час.</p>
  `;
});

// ================= ABOUT TEXT FETCH =================
const aboutTextContainer = document.getElementById('about-text');
if(aboutTextContainer) {
  fetch('about-text.txt')
    .then(response => response.text())
    .then(data => {
      aboutTextContainer.innerHTML = data.replace(/\n/g, '<br>');
    })
    .catch(err => console.error("Не вдалося завантажити текст про нас:", err));
}


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav__links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

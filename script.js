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

  if (nameValue.length < 3 || !nameValue.match(/^[A-Za-zА-Яа-яЇїІіЄєҐґ\s'-]+$/)) {
    nameError.textContent = "Будь ласка, введіть коректне ім’я (мінімум 3 літери, тільки букви).";
    valid = false;
  } else {
    nameError.textContent = '';
  }

  const digitsOnly = phoneValue.replace(/\D/g, ''); 

  if (digitsOnly.length < 10 || digitsOnly.length > 13) {
    phoneError.textContent = "Будь ласка, введіть коректний номер телефону (10–13 цифр, формат +380 допустимий).";
    valid = false;
  } else {
    phoneError.textContent = '';
  }

  if (!valid) return;

  console.log({
    name: nameValue,
    phone: phoneValue
  });

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



const elements = document.querySelectorAll('.btn');
elements.forEach(el => {
    el.style.backgroundColor = 'lightgreen'; 
    el.style.color = 'darkblue';            
});



const footer = document.querySelector('footer');
if (footer) {
  const dateParagraph = document.createElement('p');
  const currentDate = new Date().toLocaleDateString();
  dateParagraph.textContent = `Сьогодні: ${currentDate}`;

  dateParagraph.style.textAlign = 'right';      
  dateParagraph.style.margin = '0';             

  footer.append(dateParagraph);
}




const themeBtn = document.querySelector('#themeToggleBtn');

themeBtn.addEventListener('click', () => {
  const root = document.documentElement;

  const currentBg = getComputedStyle(root)
    .getPropertyValue('--site-bg')
    .trim();

  if (currentBg === '#ffffff') {
    root.style.setProperty('--site-bg', 'var(--darkbackground)');
  } else {
    root.style.setProperty('--site-bg', '#ffffff');
  }
});


const menuLinks = document.querySelectorAll('.nav__links li a');

menuLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#f8982f'; 
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = ''; 
  });
});



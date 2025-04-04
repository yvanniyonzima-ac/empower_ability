document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('callForm');
    const response = document.getElementById('formResponse');
    const topic2Checkbox = document.getElementById('topic2');
    const eventDetailsGroup = document.getElementById('eventDetailsGroup');
    const eventDetails = document.getElementById('eventDetails');

    topic2Checkbox.addEventListener('change', () => {
      eventDetailsGroup.classList.toggle('show', topic2Checkbox.checked);
      if (!topic2Checkbox.checked) {
        eventDetails.value = '';
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const businessName = document.getElementById('businessName');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      let isValid = true;
      response.textContent = '';

      if (!businessName.value.trim()) {
        response.textContent = 'Please provide a valid Business Name.';
        businessName.classList.add('is-invalid');
        isValid = false;
      } else {
        businessName.classList.remove('is-invalid');
      }

      if (!/^\d{10}$/.test(phone.value.trim())) {
  response.textContent = 'Please enter a 10-digit phone number with numbers only.';
  phone.classList.add('is-invalid');
  isValid = false;
} else {
  phone.classList.remove('is-invalid');
}
      if (!email.value.trim()) {
        response.textContent = 'Please provide a valid Email Address.';
        email.classList.add('is-invalid');
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
      }

      if (isValid) {
        response.textContent = 'Thank you! We’ll be in touch soon.';
        response.style.color = 'green';
        form.reset();
        eventDetailsGroup.classList.remove('show');
      } else {
        response.style.color = 'red';
      }
    });
  });
  const updatesSwitch = document.getElementById('updatesSwitch');
const customSlider = document.getElementById('customSlider');

  updatesSwitch.addEventListener('change', () => {
  if (updatesSwitch.checked) {
    customSlider.style.backgroundImage = "url('images/On_Button_Toggle_Switch.jpg')";
  } else {
    customSlider.style.backgroundImage = "url('images/Off_Button_Toggle_Switch.jpg')";
  }
});
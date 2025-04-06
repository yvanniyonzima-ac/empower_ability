const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// load content into <main>
function loadContent(page) {
  console.log("Loading content for:", page);
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('main-content').innerHTML = "<p>Error loading content.</p>";
      console.error("Error loading page:", error);
    });
}

// load home page content by default
window.addEventListener("DOMContentLoaded", () => {
  loadContent('home.html');
});

// open lightbox function
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox").setAttribute("tabindex", "0");
}

// close lightbox function
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox").removeAttribute("tabindex");
}

// logic for shcedulling a call form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('callForm');
  const response = document.getElementById('formResponse');
  const inviteSpeakerTopicCheckbox = document.getElementById('invite_speaker_topic');
  const eventDetailsGroup = document.getElementById('eventDetailsGroup');
  const eventDetails = document.getElementById('eventDetails');

  inviteSpeakerTopicCheckbox.addEventListener('change', () => {
    eventDetailsGroup.classList.toggle('show', inviteSpeakerTopicCheckbox.checked);
    if (!inviteSpeakerTopicCheckbox.checked) {
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

// Toggle switch for updates on click and Space key during keyboard navigation
document.addEventListener("DOMContentLoaded", () => {
  const updatesSwitch = document.getElementById('updatesSwitch');
  const customSlider = document.getElementById('customSlider');

  const updateSliderImage = () => {
    if (updatesSwitch.checked) {
      customSlider.style.backgroundImage = "url('images/On_Button_Toggle_Switch.jpg')";
    } else {
      customSlider.style.backgroundImage = "url('images/Off_Button_Toggle_Switch.jpg')";
    }
  };

  updatesSwitch.addEventListener('change', updateSliderImage);

  // Initialize on load
  updateSliderImage();
});


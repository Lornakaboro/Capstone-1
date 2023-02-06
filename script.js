/* eslint no-unused-vars: 0 */

function toggleMobileMenu() {
  document
    .getElementById('nav-dropdown-menu')
    .classList.toggle('hidden-dropdown-menu');
  document
    .getElementById('intro-section')
    .classList.toggle('blur-intro-section');
}

function openDropdownItem(menuElement, menuLink) {
  document
    .getElementById('nav-dropdown-menu')
    .classList.toggle('hidden-dropdown-menu');
  document
    .getElementById('intro-section')
    .classList.toggle('blur-intro-section');
  menuElement.href = menuLink;
}

const specialistData = [
  {
    featuredImage: './images/Mary-Kaboro.jpg',
    name: 'Dr Mary Kaboro pHD.',
    specialization: 'Senior Nutritionist',
    description:
    'Nationally acclaimed and award winning clinical nutritionist.Teaches human nutrition at the university of Nairobi',

  },
  {
    featuredImage: './images/Lactation expert.jpg',
    name: 'Lorna Nyawira',
    specialization: 'Lactation Expert',
    description:
    'Certified breastfeeding and lactation specialist.Authored the book Breastfeeding is Life 2009.',
  },
  {
    featuredImage: './images/fitness -coach.jpg',
    name: 'Ian Kirii',
    specialization: 'Fitness and wellness coach',
    description:
    'Lifestyle and behaviour change specialist,excecutive director YOLO,Fitness center.',
  },
  {
    featuredImage: './images/Senior dietician.jpg',
    name: 'Denis Munyao',
    specialization: 'Senior Dietician,director Meal plans by Deno',
    description:
    'Nutrition specialist,founder of the campaign You are what you eat 2020.',
  },
  {
    featuredImage: './images/pharmacist.jpg',
    name: 'Albert Johnson',
    specialization: 'Certified pharmacist',
    description:
    'Registered pharmacist specializing in  a broad spectrum of nutritional supplements.',
  },
  {
    featuredImage: './images/Kevin-bahati.jpg',
    name: 'Kevin Bahati',
    specialization: 'Registered Nutritionist',
    description:
    'Registered nutritionist specializing in nutrional assesments,diagonosis and evaluations.',
  },
];

for (let i = 0; i < specialistData.length; i += 1) {
  document.querySelector('.featured-specialists-container').innerHTML += ` 
  <div class="specialist-content col-sm-12 col-md-6 row mb-4">
          <img
            src="${specialistData[i].featuredImage}"
            alt=""
            class="specialist-image col-4"
          />
          <div class="col-8">
            <h4 class="specialist-name">${specialistData[i].name}</h4>
            <p class="specialist-title">${specialistData[i].specialization}</p>
            <p class="specialist-description">
            ${specialistData[i].description}
            </p>
          </div>
        </div>
    `;
}
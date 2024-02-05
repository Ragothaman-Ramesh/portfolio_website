AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Product Consultant",
    cardImage: "assets/images/experience-page/SCEIN-LOGO-COUNTIES-F-e1547837169969.png",
    place: "Cleantech, San Diego",
    time: "(Sep, 2023 - present)",
    desp: "<li>Developed Go-to-Market strategies for four San Diego-based renewable energy startups, driving a projected 25% increase in potential revenue and an enhanced product-market fit.</li>",
  },
  {
    title: "Section Lead",
    cardImage: "assets/images/experience-page/Titan_Company_Logo.png",
    place: "Titan Company (TATA Group), Bengaluru, India",
    time: "(Apr - Jun, 2022)",
    desp: "<li>Devised a Go-To-Market (GTM) Strategy for an international business expansion in under six months resulting in a projected 10% market share and potential annual revenue of $5 million.</li><li>Supported the creation of three performance dashboards, enabling real-time monitoring and achieving a 13% average reduction in project timelines.</li>",
  },
  {
    title: "Senior Engineer (New Products)",
    cardImage: "assets/images/experience-page/Titan_Company_Logo.png",
    place: "Titan Company (TATA Group), Hosur, India)",
    time: "(Jul, 18 - Mar, 22)",
    desp: "<li>Led end-to-end product development for 30 new products from product design to product delivery, ensuring strategy alignment, costing, and 95% on-time delivery.</li><li>Spearheaded a cost-saving initiative involving cross-functional teams, leading to a 38% reduction in time-to-market.</li></li>Executed a technical problem-solving project through the Lean Six Sigma method, yielding a 30% reduction in market returns.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Board Member - International Student Advisory Board",
    cardImage: "assets/images/experience-page/1000-monogram-red.jpg",
    description:
      "Served as a campus liaison and student leader dedicated to advocating for and supporting 1200+ international students at SDSU, representing the International Student Center (ISC), and actively engaging in campus-wide initiatives to enhance the international student experience.",
  },
  {
    title: "Funding Committee Member - Student Affairs and Campus Diversity",
    cardImage: "assets/images/experience-page/1000-monogram-red.jpg",
    description:
      "Reviewed and evaluated funding applications from various student clubs, ensuring fairness and transparency in the allocation of resources.",
  },
  {
    title: "Student Volunteer - National Service Scheme",
    cardImage: "assets/images/experience-page/2023_9$largeimg_1778542124.jpg",
    description:
      "Engaged as a dedicated Student Volunteer for the National Service Scheme, actively contributing to community service projects and promoting social responsibility.",
  },
  {
    title: "Event Organiser - National Level Technical Symposium",
    cardImage: "assets/images/experience-page/Anna_University_Logo.svg.png",
    description:
      "Successfully orchestrated national-level technical symposiums, blending organizational prowess with creativity to deliver seamless and impactful events.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

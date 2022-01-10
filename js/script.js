const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// creo un collegamento con l'html
const cardHtml = document.querySelector(".team-container");

// ciclo i singoli oggetti all'interno dell'array..
for (let i = 0; i < team.length; i++) {
  const teamMember = team[i];

  // ..stampando di volta in volta in html i relativi valori di name-role-image
  cardHtml.innerHTML += `<div class="team-card">
    <div class="card-image">
      <img
        src="img/${teamMember.image}"
        alt="${teamMember.name}"
      />
    </div>
    <div class="card-text">
      <h3>${teamMember.name}</h3>
      <p>${teamMember.role}</p>
    </div>
  </div>`;
}

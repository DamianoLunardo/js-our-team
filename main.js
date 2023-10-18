//console.log("Hello World");

const teamMembers = [
    {
        nome_cognome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        immagine: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome_cognome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        immagine: './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome_cognome: 'Walter Gordon',
        ruolo: 'Office Manager',
        immagine: './img/walter-gordon-office-manager.jpg',
    },
    {
        nome_cognome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        immagine: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome_cognome: 'Scott Estrada',
        ruolo: 'Developer',
        immagine: './img/scott-estrada-developer.jpg',
    },
    {
        nome_cognome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        immagine: './img/barbara-ramos-graphic-designer.jpg',
    },
]

//console.log(teamMembers);

//for (let i = 0; i < teamMembers.length; i++) {
//console.log(teamMembers[i].nome_cognome);
//console.log(teamMembers[i].ruolo);
//console.log(teamMembers[i].immagine);
//};

for (let i = 0; i < teamMembers.length; i++) {
    const infoTeam = teamMembers[i]
    //console.log(infoTeam)
    const fullInfo = `
    ${infoTeam.nome_cognome}
    ${infoTeam.ruolo}
    ${infoTeam.immagine}
    `
    console.log(fullInfo)
};

const membriDelTeam = document.getElementById('team-members')
const cardContainer = document.createElement('div')


for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i]
    const memberDiv = document.createElement('div')
    memberDiv.classList.add('card')

    const nomeCognome = document.createElement('h5')
    nomeCognome.textContent = member.nome_cognome

    const ruolo = document.createElement('p')
    ruolo.textContent = member.ruolo

    const immagineProfilo = document.createElement('img')
    immagineProfilo.src = member.immagine

    membriDelTeam.appendChild(memberDiv)
    memberDiv.appendChild(immagineProfilo)
    memberDiv.appendChild(nomeCognome)
    memberDiv.appendChild(ruolo)
};


// array oggetti con informazioni ricevute
const member = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

// stampare le informazioni su console

const container = document.getElementById('container');



for (let i = 0; i < member.length; i++) {

   console.log("Name: " + member[i].name); 
   console.log("Role: " + member[i].role);
   console.log("Photo: " + member[i].image);
   console.log('');

// stampare le info sul DOM sotto forma di stringhe

   container.innerHTML += `<div class="members-team">
                            <p>"Name: ${member[i].name}"</p>
                            <p>Role: ${member[i].role}</p>
                            <p>Photo: ${member[i].image}</p>
                         </div>`;

};

  
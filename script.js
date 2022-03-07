const teamMembers = [
	{
		Name: "Wayne Barnett",
		Role: "Founder & CEO",
		Image: "wayne-barnett-founder-ceo.jpg",
	},
	{
		Name: "Angela Caroll",
		Role: "Chief Editor",
		Image: "angela-caroll-chief-editor.jpg",
	},
	{
		Name: "Walter Gordon",
		Role: "Office Manager",
		Image: "walter-gordon-office-manager.jpg",
	},
	{
		Name: "Angela Lopez",
		Role: "Social Media Manager",
		Image: "angela-lopez-social-media-manager.jpg",
	},
	{
		Name: "Scott Estrada",
		Role: "Developer",
		Image: "scott-estrada-developer.jpg",
	},
	{
		Name: "Barbara Ramos",
		Role: "Graphic Designer",
		Image: "barbara-ramos-graphic-designer.jpg",
	},
];

console.log(teamMembers);

const teamContainer = document.querySelector(".team-container");
const teamCard = document.createElement("div");
const cardImage = document.createElement("div");
const image = document.createElement("img");
const cardText = document.createElement("div");
const memberName = document.createElement("h3");
const memberRole = document.createElement("p");

teamCard.classList.add("team-card");
image.src = "img/wayne-barnett-founder-ceo.jpg"; //Variabile da inserire
image.alt = "Wayne Barnett"; //Variabile da inserire
cardImage.classList.add("card-image");
cardImage.append(image);
teamCard.append(cardImage);
cardText.classList.add("card-text");
memberName.innerText = "Wayne Barnett"; //Variabile da inserire
memberRole.innerText = "Founder & CEO"; //Variabile da inserire
cardText.append(memberName);
cardText.append(memberRole);
teamCard.append(cardText);
teamContainer.append(teamCard);

// for (let i = 0; i < teamMembers.length; i++) {
// 	let member = teamMembers[i];
// 	for (let key in teamMembers) {
// 		console.log(member[key]);
// 	}
// }

let member = teamMembers[1];
console.log(member);
console.log(member['Name'])
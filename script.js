const teamMembers = [
	{
		Name: "Wayne Barnett",
		Role: "Founder & CEO",
		Image: "img/wayne-barnett-founder-ceo.jpg",
	},
	{
		Name: "Angela Caroll",
		Role: "Chief Editor",
		Image: "img/angela-caroll-chief-editor.jpg",
	},
	{
		Name: "Walter Gordon",
		Role: "Office Manager",
		Image: "img/walter-gordon-office-manager.jpg",
	},
	{
		Name: "Angela Lopez",
		Role: "Social Media Manager",
		Image: "img/angela-lopez-social-media-manager.jpg",
	},
	{
		Name: "Scott Estrada",
		Role: "Developer",
		Image: "img/scott-estrada-developer.jpg",
	},
	{
		Name: "Barbara Ramos",
		Role: "Graphic Designer",
		Image: "img/barbara-ramos-graphic-designer.jpg",
	},
];

//console.log(teamMembers);

const teamContainer = document.querySelector(".team-container");

for (let index = 0; index < teamMembers.length; index++) {
	const member = teamMembers[index];
	createCard(member);
}

let nameField = document.getElementById("name");
//console.log(nameField);
let roleField = document.getElementById("role");
//console.log(roleField);
let imageField = document.getElementById("image");
//console.log(imageField);
const sendBtn = document.getElementById("addMemberButton");
//console.log(sendBtn);

sendBtn.addEventListener("click", function () {
	teamMembers.push({ Name: nameField.value, Role: roleField.value, Image: imageField.value });
	const newMember = teamMembers[teamMembers.length - 1]
	console.log(newMember);
	createCard(newMember);
	nameField.value = "";
	roleField.value = "";
	imageField.value = "";
});

function createCard(objectElement) {
	const teamCard = document.createElement("div");
	teamCard.classList.add("team-card");
	const cardImage = document.createElement("div");
	cardImage.classList.add("card-image");
	const image = document.createElement("img");
	const cardText = document.createElement("div");
	cardText.classList.add("card-text");
	const memberName = document.createElement("h3");
	const memberRole = document.createElement("p");
	image.src = objectElement["Image"];
	image.alt = objectElement["Name"];
	cardImage.append(image);
	teamCard.append(cardImage);
	memberName.innerText = objectElement["Name"];
	memberRole.innerText = objectElement["Role"];
	cardText.append(memberName);
	cardText.append(memberRole);
	teamCard.append(cardText);
	teamContainer.append(teamCard);
}

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

//console.log(teamMembers);

const teamContainer = document.querySelector(".team-container");

for (let index = 0; index < teamMembers.length; index++) {
	const teamCard = document.createElement("div");
	teamCard.classList.add("team-card");
	const cardImage = document.createElement("div");
	cardImage.classList.add("card-image");
	const image = document.createElement("img");
	const cardText = document.createElement("div");
	cardText.classList.add("card-text");
	const memberName = document.createElement("h3");
	const memberRole = document.createElement("p");
	const member = teamMembers[index];
	//console.log(member);
	//console.log(member["Name"]);
	//console.log(member["Role"]);
	//console.log(member["Image"]);
	image.src = `img/${member["Image"]}`;
	image.alt = member["Name"];
	cardImage.append(image);
	teamCard.append(cardImage);
	memberName.innerText = member["Name"];
	memberRole.innerText = member["Role"];
	cardText.append(memberName);
	cardText.append(memberRole);
	teamCard.append(cardText);
	teamContainer.append(teamCard);
}

const nameField = document.getElementById("name").value;
console.log(nameField);
const roleField = document.getElementById("role").value;
console.log(roleField);
const imageField = document.getElementById("image").value;
console.log(imageField);
const sendBtn = document.getElementById("addMemberButton");
console.log(sendBtn);

sendBtn.addEventListener("click", function () {
	teamMembers.push({ Name: nameField, Role: roleField, Image: imageField });
	console.log(teamMembers[teamMembers.length - 1]);
	const newCard = document.createElement("div");
	newCard.classList.add("team-card");
	const newCardImage = document.createElement("div");
	newCardImage.classList.add("card-image");
	const newImage = document.createElement("img");
	const cardText = document.createElement("div");
	cardText.classList.add("card-text");
	const memberName = document.createElement("h3");
	const memberRole = document.createElement("p");
	const newMember = teamMembers[teamMembers.length - 1];
	//console.log(newMember);
	newImage.src = newMember["Image"];
	newImage.alt = newMember["Name"];
	newCardImage.append(newImage);
	newCard.append(newCardImage);
	memberName.innerText = newMember["Name"];
	memberRole.innerText = newMember["Role"];
	cardText.append(memberName);
	cardText.append(memberRole);
	newCard.append(cardText);
	teamContainer.append(newCard);
});

const classmates = [
    { name: "Antonio Dentamaro" , birthday: "2024-02-23" },
    { name: "Davide Losurdo" , birthday: "2024-05-03" },
    { name: "Ruben Di desidero" , birthday: "2024-05-17" },
    { name: "Elisa Sciancalepore" , birthday: "2024-06-06" },
    { name: "Micheangelo Stramaglia" , birthday: "2024-07-05" },
    { name: "Nicolo' Iurlo" , birthday: "2024-07-10" },
    { name: "Alessandro Gadaleta" , birthday: "2024-07-22" },
    { name: "Claudio Spaziani" , birthday: "2024-07-27" },
    { name: "Costantino Scalera" , birthday: "2024-09-04" },
    { name: "Fabio Masi" , birthday: "2024-09-21" },
    { name: "Vito Conteduca" , birthday: "2024-09-30" },
    { name: "Vito Albergo" , birthday: "2024-10-28" },
    { name: "Simone Loglisci" , birthday: "2024-11-28" },
    { name: "Ilaria Mincuzzi" , birthday: "2024-12-01" },
    { name: "Gianluca Carella" , birthday: "2024-12-05" },
    { name: "Martina Anelli" , birthday: "2024-12-22" },
    { name: "Martina Sasanelli" , birthday: "2024-12-26" },
    { name: "Kevin De Leo" , birthday: "2024-12-26" },
    { name: "Giancarlo Cutrone" , birthday: "2025-01-05" },
    { name: "Manuela Merola" , birthday: "2025-02-14" },
    { name: "Angelo Schilardi" , birthday: "2025-04-02" },
    { name: "Martina Gisonda" , birthday: "2025-05-29" },
];

function updateBirthdayUI() {
    const birthdayContainer = document.getElementById("birthdayContainer");
    birthdayContainer.innerHTML = "";

    for (const classmate of classmates) {
        const birthdayDate = new Date(classmate.birthday);
        const daysLeft = Math.ceil((birthdayDate - new Date()) / (1000 * 60 * 60 * 24));

        const card = document.createElement("div");
        card.className = "card birthday-card";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = classmate.name;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        
        const dateText = document.createElement("p");
        dateText.className = "card-text font-weight-bold";
        
        if (daysLeft === 0) {
            cardText.innerHTML = "Auguri di buon compleanno!";
        } else {
            cardText.innerHTML = `Compirà 18 anni tra <strong>${daysLeft} giorni</strong>.`;
        }
        
        dateText.textContent = `Data: ${classmate.birthday}`;
        dateText.style.marginTop = "10px";
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(dateText); 
        card.appendChild(cardBody);
        
        birthdayContainer.appendChild(card);
    }
}

updateBirthdayUI();
setInterval(updateBirthdayUI, 24 * 60 * 60 * 1000); // Refresh every 24 hours

const classmates = [
    { name: "Carl Harvey Miguel", birthday: "2022-07-23" },
    { name: "Mattia Mastrodomenico", birthday: "2023-05-10" },
    { name: "Antonio Dentamaro", birthday: "2024-02-23" },
    { name: "Davide Losurdo", birthday: "2024-05-03" },
    { name: "Ruben Di desidero", birthday: "2024-05-17" },
    { name: "Elisa Sciancalepore", birthday: "2024-06-06" },
    { name: "Micheangelo Stramaglia", birthday: "2024-07-05" },
    { name: "Nicolo' Pio Iurlo", birthday: "2024-07-10" },
    { name: "Alessandro Gadaleta", birthday: "2024-07-22" },
    { name: "Claudio Spaziani", birthday: "2024-07-27" },
    { name: "Alex Gesuito", birthday: "2024-08-21" },
    { name: "Costantino Scalera", birthday: "2024-09-04" },
    { name: "Fabio Masi", birthday: "2024-09-21" },
    { name: "Vito Conteduca", birthday: "2024-09-30" },
    { name: "Vito Albergo", birthday: "2024-10-28" },
    { name: "Simone Loglisci", birthday: "2024-11-28" },
    { name: "Ilaria Mincuzzi", birthday: "2024-12-01" },
    { name: "Gianluca Carella", birthday: "2024-12-05" },
    { name: "Martina Anelli", birthday: "2024-12-22" },
    { name: "Martina Sasanelli", birthday: "2024-12-26" },
    { name: "Kevin De Leo", birthday: "2024-12-26" },
    { name: "Giancarlo Cutrone", birthday: "2025-01-05" },
    { name: "Manuela Merola", birthday: "2025-02-14" },
    { name: "Angelo Schilardi", birthday: "2025-04-02" },
    { name: "Martina Gisonda", birthday: "2025-05-29" },
];

function updateBirthdayUI() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
    const birthdayContainer = document.getElementById("birthdayContainer");
    birthdayContainer.innerHTML = "";

    let nearestBirthdayIndex = 0;
    let nearestBirthdayTime = Infinity;

    const currentDate = new Date();

    for (let i = 0; i < classmates.length; i++) {
        const classNameLower = classmates[i].name.toLowerCase();
        if (searchTerm && !classNameLower.includes(searchTerm)) {
            continue;
        }

        const birthdayDate = new Date(classmates[i].birthday);
        const timeDifference = Math.abs(birthdayDate - currentDate);

        if (timeDifference < nearestBirthdayTime) {
            nearestBirthdayTime = timeDifference;
            nearestBirthdayIndex = i;
        }
    }

    // Aggiungi card per gli altri compleanni prossimi
    for (let i = 1; i <= 5; i++) { // Aggiungi le card per i compleanni prossimi 2 volte
        const upcomingBirthdayIndex = (nearestBirthdayIndex + i) % classmates.length;
        const upcomingBirthday = classmates[upcomingBirthdayIndex];
        const upcomingCard = createBirthdayCard(upcomingBirthday, false);
        upcomingCard.style.cssText += `position: absolute; top: 85%; left: ${-150 + i * 330}px; transform: translate(-50%, -50%); width: 16rem; height: 9rem;`;
        birthdayContainer.appendChild(upcomingCard);
    }

    const nearestBirthday = classmates[nearestBirthdayIndex];
    const nearestCard = createBirthdayCard(nearestBirthday, true);
    nearestCard.style.cssText += "transform: scale(1.5); margin-left: auto; margin-right: auto; margin-top: 10rem;";
    birthdayContainer.appendChild(nearestCard);
}

function createBirthdayCard(classmate, isNearest) {
    const card = document.createElement("div");
    card.className = "card birthday-card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.style.cssText = `
        text-align: center;
    `;

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = classmate.name;

    const cardText = document.createElement("p");
    cardText.className = "card-text";

    const birthdayDate = new Date(classmate.birthday);

    const countdownDiv = document.createElement("div");
    countdownDiv.className = "countdown";
    countdownDiv.style.fontWeight = "bold";
    countdownDiv.innerHTML = calculateBirthdayMessage(birthdayDate);

    const exactDateText = document.createElement("p");
    exactDateText.className = "card-text";
    exactDateText.textContent = `${birthdayDate.toLocaleDateString()}`;
    cardBody.appendChild(exactDateText);

    if (new Date() < birthdayDate) {
        const smallText = document.createElement("small");
        smallText.textContent = "(Giorni:Ore:Minuti:Secondi)";
        countdownDiv.appendChild(document.createElement("br"));
        countdownDiv.appendChild(smallText);
    }

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(countdownDiv);
    card.appendChild(cardBody);

    if (!isNearest) {
        card.style.cssText += "transform: scale(0.8);"; // Riduci la dimensione delle card prossime
    }

    return card;
}

function calculateBirthdayMessage(birthdayDate) {
    const currentDate = new Date();
    let message = '';

    if (currentDate < birthdayDate) {
        const timeLeft = birthdayDate - currentDate;
        const daysLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        const hoursLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60)) % 60);
        const secondsLeft = Math.max(0, Math.floor(timeLeft / 1000) % 60);

        message = `(${daysLeft.toString().padStart(2, '0')}:${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')})`;

    } else if (currentDate > birthdayDate) {
        message = `Ha compiuto 18 anni`;
    } else {
        message = "Auguri di buon compleanno!";
    }

    return message;
}

updateBirthdayUI();
setInterval(updateBirthdayUI, 1000);

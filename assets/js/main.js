// Sample data structure containing classmates' birthdays
const classmates = [
    { name:	"Antonio Dentamaro" , birthday: "2024-02-23" },
    { name:	"Davide Losurdo" , birthday: "2024-05-03" },
    { name:	"Ruben Di desidero" , birthday: "2024-05-17" },
    { name:	"Elisa Sciancalepore" , birthday: "2024-06-06" },
    { name:	"Micheangelo Stramaglia" , birthday: "2024-07-05" },
    { name:	"Nicolo' Iurlo" , birthday: "2024-07-10" },
    { name:	"Alessandro Gadaleta" , birthday: "2024-07-22" },
    { name:	"Claudio Spaziani" , birthday: "2024-07-27" },
    { name:	"Costantino Scalera" , birthday: "2024-09-04" },
    { name:	"Fabio Masi" , birthday: "2024-09-21" },
    { name:	"Vito Conteduca" , birthday: "2024-09-30" },
    { name:	"Vito Albergo" , birthday: "2024-10-28" },
    { name:	"Simone Loglisci" , birthday: "2024-11-28" },
    { name:	"Ilaria Mincuzzi" , birthday: "2024-12-01" },
    { name:	"Gianluca Carella" , birthday: "2024-12-05" },
    { name:	"Martina Anelli" , birthday: "2024-12-22" },
    { name:	"Martina Sasanelli" , birthday: "2024-12-26" },
    { name:	"Kevin De Leo" , birthday: "2024-12-26" },
    { name:	"Giancarlo Cutrone" , birthday: "2025-01-05" },
    { name:	"Manuela Merola" , birthday: "2025-02-14" },
    { name:	"Angelo Schilardi" , birthday: "2025-04-02" },
    { name:	"Martina Gisonda" , birthday: "2025-05-29" },
    

    // Add more classmates with their birthdays here
];

// Function to calculate the next upcoming birthday
function getNextBirthday() {
    const currentDate = new Date();
    let upcomingBirthday = null;

    for (const classmate of classmates) {
        const birthdayDate = new Date(classmate.birthday);

        // Compare the birthday with the current date
        if (birthdayDate >= currentDate) {
            if (!upcomingBirthday || birthdayDate < upcomingBirthday.birthdayDate) {
                upcomingBirthday = {
                    name: classmate.name,
                    birthdayDate: birthdayDate
                };
            }
        }
    }

    return upcomingBirthday;
}

// Function to update the website content
function updateNextBirthday() {
    const nextBirthday = getNextBirthday();

    if (nextBirthday) {
        const daysLeft = Math.ceil((nextBirthday.birthdayDate - new Date()) / (1000 * 60 * 60 * 24));
        document.getElementById("nextBirthday").innerHTML = `Tra ${daysLeft} giorni è il compleanno di ${nextBirthday.name}`;
    } else {
        document.getElementById("nextBirthday").innerHTML = "No upcoming birthdays.";
    }
}

// Call the update function initially
updateNextBirthday();

// Set up a daily refresh
setInterval(updateNextBirthday, 24 * 60 * 60 * 1000); // Refresh every 24 hours

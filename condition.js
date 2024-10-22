//?Övning: Temperaturbedömning (Lätt) - 1

//! Uppgift:

//! Be användaren ange temperaturen i Celsius. Om temperaturen är över 30 grader, skriv ut "Det är väldigt varmt ute." Om temperaturen är mellan 20 och 30 grader, skriv ut "Det är varmt ute." Om temperaturen är mellan 10 och 20 grader, skriv ut "Det är svalt ute." Annars, skriv ut "Det är kallt ute." Tips: Kom ihåg att konvertera användarinmatningen till ett nummer.

// let temp = Number(prompt("Hur varmt är det idag: "));

// if (temp >= 30) {
//   console.log("Det brinner ute idag");
// } else if (temp >= 20) {
//   console.log("Det är en svensk sommar");
// } else {
//   console.log("Winter is coming");
// }

// let temp = Number(prompt("Hur varmt är det idag: "));

// temp>20 ? console.log("varmt") : console.log("kalt")
// conditon ? uttryckOmSant: uttryckOmFalskt;

// temp >= 30
// ? console.log("Det brinner ute idag")
// : temp >= 20 ? console.log("Det är en svensk sommar")
// : console.log("Winter is coming");

//? Övning: Betygskonvertering (Medel) - 2

//! Uppgift:

//! Be användaren ange ett numeriskt betyg mellan 0 och 100. Konvertera betyget till en bokstav enligt följande: 90-100: A 80-89: B 70-79: C 60-69: D 0-59: F Skriv ut det motsvarande bokstavsbetyget.

// Tips: Använd flera if-else-if-satser för att kontrollera intervallen.

// let grade = Number(prompt("Ange resultat (0-100) för att få ditt betyg: "));

// if (grade <= 100) {
//   if (grade >= 90) {
//     console.log("Ditt betyg är: A");
//   } else if (grade >= 80) {
//     console.log("Ditt betyg är: B");
//   } else if (grade >= 70) {
//     console.log("Ditt betyg är: C");
//   } else if (grade >= 60) {
//     console.log("Ditt betyg är: D");
//   } else {
//     console.log("Grattis du är sämst med F i betyg");
//   }
// } else {
//   console.log("Ogiltig inmatning av resultat");
// }

// grade > 100 ? console.log("Ogiltig inmatning av resultat")
// : grade >= 90 ? console.log("Ditt betyg är: A")
// : grade >= 80 ? console.log("Ditt betyg är: B")
// : grade >= 70 ? console.log("Ditt betyg är: C")
// : grade >= 60 ? console.log("Ditt betyg är: D")
// : console.log("Grattis du är sämst med F i betyg");

//? Övning: Butiksrabatt (Medel) - 3

//! Uppgift:

//! Be användaren ange sin kundtyp: "Ny" eller "Återkommande". Be användaren ange köpbeloppet. Om kunden är "Återkommande" och köpbeloppet är över 500 kr, ge 15% rabatt. Om kunden är "Ny" och köpbeloppet är över 500 kr, ge 10% rabatt. Skriv ut det slutliga priset efter rabatt.

// let customer = prompt("Är du en ny kund (ja/nej)? ");
// let price = Number(prompt("Hur mycket vill du spendera idag? "));

// if (customer === "nej" && price >= 500) {
//   //15 %
//   console.log("Din rabatt blir 15% och ditt nya pris är: ", price * 0.85 + "kr");
// } else if (customer === "ja" && price >= 500) {
//   //10 %
//   console.log("Din rabatt blir 10% och ditt nya pris är: ", price * 0.9 + "kr");
// } else {
//   console.log("Tyvärr du får ingen rabatt för att ditt pris är: ", price + "kr");
// }

// customer === "nej" && price >= 500 ? console.log("Din rabatt blir 15% och ditt nya pris är: ", price * 0.85 + "kr")
// : customer === "ja" && price >= 500 ? console.log("Din rabatt blir 10% och ditt nya pris är: ", price * 0.9 + "kr")
// : console.log("Tyvärr du får ingen rabatt för att ditt pris är: ", price + "kr");

//? Övning: Lösenordskontroll (Medel) - 4

//! Uppgift:

//! Be användaren ange ett lösenord. Kontrollera att lösenordet uppfyller följande kriterier: Minst 8 tecken långt. Innehåller minst en siffra. Innehåller minst en versal bokstav. Skriv ut om lösenordet är godkänt eller inte.

// let password = prompt("Ange lösenord:");

// let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //truhty

// let hasNumber = false;
// let hasUppercase = false;

// for (i = 0; i < password.length; i++) {
//   let character = password[i];

//   if (num.includes(character)) {
//     hasNumber = true;
//   }

//   if (character >= "A" && character <= "Z") {
//     hasUppercase = true;
//   }

//   console.log(password[i]);
// }

// if (password.length <= 8) {
//   console.log("Ditt lösenord innehåller för få tecken");
// } else if (!hasNumber) {
//   console.log("Ditt lösenord innehåller ingen siffra");
// } else if (!hasUppercase) {
//   console.log("Ditt lösenord innehåller ingen versal");
// } else {
//   console.log("Lösenordet är accepterat");
// }

// password.length <= 8 ? console.log("Ditt lösenord innehåller för få tecken") : !hasNumber ? console.log("Ditt lösenord innehåller ingen siffra") : !hasUppercase ? console.log("Ditt lösenord innehåller ingen versal") : console.log("Lösenordet är accepterat");

//? Övning: Trafikljus (Medel) - 5

//! Uppgift:

//! Be användaren ange färgen på ett trafikljus: "Röd", "Gul" eller "Grön". Skriv ut följande meddelanden baserat på färgen: "Stanna" för "Röd". "Förbered att stanna" för "Gul". "Kör" för "Grön". Hantera även ogiltiga inmatningar.

// let color = prompt("Ange färg (röd,gul,grön):").toLowerCase();

// if (color === "röd") {
//   alert("Stanna din dummer");
// } else if (color === "gul") {
//   alert("Stanna om du är ful");
// } else if (color === "grön") {
//   alert("Fritt fram");
// } else {
//   alert("Ogiltig färg");
// }

// color === "röd" ? alert("Stanna din dummer")
// : color === "gul" ? alert("Stanna om du är ful")
// : color === "grön" ? alert("Fritt fram")
// : alert("Ogiltig färg");

// Tips: Använd if-else-satser och tänk på att göra inmatningen skiftlägesokänslig med toLowerCase().

//? Övning: Nummer i Ord (-lätt) - 6

//! Uppgift:

//! Be användaren ange ett tal mellan 0 och 5. Konvertera talet till dess motsvarande ord och skriv ut det. 0: "Noll" 1: "Ett" 2: "Två" 3: "Tre" 4: "Fyra" 5: "Fem" Om talet är utanför intervallet, skriv ut "Ogiltigt tal".

// let number = Number(prompt("Välj ett tal mellan (0-5): "));

// let text;

// switch (number) {
//   case 0:
//     text = "Noll";
//     break;
//   case 1:
//     text = "Ett";
//     break;
//   case 2:
//     text = "Två";
//     break;
//   case 3:
//     text = "Tre";
//     break;
//   case 4:
//     text = "Fyra";
//     break;
//   case 5:
//     text = "Fem";
//     break;
//   default:
//     text = "Fel inmatning";
//     break;
// }

// alert(text);

//? Övning: Planetvikt (Svår) - 7

//! Uppgift:

//! Be användaren ange sin vikt i kilogram. Be användaren välja en planet (t.ex. "Mars", "Jupiter"). Beräkna och skriv ut vad användaren skulle väga på den valda planeten baserat på gravitationsfaktorer: Mars: 0.38 Jupiter: 2.34 Månen: 0.16 Hantera ogiltiga inmatningar.

// let weight;

// do {
//   weight = parseFloat(prompt("Ange din vikt (kg):"));
// } while (isNaN(weight));

// let planet = prompt("Välj planet (mars/jupiter/månen): ").toLowerCase();

// let text;

// if (planet === "mars") {
//   text = `Din vikt är ${(weight * 0.38).toFixed(1)} kg`;
// } else if (planet === "jupiter") {
//   text = `Din vikt är ${(weight * 2.24).toFixed(1)} kg`;
// } else if (planet === "månen") {
//   text = `Din vikt är ${(weight * 0.16).toFixed(1)} kg`;
// } else {
//   text = "Fel inmatning";
// }

// alert(text);

//? Övning: Quizspel (Svår) - 8

//! Uppgift:

//! Skapa ett enkelt quiz med tre frågor. För varje korrekt svar får användaren en poäng. Efter sista frågan, skriv ut den totala poängen.

// let dino = prompt("Vilken dinosaurie äter kött (t-rex/trehornsansikte/långhals)? ").toLowerCase();

// let rapper = prompt("Vem är en rappare (Papi Santana/Adele/Sia)?").toLowerCase();

// let smell = prompt("Vad luktar illa (Ruttna ägg/nygrillat kött/whiskey)?").toLowerCase();

// let score = 0;

// if (dino === "t-rex") {
//   score += 1;
// }
// if (rapper === "papi santana") {
//   score += 1;
// }
// if (smell === "ruttna ägg") {
//   score += 1;
// }

// console.log(`Ditt resultat är: ${score}p`);

//? Övning: Validera E-postadress (Svår) - 9

//! Uppgift:

//! Be användaren ange en e-postadress. Kontrollera att e-postadressen innehåller "@" och ".". Skriv ut om e-postadressen är giltig eller ogiltig.

// let account = prompt("Ange epost: ").toLowerCase();

// account.includes("@") && account.includes(".") ? console.log("Grattis din epost är giltig")
// : console.log("Tyvärr din epost är inte giltig");

//? Övning: Enkel Bankomat (Svår) - 10

//! Uppgift:

//! Be användaren ange en PIN-kod. Ge användaren tre försök att ange rätt PIN (t.ex. "1234"). Om rätt PIN anges, skriv ut "Välkommen!". Om försök tar slut, skriv ut "Kortet är blockerat.".

// let pin;
// let pinIsRight = false;
// let numOfTries = 0;
// const maxTries = 3;
// const rightPin = "1234";

// while (pin !== rightPin && numOfTries < maxTries) {
//   pin = prompt(`Ange din fyrsiffriga pinkod (du har ${maxTries - numOfTries} försök kvar): `);
//   numOfTries++;
// }

// if (pin === rightPin) {
//   pinIsRight = true;
// }

// pinIsRight ? alert("Välkommen") : alert("Kortet är blockerat");

//? Övning: Matbeställning (Medel) - 11

//! Uppgift:

//! Skapa en meny med tre maträtter och deras priser. Be användaren välja en maträtt genom att ange dess nummer. Skriv ut det valda valet och priset.

// let choice = Number(prompt("Välj din maträtt (1-3)"));

// let dish = `dish${choice}`;

// const menu = {
//   dish1: {
//     typeOfFood: "Köttbullar",
//     price: 59,
//   },
//   dish2: {
//     typeOfFood: "Fish'n chips",
//     price: 89,
//   },
//   dish3: {
//     typeOfFood: "Kyckling med pommes",
//     price: 79,
//   },
// };

// let food = menu[dish].typeOfFood;
// let price = menu[dish].price;

// alert(`Din maträtt är ${food} och det kostar ${price}kr`);

//? Övning: Hastighetskontroll (Medel) - 12

//! Uppgift:

//! Be användaren ange sin hastighet i km/h. Om hastigheten är över 120 km/h, skriv ut "För fort, böter!". Om hastigheten är mellan 80 km/h och 120 km/h, skriv ut "Godkänd hastighet.". Om hastigheten är under 80 km/h, skriv ut "För långsamt, öka hastigheten.".

// let speed = Number(prompt("Ange din hastighet (km/h): "));

// let message = "";

// speed > 120 ? (message = "För fort din fartdåre, du får böter") : speed <= 120 && speed >= 80 ? (message = "Godkänd hastighet") : (message = "Du köra för långsamt din snigel");

// alert(`${message}. Din hastighet är ${speed} km/h`);

//? Övning: Enkel Valutakonverterare (Lätt) - 13

//! Uppgift:

//! Be användaren ange ett belopp i SEK. Konvertera beloppet till EUR (1 EUR = 10 SEK). Skriv ut det konverterade beloppet i EUR.

//alert(`${(Number(prompt("Ange valuta i SEK: ")) / 10).toFixed(2)} EUR`);

//? Övning: Filmrekommendation (Medel) - 14

//! Uppgift:

//! Be användaren ange sin ålder. Baserat på åldern, rekommendera en film: Under 13: "Animerad film" 13 till 17: "Ungdomsfilm" 18 och över: "Vuxenfilm"

// let age = Number(prompt("Ange ålder: "));

// let movie;

// if(age >= 18){
//     movie="Vuxenfilm"
// }else if(age >= 13){
//     movie ="Ungdomsfilm"
// }else{
//     movie="Animerad film"
// }

// alert(movie);

//? Övning: Matematiskt Spel (Svår) - 15

//! Uppgift:

//! Generera två slumpmässiga tal mellan 1 och 10. Be användaren att multiplicera dessa två tal och ange svaret. Kontrollera om svaret är korrekt och skriv ut ett passande meddelande.

// const num1 = Math.floor(Math.random() * 10) + 1;
// const num2 = Math.floor(Math.random() * 10) + 1;

// let product = Number(prompt(`Vad är produkten av ${num1} och ${num2}: `));

// if (product === num1 * num2) {
//   alert("Snyggt räknat du är värsta matte snillet va");
// } else {
//   alert("Du är inte ett matte snille, bäst gå tillbaka till plugget va");
// }

// Övning: BMI-kalkylator (Medel)

// Uppgift:

// Be användaren ange sin längd i meter och vikt i kilogram. Beräkna användarens BMI med formeln: BMI = vikt / (längd * längd). Skriv ut BMI och en hälsoklassificering: Under 18.5: "Undervikt" 18.5 - 24.9: "Normalvikt" 25 - 29.9: "Övervikt" 30 och över: "Fetma"

// Tips: Använd if-else-if-satser för att klassificera BMI-värdet.

// Övning: Resekostnadskalkylator (Svår)

// Uppgift:

// Be användaren ange avståndet i kilometer och bränsleförbrukningen i liter per mil. Be användaren ange bränslepriset per liter. Beräkna och skriv ut den totala resekostnaden.

// Tips: Kom ihåg att 1 mil = 10 km. Använd matematiska beräkningar och if-satser för validering.

// Övning: Kontrollera Anagram (Svår)

// Uppgift:

// Be användaren ange två ord. Kontrollera om orden är anagram av varandra (dvs. om de innehåller exakt samma bokstäver i olika ordning). Om de är anagram, skriv ut "Orden är anagram." Annars, skriv ut "Orden är inte anagram."

// Tips: Använd split(''), sort(), join('') för att sortera bokstäverna i varje ord. Jämför de sorterade strängarna för att avgöra om orden är anagram. Gör strängarna gemener med toLowerCase() för att undvika problem med versaler.

// Övning: Nummergissningsspel (Svår)

// Uppgift:

// Skapa ett spel där datorn väljer ett slumpmässigt tal mellan 1 och 50. Användaren har fem försök att gissa talet. Efter varje gissning, ge en ledtråd om talet är högre eller lägre. Skriv ut ett meddelande om användaren vinner eller förlorar.

// Tips: Använd en loop för att räkna försök. Använd if-else-satser för att jämföra gissningen med det slumpmässiga talet.

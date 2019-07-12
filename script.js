// Creare un oggetto che descriva uno studente
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.

var studente = {
	"nome" : "marco",
	"cognome" : "pace",
	"eta" : "32"
};

for (var descrizione in studente) {
	console.log(descrizione + " = " + studente[descrizione]);
}

// ---

var classe = [
	{"nome" : "marco",
	"cognome" : "pace",
	"eta" : "32"},
	{"nome" : "angelo",
	"cognome" : "capasso",
	"eta" : "32"},
	{"nome" : "vincenzo",
	"cognome" : "giorgio",
	"eta" : "32"},
	{"nome" : "antonio",
	"cognome" : "errico",
	"eta" : "32"}
];

for (var i = 0; i < classe.length; i++) {
	console.log(classe[i].nome, classe[i].cognome);
}

// ---

var inserisci_nome = prompt("Inserisci il tuo nome");
var inserisci_cognome = prompt("Inserisci il tuo cognome");
var inserisci_eta = prompt("Inserisci la tua età");

classe.push({
	"nome" : inserisci_nome,
	"cognome" : inserisci_cognome,
	"eta" : inserisci_eta
})

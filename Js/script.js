// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// 1. Array vuoto (contenitore per i valori filtrati) e un array di supporto (contenitore per i tutti i valori)
// 2. Chiedere 6 volte l'inserimento di un numero casuale (prompt *6 = ciclo definito *6)
// 3. Verificare che il dato inserito sia un numero
// 4. Filtrare gli input dati dall'utente e assegnarli all' array (se tra gli input ci sono numeri dispari = if input % 2 = 1 allora..  )
// 5. Stampare l' Output dei possibili casi


// 1. Array vuoto, array di supporto e variabile di controllo
var array = [];
var supporto = [];
var booleana = 0;

// 2. Chiedere 6 volte l'inserimento di un numero casuale (prompt *6 = ciclo definito *6)
for ( var i = 0; i < 2; i++ ) {

    supporto[i] = (parseInt(prompt("inserisci un numero casuale")));

    // 3. Verificare che il dato inserito sia un numero
    while (isNaN(supporto[i])) {
        alert("carattere non valido, riprova");
        supporto[i] = (parseInt(prompt("inserisci un numero casuale")));
    }
    alert("Il numero inserito è " + supporto[i]);

    // 4. Filtrare gli input dati dall'utente e assegnarli all' array
    if (supporto[i] % 2 == 1) {
        array [i] = (supporto[i]);
        booleana = 1;
    }
    console.log( "Il valore singolo di array è " + array[i]);
}
console.log(booleana);

// 5. Stampare l' Output dei possibili casi
if (booleana==0) {
    console.log("L'array è vuoto!");
    alert("L'array è vuoto!");
} else {
    console.log("Il valore totale di array è " + array);
    alert("Il valore totale di array è " + array);
}

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// 1. Array vuoto (contenitore per i valori filtrati) e un array di supporto (contenitore per i tutti i valori)
// 2. Chiedere 6 volte l'inserimento di un numero casuale (prompt *6 = ciclo definito *6)
// 3. Filtrare gli input dati dall'utente e assegnarli all' array (se tra gli input ci sono numeri dispari = if input % 2 = 1 allora..  )


// 1. Array vuoto e array di supporto
var array = [];
var supporto = [];

// 2. Chiedere 6 volte l'inserimento di un numero casuale (prompt *6 = ciclo definito *6)
for ( var i = 0; i < 6; i++ ) {
    supporto.push(parseInt(prompt("inserisci un numero casuale")));
    // console.log(supporto[i]);

    // 3. Filtrare gli input dati dall'utente e assegnarli all' array
    if (supporto[i] % 2 == 1) {
        array.push(supporto[i]);
    }
}
// Output - stampo array filtrato
console.log("Il valore di array è " + array);
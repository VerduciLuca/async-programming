// function superFunzione(){
//     console.log('sto eseguendo il codice dentro il timeout')
// }
// const pippo = 1;
// const pluto = 2;
// setTimeout(superFunzione,20000); //callback
// const paperino = pippo + pluto;
// const topolino = "javascript";
// console.log(topolino + paperino);

// setInterval(() => {
//     console.log('sto eseguendo il secondo codice dentro il timeout')
// }, 2000);

function gestisciRisposta(resp){
    // return resp.text();
    return resp.json()
}

function gestisciRisultatoFinale(res){
    // const dittoObj = JSON.parse(res)
    // console.log(dittoObj);
    console.log(res);
}

function gestisciEmergenza(error){
    console.log(error.message);
}

fetch('https://pokeapi.co/api/v2/pokemon/ditto')

.then(gestisciRisposta)
.then(gestisciRisultatoFinale)
.catch(gestisciEmergenza);
// .then((resp)=>resp.json())
// .then((res)=>console.log(res))

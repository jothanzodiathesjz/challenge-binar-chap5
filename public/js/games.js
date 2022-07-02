function comChoice() {
    const com = Math.random();
    if (com < 0.34) return '.batucom';
    if (com >= 0.34 && com < 0.67) return '.kertascom';
    return '.guntingcom';
}
function comThink() {
    const choices = ['.batucom', '.kertascom', '.guntingcom'];
    const randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];

}

function botBrain() {
    const option = ['.batucom', '.kertascom', '.guntingcom'];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
}


function result(com, player) {
    if (player==='bt-batu' && com==='.batucom') return 'DRAW';
    if (player==='bt-kertas' && com==='.kertascom') return 'DRAW';
    if (player==='bt-gunting' && com==='.guntingcom') return 'DRAW';
    if (player === 'bt-batu') return (com === '.guntingcom') ? 'Player Win' : 'Com Win';
    if (player === 'bt-kertas') return (com === '.batucom') ? 'Player Win' : 'Com Win';
    if (player === 'bt-gunting') return (com === '.kertascom') ? 'Player Win' : 'Com Win';
    
}

// console.log(result('batu', 'kertas'))




const option = document.querySelectorAll(".weapon button")
option.forEach(function (pil) {
    pil.addEventListener('click', function () {
    const comPilihan = comChoice();
    const playerPilihan = pil.className;
    const hasil = result(comPilihan,playerPilihan);
    pil.setAttribute("class", "buttoncom");

        // element berubah ketika hasil keluar
    let kom = document.querySelector(comPilihan);
        kom.setAttribute("class", "buttoncom");
        
        const akhir = document.querySelector('.box-versus')
        if (hasil === 'Player Win' || hasil === 'Com Win') { 
            akhir.setAttribute("class", "box-result")
            akhir.innerHTML = `<h1 class="win">${hasil}</h1>`
        } else {
            akhir.setAttribute("class", "box-draw")
            akhir.innerHTML = `<h1 class="win">${hasil}</h1>`
        }
        console.log(`com : ${comPilihan}`);
        console.log(`player : ${playerPilihan}`);
        console.log(hasil);

        option.forEach(element => {
            element.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        });
    })
})

function myFunction() {
    window.location.reload();
    // let reset = document.querySelector(".box-result")
    // let reset2 = document.querySelector(".box-draw")
    
    // reset.setAttribute("class", "box-versus")
    // reset.innerHTML(`<h1 class="versus-text">VS</h1>`)
    // reset2.setAttribute("class","box-versus")
}

// const reset = document.querySelector(".reset-btn");
// reset.addEventListener("click", () => {
        
// })

// playerChoice.addEventListener('click', () => {
//     const comPilihan = comChoice();
//     const playerPilihan = playerChoice.className;
//     const hasil = result(comPilihan, playerPilihan);

//     let kom = document.querySelector(comPilihan);
//     kom.setAttribute("class", "buttoncom");
//     console.log(kom)

//         console.log(`com : ${comPilihan}`);
//         console.log(`player : ${playerPilihan}`);
//         console.log(hasil);
//     })
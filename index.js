let homesum = document.getElementById("homepoint")

let hometotal = 0

function homept1(){
    homesum.innerText= hometotal + 1
    hometotal+=1
}

function homept2(){
    homesum.innerText= hometotal + 2
    hometotal+=2
}

function homept3(){
    homesum.innerText= hometotal + 3
    hometotal+=3
}

let guestsum = document.getElementById("guestpoint")

let guesttotal = 0

function guestpt1(){
    guestsum.innerText= guesttotal + 1
    guesttotal+=1
}

function guestpt2(){
    guestsum.innerText= guesttotal + 2
    guesttotal+=2
}

function guestpt3(){
    guestsum.innerText= guesttotal + 3
    guesttotal+=3
}

function reset(){
    guestsum.innerText = 0
    homesum.innerText = 0
    hometotal = 0
    guesttotal = 0
}
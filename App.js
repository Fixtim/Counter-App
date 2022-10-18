let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
console.log(countEL)
let score = 0
function goal(){
    score += 1
    countEL.textContent = score
    console.log(score)
}


let countbEL = document.getElementById("countb-el")
console.log(countbEL)
let scoreb = 0
function goalb(){
    scoreb += 1
    countbEL.textContent = scoreb
    console.log(scoreb)
}

function save(){
    let countstr = score + " - " +scoreb
    saveEL.textContent += countstr
    countEL.textContent = 0
    score = 0
    countbEL.textContent = 0
    scoreb = 0
}





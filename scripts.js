let choices = document.querySelectorAll(".photos");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#you-s");
let compScore = document.querySelector("#comp-s");

let user = 0;
let comp = 0;

const compChoice = () => {
    const ch = ["rock", "paper", "scissors"];
    let inx = Math.floor(Math.random() * 3);
    return ch[inx];
}

let winer = (win, comc, userid) => {
    if (win) {
        msg.innerText = `You Win!!!,Your ${userid} beats ${comc}`;
        userScore.innerText = ++user;

    } else {
        msg.innerText = `Computer Win, ${comc} beats Your ${userid}`;
        compScore.innerText = ++comp;
    }
}

let gameplay = (userid) => {

    console.log(userid);
    console.log(compChoice());
    let comc = compChoice();

    if (comc === userid) {
        msg.innerText = "Draw Game";
    }
    else {
        let win = true;
        if (userid === "rock") {
            win = comc === "paper" ? false : true;
        } else if (userid === "paper") {
            win = comc === "scissors" ? false : true;
        } else {
            win = comc === "rock" ? false : true;
        }
        winer(win, comc, userid);
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userid = choice.getAttribute("id");
        gameplay(userid)
    })
})

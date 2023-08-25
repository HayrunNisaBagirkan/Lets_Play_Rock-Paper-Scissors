const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", playGame);
                          }
                )
function playGame(event) {
    const playerChoise = event.target.id;
    const computerChoise = choices[Math.floor(Math.rondom() * 3)];
    const result = getResult(playerChoise, computerChoise);
    document.getElementById("result").textContent = "Result: " + result;
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Win!"
    }
}

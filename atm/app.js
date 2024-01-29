/*
ATM APPLICATION

1- View Balance
2- Withdraw Money
3- Deposit Money
4- Exit
*/

let newLine = "\r\n";
let balance = 5000;

let menuText = "1- View Balance " + newLine
    + "2- Withdraw Money" + newLine
    + "3- Deposit Money" + newLine
    + "4- Exit" + newLine
    + "Please select an option.";

let userChoice = prompt(menuText);

switch (userChoice) {
    case "1":
        alert("Your Balance: " + balance);
        break;

    case "2":
        let withdrawalAmount = Number(prompt("Enter the amount you want to withdraw:"));
        if (withdrawalAmount <= balance) {
            // Successful withdrawal
            balance -= withdrawalAmount;
            alert("Remaining Balance: " + balance);
        } else {
            alert("You cannot withdraw more than your balance!" + newLine
                + "Your Balance: " + balance + " " + "Withdrawal Amount: " + withdrawalAmount);
        }
        break;

    case "3":
        let depositAmount = Number(prompt("Enter the amount you want to deposit:"));
        balance += depositAmount;
        alert("Updated Balance: " + balance);
        break;

    case "4":
        alert("You have exited the system...");
        break;

    default:
        alert("Please enter a value between 1 - 4!");
        break;
}

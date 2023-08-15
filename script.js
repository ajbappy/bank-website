// deposite part start

document.getElementById("btn-deposite").addEventListener("click", function () {
  console.log("working");
  const depositInput = document.getElementById("deposit-text");
  const preInputValueString = depositInput.value;
  const newInputAmount = parseFloat(preInputValueString);

  const depositAmount = document.getElementById("deposite-amount"); // Corrected ID
  const preDepositAmount = depositAmount.innerText;
  const newDepositAmount = parseFloat(preDepositAmount);

  const currentDepositAmount = newInputAmount + newDepositAmount;

  depositAmount.innerText = currentDepositAmount;

  const totalBalance = document.getElementById("total-balance");
  const totalBalanceString = totalBalance.innerText;
  const preBalance = parseFloat(totalBalanceString);
  const newTotalBalance = preBalance + newInputAmount;
  totalBalance.innerText = newTotalBalance;

  depositInput.value = "";
});

// withdrow start

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-text");
  const preWithdrawInput = withdrawInput.value;
  const newWithdrawInput = parseFloat(preWithdrawInput);

  const withdrawAmount = document.getElementById("withdraw-amount");
  const preWithAmount = withdrawAmount.innerText;
  const newWithdrawAmount = parseFloat(preWithAmount);

  const currentWithdrawAmount = newWithdrawAmount + newWithdrawInput;
  withdrawAmount.innerText = currentWithdrawAmount;

  const totalBalance = document.getElementById("total-balance");
  const totalBalanceString = totalBalance.innerText;
  const preBalance = parseFloat(totalBalanceString);
  const newTotalBalance = preBalance - newWithdrawInput;
  totalBalance.innerText = newTotalBalance;

  withdrawInput.value = "";
});

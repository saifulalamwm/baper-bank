const depositedBalance = document.getElementById("depositedBalance");
const withdrawalBalance = document.getElementById("withdrawalBalance");
const currentBalance = document.getElementById("currentBalance");
const depositedBtn = document.getElementById("depositedBtn");
const withdrawalBtn = document.getElementById("withdrawalBtn");
const amountInput = document.getElementById("amountInput");
const bankingData = document.getElementById("bankingData");

// depositedBtn.addEventListener("click", () => {
//   const strToNum = amountInput.value;
//   deposit = deposit + Number(strToNum);
//   depositedBalance.textContent = deposit;
//   console.log("button clicked");
// });

depositedBtn.addEventListener("click", function () {
  // Step 1
  const newDeposit = Number(amountInput.value);
  const previousDeposit = Number(depositedBalance.textContent);
  // step-2
  const currentDeposit = previousDeposit + newDeposit;
  depositedBalance.textContent = currentDeposit;
  //   step-3
  const previousBalance = Number(currentBalance.textContent);
  currentBalance.textContent = previousBalance + newDeposit;
  // step-4
  const row = document.createElement("tr");
  const currentDate = new Date();
  const setDate = currentDate.toLocaleString();
  row.innerHTML = `
    <td class="border px-4 py-2">${setDate}</td>
    <td class="text-center border px-4 py-2">${"Deposit"}</td>
    <td class="text-right border px-4 py-2">${newDeposit}</td>
    `;

  bankingData.appendChild(row);

  //
  amountInput.value = "";
  console.log(setDate);
});
withdrawalBtn.addEventListener("click", function () {
  const newWithdraw = Number(amountInput.value);
  const previousBalance = Number(currentBalance.textContent);
  if (previousBalance < newWithdraw) {
    window.alert(`You don't have sufficient balance in your account
        your current balance is ${previousBalance}`);
  } else {
    // Step 1
    const previousWithdraw = Number(withdrawalBalance.textContent);
    // step-2
    const currentWithdraw = previousWithdraw + newWithdraw;
    withdrawalBalance.textContent = currentWithdraw;
    //   step-3
    currentBalance.textContent = previousBalance - newWithdraw;
    //
    const row = document.createElement("tr");
    const currentDate = new Date();
    const setDate = currentDate.toLocaleString();
    row.innerHTML = `
    <td class="  border px-4 py-2">${setDate}</td>
    <td class=" text-center border px-4 py-2">${"Withdrawal"}</td>
    <td class=" text-right border px-4 py-2">${newWithdraw}</td>
    `;

    bankingData.appendChild(row);
  }

  // step-4

  amountInput.value = "";
  console.log(currentWithdraw);
});

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const inputWithdraw = document.getElementById('input-withdraw');

    const newWithdrawAmountString = inputWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;



    inputWithdraw.value = '';
})
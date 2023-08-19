document.getElementById('btn-deposit').addEventListener('click', function() {
    const amountInput = document.getElementById('input-deposit');
    const newAmountDepositString = amountInput.value;
    const newAmountDeposit = parseFloat(newAmountDepositString);
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newAmountDeposit;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newAmountDeposit;

    balanceTotalElement.innerText = currentBalanceTotal;



    amountInput.value = '';

})
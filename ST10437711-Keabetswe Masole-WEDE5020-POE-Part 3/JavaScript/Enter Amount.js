function validateForm() {
    const amountInput = document.getElementById('amount');
    const errorMessage = document.getElementById('error-message');
    const amountValue = amountInput.value.trim();

    //Checks if the amount is a valid number.
    if (isNaN(amountValue) || amountValue === "") {
        errorMessage.style.display = 'inline'; //Shows error message.
        return false; //Prevent submission.
    } else {
        errorMessage.style.display = 'none'; //Hide error message.
        return true; //Allow submission.
    }
}
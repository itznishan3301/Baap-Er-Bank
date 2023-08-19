// Step 1 - Add event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function () {

    // Step2 - get the email address inside of the input field
    // always remember to use .value to get text from an input field

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    console.log(email);

    // Step 3 - get password
    // 3.a - set id on the html element
    // 3.b - get the element
    // 3.c - get the value from the element

    const userPass = document.getElementById('user-pass');
    const pass = userPass.value;
    console.log(pass);

    // Do not verify email password on the client side

    // step 4 - verify email and password
    if (email === 'sontan@baap.com' && pass === '1234') {
        window.location.href = 'bank.html';
    }
    else{
        alert('Toke Teijjo Ghosona Korlam!!! tui Pass vuila gesos');
    }

})


// 
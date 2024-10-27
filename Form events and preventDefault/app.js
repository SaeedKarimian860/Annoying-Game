//Form events & preventdefault
// const form = document.querySelector('#signup-form')

// const creditCardInput = document.querySelector('#cc');
// const termsCheckbox = document.querySelector('#terms');
// const veggieSelect = document.querySelector('#veggies');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('SUBMITTED THE FORM!');
//     console.log('cc', creditCardInput.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('veggieSelect', veggieSelect.value);
//     //send form data to db
//     //append something to page using form data
// });



//Input/Change event
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggies');

const formData = {};
creditCardInput.addEventListener('input', (e) => {
    console.log('CC CHANGED!', e);
    formData['cc'] = e.target.value;
});

veggieSelect.addEventListener('input', (e) => {
    console.log('VEGGIE CHANGED!', e);
    formData['veggies'] = e.target.value;
});

termsCheckbox.addEventListener('input', (e) => {
    console.log('CHECKBOX', e);
    formData['agreedToTerms'] = e.target.checked;
});
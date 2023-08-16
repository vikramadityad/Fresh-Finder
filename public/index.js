// document.querySelector('.fresh-btn').addEventListener('click', () => {
//     window.location.href = '/freshest';
// });

const { method } = require("lodash");

document.getElementById('regform').addEventListener('submit',async()=>{
    window.location.href='/register';


    const Username=document.getElementById('Username').value;
    const Email=document.getElementById('Email').value;
    const Password=document.getElementById('Password').value;
    const Address=document.getElementById('Address').value;
    const firstName=document.getElementById('firstName').value;
    const lastName=document.getElementById('lastName').value;
    const City=document.getElementById('City').value;
    const Province=document.getElementById('Province').value;
    
    const userData= {Username, Email, Password, Address, firstName, lastName, City, Province};

    try {
        const userresponse = await fetch('/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
    });
    if (userresponse.ok){console.log('Success')}
    else(console.log('Failed'));
} catch (error) {
    console.error('Error', error);
}
});
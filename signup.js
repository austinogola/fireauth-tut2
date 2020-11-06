const signUpForm=document.querySelector('#signup-form')

signUpForm.addEventListener('submit',e=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value

    auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
        console.log(cred.user);
    })
    console.log('New User Created');
})
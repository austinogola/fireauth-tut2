const loginForm=document.querySelector('#login-form')


//login
loginForm.addEventListener('submit',e=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    
    auth.signInWithEmailAndPassword(email,password).then((cred)=>{
        console.log(cred.user);
        console.log('User Successfully logged In');
        loginForm.reset()
    })
})
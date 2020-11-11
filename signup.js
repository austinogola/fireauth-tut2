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

const logout=document.querySelector('.logout')
logout.addEventListener('click',e=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        console.log('User signed out');
    })
})


//listen for change in auth status
auth.onAuthStateChanged(user=>{
    //if logged,in user is an object.If logged out,user is null
    console.log(user);
})
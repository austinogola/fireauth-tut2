console.log('You are logged In');

const logout=document.querySelector('.logout')
logout.addEventListener('click',e=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        console.log('User signed out');
    })
})
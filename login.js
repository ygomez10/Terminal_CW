function {
   
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAk7L6BaDLERPoJ2oZdqPwuTzj1UVhdcV0",
    authDomain: "capstone-website-834e7.firebaseapp.com",
    databaseURL: "https://capstone-website-834e7.firebaseio.com",
    projectId: "capstone-website-834e7",
    storageBucket: "capstone-website-834e7.appspot.com",
    messagingSenderId: "847316514872"
  };
  firebase.initializeApp(config);

    //Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    
    //Add login event
    btnLogin.addEventListener('click', e=>{
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e=> console.log(e.message));
        
    }
} ());
    
//Add a signup event
btnSignUp.addEventListener('click', e=>{
        //Add email and password
        //TODO: Check for real email
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e=> console.log(e.message));
        
btnLogout.addEventListener('click', e=> {
    firebase.auth().signOut();
    
});       
        
        
        
//Add a real time listener
firebase.auth().onAuthStateChanged(fireBaseUser => {
            if(fireBaseUser){
                console.log(fireBaseUser);
                btnLogout.classList.remove('hide');
                
            } else {
                console.log('not logged in');
                btnLogout.classList.add('hide');
            }
        }
        
    }

const firebaseConfig = {
    apiKey: "AIzaSyB47WzOTwFKG8zYnei1C8jzM6itOey3VLU",
    authDomain: "eden-b8dcd.firebaseapp.com",
    projectId: "eden-b8dcd",
    storageBucket: "eden-b8dcd.appspot.com",
    messagingSenderId: "758300363638",
    appId: "1:758300363638:web:69c98761c12018ea504857",
    measurementId: "G-QF5V3K3XHH"
  };
  
  firebase.initializeApp(firebaseConfig);


//initialisation des variables
const auth = firebase.auth()
const database = firebase.database()


 //configuration fonction inscription
 function inscription(){
    email = document.getElementById('txtEmail')
    password = document.getElementById('txtPassword')
    nom = document.getElementById('txtNom')
    premon = document.getElementById('txtPrenom')
 

 //message erreur si utilisateur n'as pas bien rempli les forms
 if (verification_email(txtEmail) == false || (verification_password(txtPassword) == false) ||(verification_field(nom) == false || (verification_field(prenom) == false))){
    alert('Veuillez rentrez vos informations !')
    return
 }
  if (verification_email(txtEmail) == false || (verification_password(txtPassword) == false)){
    alert('Email et mot de passe incorect!')
    return
 }
 if (verification_field(nom) == false || (verification_field(prenom) == false)){
    alert('Veuillez écrire votre nom et votre prénom!')
    return
 }
 if (verification_email(txtEmail) == false){
    alert('Adresse email incorect !')
    return
 }
 if (verification_password(txtPassword) ==false){
    alert('Mot de passe doit faire plus de 6 caractères !')
    return 
 }
 if (verification_field(nom) == false){
    alert('Veuillez entrer votre nom !')
    return
 }
 if (verification_field(prenom) == false){
    alert('Veuillez entrer votre prénom !')
    return
 }




 //verification si l'email est bien construit
 function verification_email(txtEmail){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(txtEmail) ==true){
        //email est bon
        return true
    } else{
        //email mauvais
        return false
    }

 }

 //verification si mdp fait plus de 6 caractères car firebase le demande
 function verification_password(txtPassword){
    if (password < 6){
        return false
    } else {
        return true
    }
 }

 //verification si les forms sont pas vides
 function verification_field(field){
    if (field == nul){
        return false
    }

    if (field.length <= 0){
        return false
    } else {
        return true
    }

 }
}

//Authentification
auth.createUserWithEmailAndPassword(txtEmail,txtPassword)
.then(function(){

    //ajout de user sur Firebase Database
    let user = auth.currentUser
    //creation de données utilisateurs
    let database_ref = database.ref()
    let user_data = {
        email: txtEmail,
        nom: txtNom,
        prenom: tktPrenom,
        lastlogin: Date.now()
    }

    database_ref.child('users:' + user.uid).set(user_data)

})

.catch(function(error){
//Firebase alert
    let error_code = error.code 
    let error_message = error.message

    alert(error_message)
})
   



// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../LogIn/firebaseConfig'


//  export const initializeLoginInFrameWorker = () =>{

//   if(firebase.apps.length === 0){
//     firebase.initializeApp(firebaseConfig)
//   }
//   }

// export const googleBtn =()=> {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       var {displayName,email} = result.user;
//       const signInUser ={displayName,email};
//       return signInUser
     
//     }).catch((error) => {
      
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       console.log(email, errorMessage, errorCode);
//       // ...
//     });
//   }

//   export const createUserWithEmailAndPassword = (name,email,password) => {
//    return firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(res => {
//       const newUserInfo =res.user
//       console.log(res.user);
//       newUserInfo.error = '';
//       newUserInfo.success = true
//       updateUserName(name)
//       return newUserInfo
  
//     })
//      .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//   });
//   }

//   const updateUserName = name =>{
//     var user = firebase.auth().currentUser;
  
//   user.updateProfile({
//     displayName: name,
   
//   }).then(function() {
//     console.log('user name sent successfully')
//   }).catch(function(error) {
//     console.log(error)
//   });
//   }


//   export const signInWithEmailAndPassword = (email,password)=>{
//     return   firebase.auth().signInWithEmailAndPassword(email,password)
//      .then(res=>{
//        const newUserInfo = res.user;
//        newUserInfo.error = '';
//        newUserInfo.success =true
//        return newUserInfo;
       
//      })
//      .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
//      }
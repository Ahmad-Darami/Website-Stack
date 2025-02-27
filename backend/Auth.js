import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
  
const email = "Darami2022@gmail.com";

const password = "123456";

createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        //signed in 
        const user = userCredential.user;

        console.log(`User ${user.email} signed up successfully`);
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            console.error(`Error ${errorCode}: ${errorMessage}`)
        });

signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user;
    
        console.log(`User ${user.email} logged in successfully :)`);
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(`Error ${errorCode}: ${errorMessage}`);
    });

export function IsEmailInUse(email) {
    return fetchSignInMethodsForEmail(auth, email)
        .then((signInMethods) => {
            if (signInMethods.length > 0) {
                console.log(`Email ${email} is already in use.`);
                return true;
            } else {
                console.log(`Email ${email} is available.`);
                return false;
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error ${errorCode}: ${errorMessage}`);
            return false;
        });
};














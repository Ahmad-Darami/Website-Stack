import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
  

export function SignUpUser(auth,email,password) {
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
    }

export function SignIn(auth,email,password) {signInWithEmailAndPassword(auth,email,password) 
    .then((userCredential) => {
        const user = userCredential.user;
    
        console.log(`User ${user.email} logged in successfully :)`);
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(`Error ${errorCode}: ${errorMessage}`);
    });

}
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

export function LogOut() 

{handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
}









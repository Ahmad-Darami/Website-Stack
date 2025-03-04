import { auth,db } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";



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

export async function IsAdmin() {
    const user = auth.currentUser;
    if (!user) return false;
    
    const adminRef = doc(db, "admins", user.email); // Assumes admin emails are stored as document IDs
    const adminSnap = await getDoc(adminRef);
    
    return adminSnap.exists(); // Returns true if the admin document exists
    }



    




export async function SignIn(auth, email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        console.log(`User ${user.email} logged in successfully :)`);
        return user; // Now correctly returning the user
    } catch (error) {
        console.error(`Error ${error.code}: ${error.message}`);
        throw error; // Rethrow the error so `handleLogin` can catch it
    }
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









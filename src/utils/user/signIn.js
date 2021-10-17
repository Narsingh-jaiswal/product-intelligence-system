import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";

export const signIn = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userLoginCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      resolve(userLoginCredential);
    } catch (error) {
      console.log(error, "---------------");
      reject(error);
    }
  });
};

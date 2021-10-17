import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebase/firebase";

export const signup = ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        createdAt: new Date(),
        name,
        email,
        uid: userCredential.user.uid,
      };
      const response = await addDoc(collection(db, "user"), user);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export default signup;

import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/config";

export const emailAndPasswordLogin=(email, password)=>{
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    //   .then((data)=>console.log(data))
      .then( ({ user }) => {
        dispatch(login(user.uid, user.displayName));
        // console.log(user);
      });
  };
}

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    //   .then((data)=>console.log(data))
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });
        dispatch(login(user.uid, user.displayName));
        // console.log(user);
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

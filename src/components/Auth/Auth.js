import { googleProvider, rebase } from '../Base/Base.js';

export function auth(email, pw) {
    return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
        .then((data) => {
            console.log("data is", data);
            saveUser(data);
        })
}

export function logout() {
    console.log("logout clicked");
    return rebase.initializedApp.auth().signOut()
}



export function loginWithGoogle() {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
        .then((data) => {
            console.log('user data', data);
            let user = saveUser(data.user);
            return user;
        });
}


export function saveUser(user) {
    console.log("save user", user);
    return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
        .set({
            email: user.email,
            uid: user.uid,
            name: user.displayName,
            photoURL: user.photoURL
        })
        .then(() => {
            console.log("here's my user email", user.email);
            return user;
        })
}
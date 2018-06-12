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

    //ADD HERE if there is a user pull user data, if not save user
    .then((data) => {
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
            photoURL: user.photoURL,
            feelings: user.feelings || [
                { "text": "Happy", "level": 10, "icon": "happyIcon" },
                { "text": "Meh..", "level": 5, "icon": "mehIcon" },
                { "text": "Sad", "level": 1, "icon": "sadIcon" }
            ],
            activities: user.activities || [
                { "text": "Working", "icon": "/icons/white/happiness.png" },
                { "text": "Cleaning", "icon": "/icons/white/happiness.png" },
                { "text": "Yoga", "icon": "/icons/white/028-yoga.png" },
                { "text": "Exercising", "icon": "/icons/white/040-strength.png" },
                { "text": "Mountain Climbing", "icon": "/icons/white/climbing-with-rope.png" },
                { "text": "Biking", "icon": "/icons/white/bicycle-rider.png" },
                { "text": "Hiking", "icon": "/icons/white/hiking.png" },
                { "text": "Camping", "icon": "/icons/white/camping.png" },
                { "text": "Bowling", "icon": "/icons/white/bowling.png" },
                { "text": "Fishing", "icon": "/icons/white/fishing-man.png" },
                { "text": "Cleaning", "icon": "/icons/white/cleaning.png" },
                { "text": "Photography", "icon": "/icons/white/038-camera.png" },
            ],
            descriptives: user.descriptives || ["Excited", "Scared", "Lonely", "Content", "Tired", "Exhausted", "Ill", "Happy", "Anxious", "Extatic", "Proud", "Determined", "Hopeful", "Worried"],
            sleep: user.sleep || ["0 - 2 hours", "2 - 4 hours", "4 - 6 hours", "6 - 8 hours", "8 - 10 hours"],
            meds: user.meds || [
                { "brand": "Xanex", "dosage": "0.25mg" },
                { "brand": "Alprazolam", "dosage": "0.25mg" },
                { "brand": "Zoloft", "dosage": "25mg" }
            ],
            diet: user.diet || ["Very Healthy", "Average", "Not Healthy"],
            foods: user.foods || [
                { "text": "Tacos", "icon": "/icons/white/001-taco.png" },
                { "text": "Cupcakes", "icon": "/icons/white/005-cupcake.png" },
                { "text": "Pizza", "icon": "/icons/white/017-pizza.png" },
                { "text": "Noodles", "icon": "/icons/white/020-noodles.png" },
                { "text": "Pancakes", "icon": "/icons/white/018-pancakes.png" },
                { "text": "Burger", "icon": "/icons/white/045-burger-2.png" },
                { "text": "Veggie Burger", "icon": "/icons/white/046-burger-1.png" },
                { "text": "Ice Cream", "icon": "/icons/white/046-ice-cream.png" },
                { "text": "Rice", "icon": "/icons/white/rice.png" },
                { "text": "Salad", "icon": "/icons/white/salad.png" },
                { "text": "Bacon and Eggs", "icon": "/icons/white/032-eggs-and-bacon.png" },
                { "text": "Beer", "icon": "/icons/white/039-beer.png" }
            ],
            physical: user.physical || ["Very Active", "SomewhatActive", "Not Active"]
        })
        .then((data) => {
            console.log("auth user", data);
            return user;
        })
}
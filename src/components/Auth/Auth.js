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

export function buildUser(user) {

    return {
        email: user.email,
        uid: user.uid,
        name: user.displayName,
        photoURL: user.photoURL,
        feelings: user.feelings || {
            happy:{ "text": "Happy", "level": 10, "icon": "happiness" },
            meh:{ "text": "Meh..", "level": 5, "icon": "013-meh" },
            sad:{ "text": "Sad", "level": 1, "icon": "009-sad-1" }
        },
        activities: user.activities || {
            working:{ "text": "Working", "icon": "happiness" },
            cleaning:{ "text": "Cleaning", "icon": "happiness" },
            yoga:{ "text": "Yoga", "icon": "028-yoga" },
            exercising:{ "text": "Exercising", "icon": "040-strength" },
            mountainBiking:{ "text": "Mountain Climbing", "icon": "climbing-with-rope" },
            biking:{ "text": "Biking", "icon": "bicycle-rider" },
            // { "text": "Hiking", "icon": "hiking" },
            camping:{ "text": "Camping", "icon": "camping" },
            bowling:{ "text": "Bowling", "icon": "bowling" },
            fishing:{ "text": "Fishing", "icon": "fishing-man" },
            cleaning:{ "text": "Cleaning", "icon": "cleaning" },
            photography:{ "text": "Photography", "icon": "038-camera" },
        },
        descriptives: user.descriptives || {
            excited: { "text":"Excited", "level":9 },
            scared: { "text": "Scared", "level": 2 },
            lonely: { "text": "Lonely", "level": 3 },
            content: { "text": "Content", "level": 7 },
            },
        sleep: user.sleep || {
            veryLowSleep:{ "text": "0 - 2 hours", "level": 1 },
            lowSleep: { "text": "2 - 4 hours", "level": 3 },
            avgSleep: { "text": "4 - 6 hours", "level": 5 },
            highSleep: { "text": "6 - 8 hours", "level": 7 }, 
            veryHighSleep: { "text": "8 - 10 hours", "level": 10}
        },
        meds: user.meds || {
            xanex:{ "brand": "Xanex", "dosage": "0.25mg" },
            alprazolam:{ "brand": "Alprazolam", "dosage": "0.25mg" },
            zoloft:{ "brand": "Zoloft", "dosage": "25mg" }
        },
        diet: user.diet || {
            veryHealthy:{"text":"Very Healthy", level: 10},
            average:{ "text": "Average", "level":5},
            notHealthy:{ "text": "Not Healthy", "level":1 }
        },
        foods: user.foods || {
            tacos:{ "text": "Tacos", "icon": "001-taco" },
            cupcakes:{ "text": "Cupcakes", "icon": "005-cupcake" },
            pizza:{ "text": "Pizza", "icon": "017-pizza" },
            noodles:{ "text": "Noodles", "icon": "020-noodles" },
            pancakes:{ "text": "Pancakes", "icon": "018-pancakes" },
            burger:{ "text": "Burger", "icon": "045-burger-2" },
            veggieBurger:{ "text": "Veggie Burger", "icon": "046-burger-1" },
            iceCream:{ "text": "Ice Cream", "icon": "046-ice-cream" },
            rice:{ "text": "Rice", "icon": "rice" },
            salad:{ "text": "Salad", "icon": "salad" },
            baconEggs:{ "text": "Bacon and Eggs", "icon": "032-egg-and-bacon" },
            beer:{ "text": "Beer", "icon": "039-beer" }
        },
        exercise: user.exercise || {
            veryActive:{"text":"Very Active", "level": 10 },
            avgActive: { "text": "SomewhatActive", "level": 10 },
            notActive: { "text":"Not Active", "level": 3}
        }
    }
}


export function loginWithGoogle() {

    return rebase.initializedApp.auth().signInWithPopup(googleProvider)

        //ADD HERE if there is a user pull user data, if not save user
        .then((data) => {
            let ref = rebase.initializedApp.database().ref(`users/${data.user.uid}`)
            return ref.once('value')
                .then(snapshot => {
                    console.log("ref", snapshot.val())
                    let value = snapshot.val()
                    if (value) {
                        return value
                    } else {
                        return saveUser(ref, data.user)
                    }

                })
        });
}


export function saveUser(ref, user) {
    
        ref.set(buildUser(user))
        return buildUser(user)
}
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBYhd6tynSFrHDVQ_c4Cv5OQh9ofc0qHzs",
    authDomain: "fir-sample-e961a.firebaseapp.com",
    projectId: "fir-sample-e961a",
    storageBucket: "fir-sample-e961a.appspot.com",
    messagingSenderId: "928393098919",
    appId: "1:928393098919:web:cb986fd09746fb4728cd82"
};

firebase.initializeApp(firebaseConfig)

export const getAllDataInCollection = async () => {
    const testData = (await firebase.firestore().collection("todos").get()).docs.map(e => {
        const { text, done } = e.data()
        return {
            key: e.id,
            text, done
        }
    })
    return testData
}

export const addNewDataInCollection = async (data) => {
    await firebase.firestore().collection("todos").add(data)
}

export const updateItemFirebase = async (data) => {
    await firebase.firestore().collection("todos").doc(data.key).update(data)
}

export const deleteAllItemsFirebase = async (listIds) => {
    await Promise.all(listIds.map(async e => {
        await firebase.firestore().collection("todos").doc(e).delete()
    }))
} 
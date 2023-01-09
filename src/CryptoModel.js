import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from "@/firebaseModel.js";
import { db } from "./firebaseModel"
import { doc, setDoc, getDocs, collection, getDoc} from "firebase/firestore";

class CryptoModel {
    constructor() {
        this.accounts = {};
        this.currentCrypto = undefined;
        this.currentLoggedInUser = undefined;
        this.currentUser = undefined;
        this.correctLogInInfo = false;
        this.favCryptos =[];
    }

    async getFavoritesFromFirestore(emailKey) {
        const docRef = doc(db, "favorites", emailKey);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            this.favCryptos = docSnap.data().crypto;
            console.log("yes")
        }
    }

    saveFavoriteCrypto(cryptoName){
        if (!this.favCryptos.includes(cryptoName)) {
            this.favCryptos.push(cryptoName)
            setDoc(doc(db, "favorites", this.currentLoggedInUser), {
                crypto:  this.favCryptos
            })
            return true;
        }
        return false;
    }



    removeFavoriteCrypto(cryptoName) {
        function getIndex(cryptoToRemove) {
            return cryptoToRemove === cryptoName
        }

        if (this.favCryptos.includes(cryptoName)) {
            let indexToRemove = this.favCryptos.findIndex(getIndex)
            if (indexToRemove === this.favCryptos.length -1) {
                this.favCryptos.pop()
            }
            else {
                this.favCryptos[indexToRemove] = this.favCryptos.pop()
            }
            const cryptoRef = doc(db, "favorites", this.currentLoggedInUser);
            setDoc(cryptoRef, {
                crypto:  this.favCryptos
            })
            return false;
        }
        return true;
    }


    async getAccountList() {
        let data = []
        await getDocs(collection(db, "Users")).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                data.push({ ...doc.data(), id:doc.id })
            })
            this.accounts = data;
        })
    }

    setCurrentCrypto(id) {
        this.currentCrypto = id;
    }

    setCurrentUser(email) {
        this.currentUser = email;
    }

    setAccountDetails(email, password){
        async function addAccountToFirestore(data) {
            await setDoc(doc(db, "Users", data.user.uid), {email: data.user.email})
            await setDoc(doc(db, "favorites", email), {
                crypto: []
            })
        }

        createUserWithEmailAndPassword(getAuth(), email, password).then(addAccountToFirestore).catch((error) => {
            alert(error.message);
        })
    }

    logIn(email, password){
        this.correctLogInInfo = true;
        signInWithEmailAndPassword(getAuth(), email, password).then((data) => {
            this.currentUserUID = data.user.uid;
        }).catch((error) => {
            this.correctLogInInfo = false;
            switch (error.code){
                case "auth/invalid-email":
                    alert("Invalid email!");
                    break;
                case "auth/user-not-found":
                    alert("Account does not exist!");
                    break;
                case "auth/wrong-password":
                    alert("Invalid password!");
                    break;
                default:
                    alert("Email or password invalid!");
                    break;
            }
        }).then(() => {
            if (this.correctLogInInfo){
                this.currentLoggedInUser = email;
            }
        })
    }

    removeCryptoToFavorites(cryptoToRemove) {
        function getIndex(crypto) {
            return crypto === cryptoToRemove
        }
        if (Object.values(this.accounts[this.currentLoggedInUser]['cryptos']).includes(cryptoToRemove)) {
            let indexToRemove = this.accounts[this.currentLoggedInUser]['cryptos'].findIndex(getIndex)
            if (indexToRemove === this.accounts[this.currentLoggedInUser]['cryptos'].length - 1) {
                this.accounts[this.currentLoggedInUser]['cryptos'].pop()
            }
            else {
                this.accounts[this.currentLoggedInUser]['cryptos'][indexToRemove] =  this.accounts[this.currentLoggedInUser]['cryptos'].pop()
            }
            return false;
        }
        return true;

    }

    logout() {
        this.currentLoggedInUser = undefined;
        this.currentUser = {};
    }
    addCryptoToFavorites(cryptoToAdd) {
        if (!Object.values(this.accounts[this.currentLoggedInUser]['cryptos']).includes(cryptoToAdd)) {
            this.accounts[this.currentLoggedInUser]['cryptos'].push(cryptoToAdd)
            return true;
        }
        return false;
    }

}

export default CryptoModel;
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from "@/firebaseModel.js";
import { db } from "./firebaseModel"
import { doc, setDoc } from "firebase/firestore";

class CryptoModel {
    constructor() {
        this.accounts = {};
        this.currentCrypto = undefined;
        this.currentLoggedInUser = undefined;
        this.currentUser = {};
        this.correctLogInInfo = false;
        this.currentUserUID = {};
        this.favCryptos =[];
    }

    saveFavoritesCrypto(cryptoName){
        this.favCryptos.push(cryptoName)
        setDoc(doc(db, "favoriter", this.currentUserUID), {
            crypto:  this.favCryptos
        }).then(r => console.log(r));
        return true;
    }



    setCurrentCrypto(id) {
        this.currentCrypto = id;
    }

    setCurrentUser(username) {
        this.currentUser = username;
    }

    setAccountDetails(email, password){
        createUserWithEmailAndPassword(getAuth(), email, password).then((data) => {
        }).catch((error) => {
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
        this.currentLoggedInUser = false;
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
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from "@/firebaseConfig.js";
class CryptoModel {
    constructor() {
        this.accounts = {};
        this.currentCrypto = undefined;
        this.currentLoggedInUser = undefined;
        this.currentUser = undefined;
    }

    setCurrentCrypto(id) {
        this.currentCrypto = id;
    }

    setCurrentUser(username) {
        this.currentUser = username;
    }

    setAccountDetails(email, password){
        createUserWithEmailAndPassword(getAuth(), email, password).then((data) => {
            console.log("Successfully accountCreated in!");
        }).catch((error) => {
            console.log("Error occurred!");
            console.log(error.code);
            //alert(error.message);
        })
    }

    logIn(email, password){
        signInWithEmailAndPassword(getAuth(), email, password).then((data) => {
        }).catch((error) => {
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
            this.currentLoggedInUser = true;
            this.currentUser = email;
        })
    }


    createAccount(email, password) {

    }

    attemptLogin(email, password) {


    }

    logout() {
        this.currentLoggedInUser = undefined;
    }
    addCryptoToFavorites(cryptoToAdd) {
        if (!Object.values(this.accounts[this.currentLoggedInUser]['cryptos']).includes(cryptoToAdd)) {
            this.accounts[this.currentLoggedInUser]['cryptos'].push(cryptoToAdd)
            return true;
        }
        return false;
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
}

export default CryptoModel;
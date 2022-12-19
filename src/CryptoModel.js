import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

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
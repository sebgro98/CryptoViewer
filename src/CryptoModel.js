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
        createUserWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
            console.log("Successfully registered!");
            return true;
        }).catch((error) => {
            console.log("Error occurred!");
            console.log(error.code);
            alert(error.message);
            return false;
        })
        console.log("test2");
    }

    attemptLogin(email, password) {
        console.log("email when login:")
        console.log(email);

        signInWithEmailAndPassword(getAuth(), email, password).then((data) => {
            console.log("Successfully logged in!");
            this.currentLoggedInUser = true;
            this.currentUser = email;
            return true;
        }).catch((error) => {
            console.log("Error occurred!");
            console.log(error.code);
            /*switch (error.code){
                case "auth/invalid-email":
                    errorMessage.value = "Invalid email!";
                    break;
                case "auth/user-not-found":
                    errorMessage.value = "Account does not exist!";
                    break;
                case "auth/wrong-password":
                    errorMessage.value = "Invalid password!";
                    break;
                default:
                    errorMessage.value = "Email or password invalid!";
                    break;
            }*/
            alert(error.message);
            return false;
        })

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
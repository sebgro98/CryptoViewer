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

    createAccount(username, password) {
        username = username.toLowerCase()
        if (this.accounts[username]) return false;
        this.accounts[username] = {password}
        this.accounts[username]['cryptos'] = [];
        return true;
    }

    attemptLogin(username, password) {
        username = username.toLowerCase();
        if (this.accounts[username] && this.accounts[username]['password'] === password) {
            this.currentLoggedInUser = username;
            return true;
        }
        return false;
    }

    logout() {
        this.currentLoggedInUser = undefined;
    }
    addCryptoToFavorites(cryptoToAdd) {
        console.log(this.accounts)
        if (!Object.values(this.accounts[this.currentLoggedInUser]['cryptos']).includes(cryptoToAdd)) {
            this.accounts[this.currentLoggedInUser]['cryptos'] = [...this.accounts[this.currentLoggedInUser]['cryptos'], cryptoToAdd]
            return true;
        }
        return false;
    }

    removeCryptoToFavorites(cryptoToRemove) {
        function findIndex(crypto) {
            return crypto[1] !== cryptoToRemove
        }
        if (Object.values(this.accounts[this.currentLoggedInUser]['cryptos']).includes(cryptoToRemove)) {
            this.accounts[this.currentLoggedInUser]['cryptos'] = Object.fromEntries(Object.entries(this.accounts[this.currentLoggedInUser]['cryptos']).filter(findIndex))
            return false;
        }
        return true;

    }
}

export default CryptoModel;
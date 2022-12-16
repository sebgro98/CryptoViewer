class CryptoModel{
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
       this.accounts[username]['cryptos'] = {};
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
       function cryptoInFavoritesCB(crypto) {
           return crypto === cryptoToAdd;
       }

       if(!this.accounts[this.currentLoggedInUser]['cryptos']) {
           this.accounts[this.currentLoggedInUser]['cryptos'] = [cryptoToAdd];
       }
       else {
           if (this.accounts[this.currentLoggedInUser]['cryptos'].find(cryptoInFavoritesCB)) return;
           this.accounts[this.currentLoggedInUser]['cryptos'] = [...this.accounts[this.currentLoggedInUser]['cryptos'], cryptoToAdd]
       }
   }
}

export default CryptoModel;
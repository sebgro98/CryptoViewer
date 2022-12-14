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
       if (this.accounts[username]) return false;
       this.accounts[username] = {password}
       return true;
   }

   attemptLogin(username, password) {
       if (this.accounts[username] && this.accounts[username]['password'] === password) {
           this.currentLoggedInUser = username;
           return true;
       }
       return false;
   }
   logout() {
       this.currentLoggedInUser = undefined;
   }
}

export default CryptoModel;
class CryptoModel{
   constructor() {
       this.accounts = {};
       this.searchResultsPromiseState = {};
       this.searchQuery = {};
       this.currentCryptoPromiseState = {};
   }

    setSearchQuery(query) {
        this.searchQuery = query;
    }

   setCurrentCrypto(id) {
       this.currentCrypto = id;
   }
}

export default CryptoModel;
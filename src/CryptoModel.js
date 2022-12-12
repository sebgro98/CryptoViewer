import resolvePromise from "./resolvePromise";
import {searchCryptos} from "./cryptoSource";

class CryptoModel{
   constructor() {
       this.accounts = {};
       this.searchResultsPromiseState = {};
       this.searchQuery = {};
       this.currentCryptoPromiseState = {};
   }

   setCurrentCrypto(id) {
       if (this.currentCrypto === id || id === undefined) return;
       this.currentCrypto = id;
       resolvePromise('', this.currentCryptoPromiseState)
   }

   doSearch(query) {
       resolvePromise(searchCryptos(query), this.searchResultsPromiseState);
   }

   setSearchQuery(query) {
       this.searchQuery = query;
   }

}

export default CryptoModel;
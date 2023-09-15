const { createContext, useContext } = require("react");

function Store() {
    this.categoryStore = null;
    this.storeStore = null;
    this.bookStore = null;
    this.supplierStore = null;
    this.commonStore = null;
    this.orderStore = null;
    this.stockStore = null;
    this.usersStore = null;
    this.roleStore = null;
    this.reviewStore = null;
    this.audioBookStore = null;
    this.blogStore = null;
    this.saleStore = null;
    this.staffStore = null;
    this.novelStore = null;
    this.reportStore = null;
}

const store = new Store();

const StoreContext = createContext(store);

function useStore() {
    return useContext(StoreContext);
}

module.exports = { store, StoreContext, useStore };

import { makeAutoObservable } from "mobx";
// Using MobX Store for State Management instead of Redux
class AppStore {
  searchedPlace = "";
  apiResult = {};
  constructor() {
    makeAutoObservable(this);
  }
  setSearchedPlace = (data) => {
    this.searchedPlace = data;
  };
  setapiResult = (data) => {
    this.apiResult = { ...this.apiResult, data };
  };
}

export default new AppStore();

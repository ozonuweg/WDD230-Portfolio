export default class localStorageHelper {
  constructor(storage = localStorage) {
      this.storage = storage;
  }
  load(name) {
      return this.storage.getItem(name);
  }
  writeToLS(name, info) {
      this.storage.setItem(name, info);
  }
}
'use strict'


class Book {

};

class CD {

};

class Movie {

}

class Media {
  constructor(image){
    this._title = '',
    this._ratings = [],
    this._isCheckedOut = false
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  get title() {
    return this._title;
  } 

  toggleCheckOutStatus(){
    if(this._isCheckedOut = !this._isCheckedOut) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  getAverageRating(){
    return 
  }
  set isCheckedOut() {

  }
}


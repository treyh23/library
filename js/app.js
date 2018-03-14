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

}


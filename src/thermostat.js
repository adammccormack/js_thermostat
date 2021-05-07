'use strict';

class Thermostat{
  constructor() {
    this.temp = 20;
    this.MIN_TEMP = 10;
  }

  currentTemp() {
    return this.temp;
  }

  increaseTemp() {
    return (this.temp += 1);
  }

  decreaseTemp() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1
  }

  isMinTemp () {
    return (this.temp === this.MIN_TEMP);
  }

}

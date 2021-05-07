'use strict';

class Thermostat{
  constructor() {
    this.temp = 20;
    this.mintemp = 10;
  }

  currentTemp() {
    return this.temp;
  }

  increaseTemp() {
    return (this.temp += 1);
  }

  decreaseTemp() {
    return (this.temp -= 1);
  }

  minTemp() {
    return this.mintemp;
  }

}

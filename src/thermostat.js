'use strict';

class Thermostat{
  constructor() {
    this.temp = 20;
  }

  currentTemp() {
    return this.temp;
  }

  increaseTemp() {
    return (this.temp += 1);
  }
}

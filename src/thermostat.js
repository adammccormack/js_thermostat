'use strict';

class Thermostat{
  constructor() {
    this.temp = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP = 25;
    this.power_save = null;
  }


  powerSaveOn() {
    return (this.power_save = true);
  }

  powerSaveOff() {
    return (this.power_save = false);
  }

  currentTemp() {
    return this.temp;
  }

  increaseTemp() {
    if (this.isMaxTemp()) {
      return;
    }
    return (this.temp += 1);
  }

  decreaseTemp() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1;
  }

  isMinTemp () {
    return (this.temp === this.MIN_TEMP);
  }

  isMaxTemp () {
    return (this.temp === this.MAX_TEMP);
  }

}

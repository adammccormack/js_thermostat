'use strict';

class Thermostat{
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temp = this.DEFAULT_TEMP;
    this.MIN_TEMP = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.powerSave = true;
    this.LOW_ENERGY_USAGE = 18;
    this.MEDIUM_ENERGY_USAGE = 25;
  }

  currentTemp() {
     return this.temp;
  }

  increaseTemp() {
    if (this.isMaxTemp()) {
      return;
    }
    this.temp += 1;
  }

  decreaseTemp() {
    if (this.isMinTemp()) {
      return;
    }
    this.temp -= 1;
  }

  isMinTemp () {
    return this.temp === this.MIN_TEMP;
  }

  isMaxTemp () {
    if (this.isPowerSaveOn() === false) {
      return this.temp === this.MAX_TEMP_PSM_OFF;
    }
    
    return this.temp === this.MAX_TEMP_PSM_ON;
  }

  isPowerSaveOn() {
    return this.powerSave === true
  };

  powerSaveOn() {
    //console.log("Power saving on")
    this.powerSave = true;
  }

  powerSaveOff() {
    //console.log("Power saving off")
    this.powerSave = false;
  }


  resetTemp() {
    this.temp = this.DEFAULT_TEMP;
  }

  

  

  energyReading() {
    if (this.temp <= this.LOW_ENERGY_USAGE) {
      return 'low';
    }
    if (this.temp <= this.MEDIUM_ENERGY_USAGE) {
      return 'medium';
    }
      return 'high';
  }
}

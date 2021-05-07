'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases temperature', () => {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases temperature', () => {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('sets min temp at 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('turns on power saving mode', () => {
    expect(thermostat.powerSaveOn()).toBe(true);
  });

  it('turns off power saving mode', () => {
    expect(thermostat.powerSaveOff()).toBe(false);
  });

});

'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('power save mode is on by default', () => {
    expect(thermostat.power_save).toBe(true)
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

  describe('when power saving mode is on', () => {
    it('has a maximum temperature of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
  });

  it('resets temperature to 20', () => {
    thermostat.resetTemp();
    expect(thermostat.currentTemp()).toEqual(20);
  });

});

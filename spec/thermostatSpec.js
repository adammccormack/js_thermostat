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
    expect(thermostat.minTemp()).toEqual(10);
  });

  it('power saving mode on', () => {
    expect(powerSavingmode).toEqual(true);
  });


});

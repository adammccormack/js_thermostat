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


});

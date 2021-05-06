'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });
});

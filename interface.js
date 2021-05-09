'use strict'

var thermostat = new Thermostat;

document.querySelector('#temperature-up').addEventListener('click', () => { // event listener
  thermostat.increaseTemp(); // update model
  document.querySelector('#temperature').innerText = thermostat.temp; // update view
})

document.querySelector('#temperature-down').addEventListener('click', () => { // event listener
  thermostat.decreaseTemp(); // update model
  document.querySelector('#temperature').innerText = thermostat.temp; // update view
})

document.querySelector('#temperature-reset').addEventListener('click', () => { // event listener
  thermostat.resetTemp(); // update model
  document.querySelector('#temperature').innerText = thermostat.temp; // update view
})

document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSaveOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    document.querySelector('#temperature').innerText = thermostat.temp;
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
      thermostat.powerSaveOff();
      document.querySelector('#power-saving-status').innerText = 'on';
      document.querySelector('#temperature').innerText = thermostat.temp;
    })

    const updateTemperature = () => {
  document.querySelector('#temperature').innerText = thermostat.temp;
  if (thermostat.energyReading() === 'low') {
    document.querySelector('#temperature').style.color = 'green';
  } else if (thermostat.energyReading() === 'medium') {
    document.querySelector('#temperature').style.color = 'black';
  } else {
    document.querySelector('#temperature').style.color = 'red';
  }
}

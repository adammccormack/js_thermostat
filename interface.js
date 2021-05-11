'use strict'
document.addEventListener("DOMContentLoaded", function() {

  function updateTemperature() {
    document.querySelector('#temperature').innerText = thermostat.temp;
    document.querySelector('#temperature').className = thermostat.energyReading();
  };
  const thermostat = new Thermostat;
  updateTemperature()

  document.querySelector('#temperature-up').addEventListener('click', () => { // event listener
    thermostat.increaseTemp(); // update model
    updateTemperature()
  })

  document.querySelector('#temperature-down').addEventListener('click', () => { // event listener
    thermostat.decreaseTemp(); // update model
    updateTemperature()
  })

  document.querySelector('#temperature-reset').addEventListener('click', () => { // event listener
    thermostat.resetTemp(); // update model
    updateTemperature()
  })

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.powerSaveOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.powerSaveOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  })

      
  
})
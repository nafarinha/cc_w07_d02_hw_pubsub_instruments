PubSub = require('../helpers/pub_sub.js');

const SelectView = function(dropdownElement){
  this.dropdownElement = dropdownElement;
};

SelectView.prototype.populate = function(instrumentsData){
  instrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments', (evt) => {
    const allInstruments = evt.detail;
    this.populate(allInstruments);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

module.exports = SelectView;

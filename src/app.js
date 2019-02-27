const InstrumentFamilies = require('./models/instrument_families.js');
const instrumentFamiliesData = require('./data/instrument_family_Data.js');
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', function(){
  console.log('JavaScript Loaded');

  const instrumentFamiliesDataModel = new InstrumentFamilies(instrumentFamiliesData);

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);

  instrumentFamiliesDataModel.bindEvents();



});

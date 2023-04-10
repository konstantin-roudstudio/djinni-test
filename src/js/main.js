import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import dataLoader from './modules/dataLoader';
import readMore from './modules/readMore';
// import textObserver from './modules/textObserver';

window.onload = function () {
  dataLoader();
  readMore();
  // textObserver();
};

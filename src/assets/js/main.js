/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
/**
 * Write any other JavaScript below
 */





//Cargar script de FontAwesome
const fontAwesomeScript = document.createElement('script');

fontAwesomeScript.src = 'https://kit.fontawesome.com/63639a8bc8.js';
fontAwesomeScript.crossOrigin = 'anonymous';

document.body.appendChild(fontAwesomeScript);
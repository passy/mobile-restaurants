// load right before require.js
// need to unset the dummy require, otherwise real require.js would not export

window.require = undefined;
window.define = undefined;

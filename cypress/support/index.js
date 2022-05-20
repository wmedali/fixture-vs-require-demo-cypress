import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("uncaught:exception", (err, runnable) => {
  let errString = err.toString();
  if (errString.includes("ABCD")) return true;
  else return false;
});

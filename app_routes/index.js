// ==============
// === IMPORT ===
// ==============
const router = require("express").Router();


// ==============
// === EXPORT ===
// ==============
module.exports = function(app_info){
  
  // --- ROOT ROUTE ---
  router.use("/", require("./home")(app_info));

  // --- SOME ROUTE ---
  router.use("/someroute", require("./some_route")(app_info));

  // --- RETURN ROUTES ---
  return router;
}

var interval = process.env.Q_DIAGNOSTIC_INTERVAL || 60; 

module.exports = function q_diagnostics(Q) {

  setInterval(function() {
    var ur = Q.getUnhandledReasons(),
        count = "### Q.getUnhandledReasons: " + ur.length;
    ur.length ? console.error(count) : console.log(count);
    ur.forEach(function(err){
      console.error("  # reason: " + err.stack ? err.stack : err);
    });
    Q.resetUnhandledRejections();
  }, 60 * 1000 * interval); // check/clear every 60 minutes (if not otherwise set)

};

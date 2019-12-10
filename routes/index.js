var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var printers = {"printers": [
                              {"printer": "Alutaguse vald", "tava1":"0,05 €", "tava2":"0,07 €", "tava3":"0,1 €", "tava4":"0,1 €", "collapseID":"printer1"},
                              {"printer": "Läti kuningas", "tava1":"0,05 €", "tava2":"0,07 €", "tava3":"0,1 €", "tava4":"0,1 €", "collapseID":"printer2"},
                              {"printer": "Kole koht", "tava1":"0,05 €", "tava2":"0,07 €", "tava3":"0,1 €", "tava4":"0,1 €", "collapseID":"printer3"},
                              {"printer": "Maja taga", "tava1":"0,05 €", "tava2":"0,07 €", "tava3":"0,1 €", "tava4":"0,1 €", "collapseID":"printer4"}
                  ],
                  "hind" : [
                            {"tavahind": "0.05", "soodus1": "0.03", "soodus2":"0.01"},
                            {"tavahind": "0.05", "soodus1": "0.03", "soodus2":"0.01"},
                            {"tavahind": "0.05", "soodus1": "0.03", "soodus2":"0.01"},
                            {"tavahind": "0.05", "soodus1": "0.03", "soodus2":"0.01"}
                  ],
                  "scan_tavahind": "0.05",
                  "scan_soodus1": "0.03",
                  "scan_soddus2": "0.01"
                };

  res.render("main.html", printers);
});

module.exports = router;

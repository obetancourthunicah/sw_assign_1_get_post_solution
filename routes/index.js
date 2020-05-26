var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
  Completar la Asignatura Aquí
  \/\/\/\/\/\/\/\/\/\/\/\/\/\/
 */

router.get('/calculator', function(req, res){
  res.render('calculator', {});
}); //get calculator

router.post('/calculator', function(req, res){
  var fltNum1 = parseFloat(req.body.fltNum1) || 0;
  var fltNum2 = parseFloat(req.body.fltNum2) || 0;
  var cmbOperacion = req.body.cmbOperacion || 'add';
  var strResultado = '';
  var adds, subs, mlts, divs = '';
  switch (cmbOperacion) {
    case 'add':
      adds = 'selected';
      strResultado = `La suma de ${fltNum1} y ${fltNum2} es igual ${(fltNum1 + fltNum2)}`;
      break;
    case 'sub':
      subs = 'selected';
      strResultado = `La resta de ${fltNum1} y ${fltNum2} es igual ${(fltNum1 - fltNum2)}`;
      break;
    case 'mlt':
      mlts = 'selected';
      strResultado = `El producto de ${fltNum1} y ${fltNum2} es igual ${(fltNum1 * fltNum2)}`;
      break;
    case 'div':
      divs = 'selected';
      if (fltNum2 != 0) {
        strResultado = `La división de ${fltNum1} y ${fltNum2} es igual ${(fltNum1 / fltNum2)}`;
      } else {
        strResultado = `No se puede dividir por cero`;
      }
      break;
  }
  // JSON tradicional ES5
  var viewData = {
    "fltNum1": fltNum1,
    "fltNum2": fltNum2,
    "adds": adds,
    "subs": subs,
    "mlts": mlts,
    "divs": divs,
    "strResultado" : strResultado
  };


  // JSON usando ES6 y constructores
  var viewData2 = {
    fltNum1,
    fltNum2,
    adds,
    subs,
    mlts,
    divs,
    strResultado
  }
  res.render('calculator', viewData2);

}); //post calculator
/*
  /\/\/\/\/\/\/\/\/\/\/\/\/\/\
*/

module.exports = router;

var assert = require('assert');
var rewire = require('rewire');

//Get load in the js
var javascript = rewire('../99999-fk4fj2rv22/v0.0.2/model/resource/getrecommendation.js');

//Load in the function
var tester = javascript.__get__("getrecommendation");


var testset = [
  {"input":{"labtest":"vte", "testresult":true},"output":"recs" },
  {"input":{"labtest":"vte", "testresult":false},"output":"recs" }
]

describe('99999-fk4fj2rv22 v0.0.2', function () {

  describe('Valid inputs', function(){

    testset.forEach(function(e, index){

      it(e.input.labtest+" "+e.input.testresult, function(){
        var result = JSON.parse(tester(e.input))
        assert.equal(e.input.testresult, result[e.output].length==1);
      });

    })

  });

  describe('Invalid inputs', function(){

    it('fields missing', function(){
      var result = tester({})
      assert.equal('Invalid input.', result);
    })

    it('incorrect labtest', function(){
      var result = tester({"labtest":"ana", "testresult":true})
      assert.equal('Incorrect labtest.', result);
    })

    it('unexpected testresult', function(){
      var result = tester({"labtest":"vte", "testresult":"truer"})
      assert.equal(true, result.startsWith('Unexpected Lab Test Result'));
    })

    it('no input', function(){
      var result = tester()
      assert.equal('Error', result);
    })

  });

});

var assert = require('assert');
var rewire = require('rewire');

//Get load in the js
var javascript = rewire('../99999-fk4b85k02x/v0.0.2/model/resource/getrecommendation.js');

//Load in the function
var tester = javascript.__get__("getrecommendation");


var testset = [
  {"input":{"labtest":"ana", "anatestresult":true, "imdtestresult":true},"output":"recs" },
  {"input":{"labtest":"ana", "anatestresult":true, "imdtestresult":false},"output":"recs" }
]

describe('99999-fk4b85k02x v0.0.2', function () {

  describe('Valid inputs', function(){

    testset.forEach(function(e, index){

      it(e.input.labtest+"- ANA:"+e.input.anatestresult+" & IMD:"+e.input.imdtestresult, function(){
        var result = JSON.parse(tester(e.input))
        // console.log(index+" ==>"+result.recs)
        assert.equal(e.input.imdtestresult, result[e.output].length==0);
      });

    })

  });

  describe('Invalid inputs', function(){

    it('fields missing', function(){
      var result = tester({})
      assert.equal('Invalid input.', result);
    })

    it('incorrect labtest', function(){
      var result = tester({"labtest":"vte", "anatestresult":true, "imdtestresult":true})
      assert.equal('Incorrect labtest.', result);
    })

    it('no input', function(){
      var result = tester()
      assert.equal('Error', result);
    })

  });

});

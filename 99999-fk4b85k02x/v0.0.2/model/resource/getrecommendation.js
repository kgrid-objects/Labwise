var recList = [ { 'labtest': 'ana', 'testresult': true, 'status':'Positive ANA and clinical suspicion of immune-mediated disease',
                  'recs': [ ], 'source':'American College of Rheumatology',
                  'link':'http://www.choosingwisely.org/clinician-lists/american-college-rheumatology-ana-sub-serologies-without-positive-ana-and-clinical-suspicion/'},
                { 'labtest': 'ana', 'testresult':false, 'status':'No positive ANA or clinical suspicion of immune-mediated disease',
                  'recs': [{'text':'DO NOT order tests for anti-nuclear antibody (ANA) sub-serologies (including antibodies to double-stranded DNA, Smith, RNP, SSA, SSB, Scl-70, centromere).'}],
                  'source':'American College of Rheumatology',
                  'link':'http://www.choosingwisely.org/clinician-lists/american-college-rheumatology-ana-sub-serologies-without-positive-ana-and-clinical-suspicion/'} ];
var expectedlabtest = 'ana'

function getrecommendation(inputs){
  // console.log(inputs)
  var val = null
  try {
    var labtest = inputs['labtest'] || ''
    var anaresult = inputs['anatestresult']
    var imdresult = inputs['imdtestresult']
    if ((labtest != '') && (anaresult != null) && (imdresult!=null)) {
      if (labtest == expectedlabtest ) {
        recList.forEach(function (e) {
            // console.log(anaresult + " "+imdresult+"    "+e.testresult)
          if (e.testresult == (anaresult && imdresult)) {
            val = e
          }
        })
        if (val != null) {
          return JSON.stringify(val)
        } else {
          return 'Unexpected Lab Test Result'
        }
      } else {
        return 'Incorrect labtest.'
      }
    } else {
      return 'Invalid input.'
    }
  } catch (error) {
    return 'Error'
  }
}

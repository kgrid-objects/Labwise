var recList = [ { 'labtest':'tsh', 'testresult':true, 'status':'A test result was reported within six months.',
                  'recs': [ {'text':'DO NOT order TSH Level Test.'}], 'source':'American Society for Clinical Pathology',
                  'link':'http://www.choosingwisely.org/clinician-lists/american-society-clinical-pathology-suspected-thyroid-disease-evaluation/'},
                { 'labtest':'tsh', 'testresult':false, 'status':'No abnormal TSH test result was reported.',
                  'recs': [ {'text':'DO NOT Order T3 Level Test.'},
                            {'text':'DO NOT Order T4 Level Test.'},
                            {'text':'DO NOT Order free T4 Level Test.'} ],
                  'source':'American Society for Clinical Pathology',
                  'link':'http://www.choosingwisely.org/clinician-lists/american-society-clinical-pathology-suspected-thyroid-disease-evaluation/'}
               ];

var expectedlabtest = 'tsh'
function getrecommendation (inputs) {
  var val = null
  try {
    var labtest = inputs['labtest'] || ''
    var testresult = inputs['testresult']
    if ((labtest != '') && (testresult != null)) {
      if (labtest == expectedlabtest ) {
        recList.forEach(function (e) {
          if (e.testresult == testresult) {
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

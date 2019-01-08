var recList = [ { 'labtest': 'vte', 'testresult': true, 'status': 'Major transient risk factors are present for the patient',
  'recs': [ {'text': 'DO NOT order Thrombophilia Level Test.'}],
  'source': 'American Society of Hematology',
  'link': 'http://www.choosingwisely.org/clinician-lists/american-society-hematology-testing-for-thrombophilia-in-adults/'},
  { 'labtest': 'vte', 'testresult': false, 'status': 'No major transient risk factors',
    'recs': [], 'source': 'American Society of Hematology',
    'link': 'http://www.choosingwisely.org/clinician-lists/american-society-hematology-testing-for-thrombophilia-in-adults/'}
]
var expectedlabtest = 'vte'
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

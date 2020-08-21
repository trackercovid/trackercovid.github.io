export function tableMaker (array) {

	document.querySelector('tbody').remove()
	let newTbody = document.createElement('tbody')
	document.querySelector('table').append(newTbody)

	array.forEach(e => {
		let tr = document.createElement('tr')

		let tdName = document.createElement('td')
		let tdTotal = document.createElement('td')
		let tdActive = document.createElement('td')
		let tdRec = document.createElement('td')
		let tdNewCovid = document.createElement('td')
		let tdTests = document.createElement('td')
		let tdDeaths = document.createElement('td')


		let txtName = document.createTextNode(e.country)
		let txtTotal = document.createTextNode(e.cases.total)
		let txtAct = document.createTextNode(e.cases.active)
		let txtRec = document.createTextNode(e.cases.recovered)
		let txtNewCase = document.createTextNode(e.cases.new)
		let txtTests = document.createTextNode(e.tests.total)
		let txtDeaths = document.createTextNode(e.deaths.total)

		newTbody.append(tr)

		tr.append(tdName)
		tr.append(tdTotal)
		tr.append(tdActive)
		tr.append(tdRec)
		tr.append(tdNewCovid)
		tr.append(tdTests)
		tr.append(tdDeaths)

		tdName.append(txtName)
		tdTotal.append(txtTotal)
		tdActive.append(txtAct)
		tdRec.append(txtRec)
		tdNewCovid.append(txtNewCase)
		tdTests.append(txtTests)
		tdDeaths.append(txtDeaths)
	})
}
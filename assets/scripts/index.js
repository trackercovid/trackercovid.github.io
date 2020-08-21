import { tableMaker } from './helper.tableMaker.js'
import { constants } from './constants.js'

fetch(constants.url , {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "f69da9f58cmsh14d3c68f57938d9p12d268jsn7c2c8a19d877"
	}
})
.then(response => response.json())
.then(data => {
	tableMaker(data.response)
	console.log(data.response)
})


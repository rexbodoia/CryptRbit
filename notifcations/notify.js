const https = require("https");




const runNotifications = (url) => {
  
//     // what call back am I going to run?

    setInterval(cb,1hr) {

    }

    const getData = () => {
        //some type of http req/res to API
        const top10url = "https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=10"
        const coins = getAPIData(top10url);
        const exchangesUrl = "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${fsym}&tsym=${tsym}&limit=${limit}"


        const processData = () => {
            //filter and reshape - need coin, %d if greater than minimum set on notifications
            return processedData;
        }
        return processedData;
    }

   

    const checkIfNotifyAnyUser = (processedData) => {
        //get collection from db
        const getNotifications = () => { return list}

        //and compare the processed data by coin and %d
        const compareListAndData = (processedData, list) => {
            const sendEmailIfThreshold = () => {
                //get user email and then fire email notification template off
            }



        }

    }

    
    


}





//http get request:
const getAPIData = (url) => { https.get(
    url,
    res => {
        const { statusCode } = res;
        const contentType = res.headers["content-type"];

        let error;
        if (statusCode !== 200) {
            error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error(
                "Invalid content-type.\n" +
                `Expected application/json but received ${contentType}`
            );
        }
        if (error) {
            console.error(error.message);
            // consume response data to free up memory
            res.resume();
            return;
        }

        res.setEncoding("utf8");
        let rawData = "";
        res.on("data", chunk => {
            rawData += chunk;
        });
        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);
                console.log(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    }
).on("error", (e) => {
    console.error(`Got error: ${e.message}`);
});
}

//filter and calculate data
findArbitrageOpportunities = (data) => {
    const opportunities = {};

    for (let i = 0; i < Object.keys(data).length; i++) {
        let coin = Object.keys(data)[i];
        if (!coin) continue;

        let coinValues = {};
        this.props.data[coin].forEach(exchange => {
            if (EXCHANGES_BLACKLIST.includes(exchange.MARKET)) return;
            coinValues[exchange.MARKET] = exchange.PRICE;
        });

        let opportunity = {}
        for (let j = 0; j < Object.keys(coinValues).length; j++) {
            let exchange = Object.keys(coinValues)[j];

            if (j === 0) {
                opportunity.min = { [exchange]: coinValues[exchange] };
                opportunity.max = { [exchange]: coinValues[exchange] };
            } else if (coinValues[exchange] < Object.values(opportunity.min)) {
                opportunity.min = { [exchange]: coinValues[exchange] };
            } else if (coinValues[exchange] > Object.values(opportunity.max)) {
                opportunity.max = { [exchange]: coinValues[exchange] };
            }
        }

        let min = Object.values(opportunity.min);
        let max = Object.values(opportunity.max);
        opportunities[coin] = { difference: 1 - (min / max), min: opportunity.min, max: opportunity.max };
    }

    return opportunities;
}
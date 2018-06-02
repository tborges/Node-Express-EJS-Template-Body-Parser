module.exports = function(app) {

    // RESTful: An architectural style for building APIs.
    app.get('/api/person/:id', function(req, res){
        // GET that data from database
        res.json({ 
            "Meta Data": {
                "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
                "2. Symbol": "VSMPX",
                "3. Last Refreshed": "2018-05-25",
                "4. Time Zone": "US/Eastern"
                },
                "Monthly Time Series": {
                "2018-05-25": {
                "1. open": "124.7000",
                "2. high": "128.9400",
                "3. low": "123.6400",
                "4. close": "128.3700",
                "5. volume": "0"
                },
                "2015-05-29": {
                "1. open": "99.4800",
                "2. high": "100.8700",
                "3. low": "98.2700",
                "4. close": "99.8500",
                "5. volume": "0"
                }
                }
         });
    });
    app.post('/api/person', function(req, res) {
        // SAVE to the database
    });
    app.delete('/api/person/:id', function(req, res){
        // DELETE from the databse
    })

}
// Requires
var Crawler = require("./crawler");
var fs = require('fs');
module.exports = function (app) {

    // api to post an array of websites to phantom js
    app.post('/api/phantom/:user', function (req, res) {
        //user or folder for the images
        var user = req.params.user;
        // array of websites from the post body
        var websites = req.body.websites;
        if(typeof user != "undefined" && typeof websites !="undefined"){
            // object for the our functions
            var crawlStatus = {index: 0, max: websites.length, user: user};
            // return true if successful
            var runPhantomJs = Crawler.startCrawler(websites, crawlStatus);
            // response for the http request
            var crawlAnswer;

            if (runPhantomJs == true) {
                crawlAnswer = "Start to make Screenshots of: " + websites;
            } else {
                crawlAnswer = "Phantom JS is too busy. :( Please try later";
            }
            res.send(crawlAnswer);
        }else{
            res.send("You need to define a user websites to crawl.");
        }
    });

    // get all images of one user
    app.get('/api/images/:user', function (req, res) {
        var user = req.params.user;
        var folder = "./public/images" + "/" + user;
        //check if the folder exists
        if (fs.existsSync(folder)) {
            // get images from folder
            var images = fs.readdirSync(folder);
            // make urls from each image
            images = images.map(function (image) {
                return image = "/images/" + user + "/" + image;
            });
            res.send(images);
        }else{
            res.status(400).end();
        }
    });

    app.get("/api/phantom-status", function (req, res) {
        var body = {phantom: Crawler.phantomChildren};
        res.send(body);
    })
};


node s  # phantomjs-on-scale
Example projects for the codementor tutorial.

#How to run it
1. Download the project
2. "npm install"
3. "node server.js"
4. The log file shows you the port where the server is running (localhost:8089)
5. Go to localhost:8089 and use the frontend or work with the endpoints

#Screenshot REST API
- Post request to: "/api/phantom/:user"
- ```
  var postbody = { websites:['http://website.com','http://anotherwebsite.com', 'http://morewebsites.com']}
  ```
- :user will be used to create an folder on your machine

#Get all images
- GET request to http://localhost:8089/api/images/test
- (test is the username / foldername)
- Result:
```
["/images/test/Thu Sep 28 2017 10:18:30 GMT+0200 (CEST).png","/images/test/Thu Sep 28 2017 10:18:44 GMT+0200 (CEST).png","/images/test/Thu Sep 28 2017 10:19:10 GMT+0200 (CEST).png"]
```


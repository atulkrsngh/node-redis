# redis-nodejs-starter
An Express application that retrieves data from a RESTful API using the Axios module. After retrieving, it stores the data fetched from the API in Redis using the node-redis module. Also, implemented the cache validity period so that the cache can expire after a certain amount of time has passed. Used the Express middleware to cache data.

1. Install Redis using WSL and start the server
2. Clone the repository and run: npm i
3. Start the server using the command: npm start
4. Run the below API from the browser or Postman
   - localhost:8000/api/node-redis/movieData/prestige

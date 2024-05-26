import redis from 'redis';

let redisClient;
(async () => {
    redisClient = redis.createClient();
  
    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    redisClient.on("connect", () => console.log("Connected to redis"));
  
    await redisClient.connect(); // connection with Redis on the default port 6379
})();

export default redisClient;
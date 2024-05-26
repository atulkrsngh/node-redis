import axios from "axios";
import redisClient from "../../redisConfig.js";

async function fetchApiData(searchText) {
    const apiResponse = await axios.get(
      `https://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`
    );
    console.log("Request sent to the API");
    return apiResponse.data;
}

async function getMovieData(req, res) {
  const searchText = req.params.searchText;
  try {
    let results = await fetchApiData(searchText);
    if (results.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(searchText, JSON.stringify(results), {
      EX: 180, // accepts a value with the cache duration in seconds.
      NX: true, // when set to true, it ensures that the set() method should only set a key that doesn’t already exist in Redis.
    });

    res.status(200).send({
      fromCache: false,
      data: results,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

const controllers = { getMovieData };

export default controllers;
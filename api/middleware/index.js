import redisClient from "../../redisConfig.js";

async function cacheData(req, res, next) {
    const searchText = req.params.searchText;
    let results;
    try {
        const cacheResults = await redisClient.get(searchText);
        if (cacheResults) {
            results = JSON.parse(cacheResults);
            res.status(200).send({
                fromCache: true,
                data: results,
            });
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(404).send("Something went wrong");
    }
}

export default cacheData;
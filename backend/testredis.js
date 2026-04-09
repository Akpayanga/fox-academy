const redis = require("./utilities/redis.util");

(async () => {
  await redis.set("foo", "bar");
  const value = await redis.get("foo");
  console.log("Redis test:", value);
})();
const heavyScript = async function() {
  let count = 0;
  for (let i = 0; i < 1000000000; i++)
    count++;
  return Promise.resolve(count);
};
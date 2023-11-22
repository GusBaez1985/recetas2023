const API = "https://api.spoonacular.com";

export const get = (path) => {
  const apiKey = "9cddf6168b7d48e2929932fb69c7ca7c";

  return fetch(API + path, {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
}
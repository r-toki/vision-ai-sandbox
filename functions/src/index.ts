import { onRequest } from "firebase-functions/v2/https";

export const helloWorld = onRequest((_req, res) => {
  res.send("Hello from Firebase!");
});

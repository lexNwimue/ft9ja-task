import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

import Data from "./model/forexData.mjs";
import mongoose from "mongoose";

const dbURI = "mongodb://localhost/ft9ja-task-db";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

const app = express();

const response = await fetch(process.env.URL, {
  headers: {
    "Content-Type": "application/json",
    "auth-token":
      "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRlM2M0ZWU0MWQwM2M5NTViNzQ0NWQxNzVhODZhNSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaWF0IjoxNjU1NDMxMzM2LCJyZWFsVXNlcklkIjoiNWQ0ZTNjNGVlNDFkMDNjOTU1Yjc0NDVkMTc1YTg2YTUifQ.MH9lxNi7-v17YslJsLyjULvWQKtD_QDN1b3nU0pXR6LfsS7A_lgpbjhDkJ7MKYLt0ha7Vd3ZmbkIeULpoYVpNvOfQpZqiZpy0fcUZ2pLm9WbZEQLuuQjVmXU-G1loK1htE20GKupcW6tf7jW8kNbkPKuGgxbjackRb0UadAzeAf0TW_vomYshCEJDzHvIn9wyo2DVN6LOJ2Fh7hSBg6h6LyP_mgbbBh-F8d1XJP_9sx-aCEeI5anXvIr0a8p1gKPu0fhBu2rG6beusMMaRlWGpD3SSIxymf0rt8lxeubcYMPD4t3IG39KTGLqOdQIshCFQtavxkP0QDlWrW2vrtwQypf_7giIosN2bI8-ovQzDYOwLwmYIuTMPW8rLZQTs9nDfoivA0_S2RaXzQhsdqvAFlUiGkMZWqJJzujrFVUFvYNFQeEh1aThq8f1k4ZhqtNec9_llZKjjK7mGjW4cyzMoMNbNHNsow8IbwQZB7YroWvBfEP6wg2HcSGDUudL6xVxsQyHeIZrQfuDuvZQL4FCIpmoU5udpMKi2yT1pAjzr8r4y1DkU_8EBzf1lsx9hD2a9r_9YPH_ozn458GIx2sEGQIWcPtiPRqDlzmiZmy1FB1xgLePBDhFvRxZF7X9Hlkx21RGG-3mf8J5URsvV1gWO0Br2zGu88MunXIGba7SB0",
  },
});

let data = await response.json();
let forexData = {};
forexData.balance = data.balance;
forexData.equity = data.equity;
console.log(forexData);

let dbData = new Data(forexData);
dbData
  .save()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

import { useState, useEffect } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Equity from "./components/Equity";

function App() {
  const [balance, setBalance] = useState(0);
  const [equity, setEquity] = useState(0);

  const fetchData = async () => {
    const API_url =
      "https://mt-client-api-v1.london.agiliumtrade.ai/users/current/accounts/80340524-0f77-4e6d-a1e4-620d01a8fdea/accountInformation?api_key=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRlM2M0ZWU0MWQwM2M5NTViNzQ0NWQxNzVhODZhNSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaWF0IjoxNjU1NDMxMTI2LCJyZWFsVXNlcklkIjoiNWQ0ZTNjNGVlNDFkMDNjOTU1Yjc0NDVkMTc1YTg2YTUifQ.TxdDbnqFtyhiR0EL0kGt0upXy4Hfn0oY2Ko1vp172_-Ji2fJmKDOth2kn-PQ-qiz4K2xoZVidx7Sv8OYc5N7Krq7OiYRW_bej1LuTMLyhknA86pXrZR5MaXHakJVB56vgTZdITKPNqtFfmMkMvWUmBLE-Wnk_37EoFD5-IWsVkQcBTMxoCbXqz4HwD89xH-jy6zMq1nkMYwWefk3abQfJ5dFmba4qDIDhKdZCa1SelWnN9djwjzmWbecxINcR39-PWzyKZrull7tIGn9i94sPIleGgCKeWM7_8HQcWwNP7nmEwgftl8l4b3V6ajBjsJLIFT1cOe_kgRWNN6x-tC9IQ473ML5duRT1UZJRrMMn23O9kq4FlzbWv5x8ZZBx0azH9S5iFDItP_ZOr6aCiTThkWbBEEqh2riPHrK4KAnWHRKr5mLC_zczp7eT2sqFcstd0cw1YL0l4OCFY_AiVSPBK4bjIp0_-yr1jV8AyZ1bj1LZm-Uqjns4-nWpSScaQ4JVrWULQ2n-7Zoe5MU4Mj6GtlYpUIMb6GPRmNFp60hPBkJJ6cwSmxRp9Rqn_mY7i7_ofXKfRSeztFz0P9jHoVIzFvP4RJqwCn0hJ1a9WE3CEeE7B10iZ6Q6sRzztZW3gMOhc7XFDL0ipblh4z4A96E3XRLXOQomL6aQYBmrXC0Lss";
    const response = await fetch(API_url, {
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRlM2M0ZWU0MWQwM2M5NTViNzQ0NWQxNzVhODZhNSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaWF0IjoxNjU1NDMxMzM2LCJyZWFsVXNlcklkIjoiNWQ0ZTNjNGVlNDFkMDNjOTU1Yjc0NDVkMTc1YTg2YTUifQ.MH9lxNi7-v17YslJsLyjULvWQKtD_QDN1b3nU0pXR6LfsS7A_lgpbjhDkJ7MKYLt0ha7Vd3ZmbkIeULpoYVpNvOfQpZqiZpy0fcUZ2pLm9WbZEQLuuQjVmXU-G1loK1htE20GKupcW6tf7jW8kNbkPKuGgxbjackRb0UadAzeAf0TW_vomYshCEJDzHvIn9wyo2DVN6LOJ2Fh7hSBg6h6LyP_mgbbBh-F8d1XJP_9sx-aCEeI5anXvIr0a8p1gKPu0fhBu2rG6beusMMaRlWGpD3SSIxymf0rt8lxeubcYMPD4t3IG39KTGLqOdQIshCFQtavxkP0QDlWrW2vrtwQypf_7giIosN2bI8-ovQzDYOwLwmYIuTMPW8rLZQTs9nDfoivA0_S2RaXzQhsdqvAFlUiGkMZWqJJzujrFVUFvYNFQeEh1aThq8f1k4ZhqtNec9_llZKjjK7mGjW4cyzMoMNbNHNsow8IbwQZB7YroWvBfEP6wg2HcSGDUudL6xVxsQyHeIZrQfuDuvZQL4FCIpmoU5udpMKi2yT1pAjzr8r4y1DkU_8EBzf1lsx9hD2a9r_9YPH_ozn458GIx2sEGQIWcPtiPRqDlzmiZmy1FB1xgLePBDhFvRxZF7X9Hlkx21RGG-3mf8J5URsvV1gWO0Br2zGu88MunXIGba7SB0",
      },
    });

    let data = await response.json();
    data.balance && setBalance(data.balance);
    data.equity && setEquity(data.equity);
  };

  useEffect(() => {
    fetchData();
  }, [balance, equity]);

  return (
    <div className="App">
      <Balance balance={balance} />
      <Equity equity={equity} />
    </div>
  );
}

export default App;

// Reasons for not use scraping
// 1. No experience using it
// 2. Site didn't have visibile urls and probably won't be using it much on the job
// 3. Falls in grey area. Violates must webistes's terms of service

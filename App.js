import express from "express";
import Hello from "./hello.js";
import cors from "cors";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/Routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
//
const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
  })
);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
//   if ("OPTIONS" === req.method) {
//     res.sendStatus(200);
//   } else {
//     console.log(`${req.ip} ${req.method} ${req.url}`);
//     next();
//   }
// });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.sendStatus(200); // Send an OK status for the preflight
// });

Hello(app);
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);

//app.listen(4000);
app.listen(process.env.PORT || 4000);

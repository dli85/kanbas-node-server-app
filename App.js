import express from "express";
import Hello from "./hello.js";
import cors from "cors";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/Routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";
// import bodyParser from "body-parser";

const app = express();

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

app.use(
  cors({
    credentials: true,
    // origin: [
    //   "http://localhost:3000",
    //   process.env.FRONTEND_URL,
    //   "https://a5--celebrated-pasca-32173b.netlify.app",
    // ],
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    // domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

Hello(app);
app.use(express.json());
// app.use(bodyParser.json());
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
Lab5(app);

app.listen(process.env.PORT || 4000);

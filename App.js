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
Hello(app);
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);

//app.listen(4000);
app.listen(process.env.PORT || 4000);

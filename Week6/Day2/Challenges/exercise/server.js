import express from "express";
import cors from "cors";
import userRoutes from "./server/routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

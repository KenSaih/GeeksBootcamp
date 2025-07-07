import express from "express";
import cors from "cors";
import postRoutes from "./server/routes/postRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

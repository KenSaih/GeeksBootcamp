import express from "express";
import cors from "cors";
import bookRoutes from "./server/routes/bookRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());  
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

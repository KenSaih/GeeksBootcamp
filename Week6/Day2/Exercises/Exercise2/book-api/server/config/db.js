import pkg from "pg";
const { Pool } = pkg;

let pool;

try {
  pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "books",
    password: "Ines1991",
    port: 5432,
  });

  // Connection test
  pool.on("connect", () => {
    console.log("PostgreSQL connection established successfully");
  });

  pool.on("error", (err) => {
    console.error("PostgreSQL connection error:", err);
  });

  const testConnection = async () => {
    try {
      const client = await pool.connect();
      console.log("Database connection test successful");
      client.release();
    } catch (err) {
      console.error("Database connection test failed:", err);
      process.exit(1);
    }
  };

  testConnection();
} catch (error) {
  console.error("Error creating PostgreSQL pool:", error);
  process.exit(1);
}

export default pool;
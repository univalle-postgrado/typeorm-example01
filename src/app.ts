import * as express from "express";
import { AppDataSource } from "./data-source";
import { CategoriesRouter } from "./routes/categories.routes";
// import { Category } from "./entity/Category"

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initializtion:", err)
    })

// create and setup express app
const app = express()
app.use(express.json())

app.use("/api", CategoriesRouter);

// start express server
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})

import express from "express";
const app = express();
const PORT = 4000;

app.use(express.json());
app.post("/books", async (req, res) => {
    //1 access req and body
    //2 sql statment
    //3 res section
    return res.status(200).json({
        "message": "test successfuly"
    });
})

app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
});
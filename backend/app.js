const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactsRouter = require("./app/routes/contact.route");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
	res.json({ message: "Welcome to contact book application." });
});

app.use((req, res, next) => {
	return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
	return res.status(error.statusCode || 500).json({
		message: error.message || "Internal Server Error",
	});
});

module.exports = app;

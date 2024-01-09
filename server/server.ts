require("dotenv").config({path: __dirname + "/.env"});
const express = require("express");
const app = express();
// const pool = require("./db.config");
const bcrypt = require("./bcrypt");
const cors = require("cors");
const cookieSession = require("cookie-session");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");
// const multer = require("multer");
// const uidSafe = require("uid-safe");
const db = require("./db");

const PORT = process.env.PORT || 5000;
const COOKIE_SECRET = process.env.COOKIE_SECRET || require("../secret.json").COOKIE_SECRET;
// //<------------------------middleware----------------------->
app.use(express.json()); // --> req.body
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use((req, res, next) => {
    console.log("---------------------");
    console.log("req.url:", req.url);
    console.log("req.method:", req.method);
    console.log("req.session:", req.session);
    console.log("req.body:", req.body);
    console.log("---------------------");
    next();
});

if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
        if (req.headers["x-forwarded-proto"].startsWith("https")) {
            return next();
        }
        res.redirect(`https://${req.hostname}${req.url}`);
    });
}
//<------------------------cookiesSession----------------------->
app.use(
    session({
        secret: COOKIE_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: "none"},
        saveUninitialized: false,
        resave: false
    })
);
//<------------------------routes----------------------->
// app.get("/users", async (req, res) => {
//     try {
//         const result = await pool.query("SELECT * FROM users WHERE id=2");
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({error: "Internal server error"});
//     }
// });
app.get("/profile/id", (req, res) => {});

app.post("/registration", (req, res) => {
    try {
        console.log("INSIDE TRY!!!");
        bcrypt.hash(req.body.password).then((hashedPassword) => {
            console.log("PASSWORD HASHED!!!");
            return db
                .addNewUser(req.body.first, req.body.last, req.body.email, hashedPassword)
                .then((result) => {
                    console.log("NEW USER CREATED IN DB!!!");
                    req.session.userId = result.rows[0].userId;
                    res.json({success: true});
                    res.status(200).redirect("/profile");
                });
        });
    } catch (err) {
        console.log("problem server side: ", err.message);
        res.status(500).json({error: "Internal server error", success: false});
        res.render("Register", {
            //should it be "Register" or "/" ???
            title: "Registration Form"
        });
    }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

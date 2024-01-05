const express = require("express");
const app = express();
const pool = require("./db");
const bcrypt = require("./bcrypt");
const cors = require("cors");
const cookieSession = require("cookie-session");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

// //<------------------------middleware----------------------->
app.use(express.json()); // --> req.body
app.use(cors());
app.use(express.json()); // --> req.body
app.use(cors());
app.use((req, res, next) => {
    console.log("---------------------");
    console.log("req.url:", req.url);
    console.log("req.method:", req.method);
    console.log("req.session:", req.session);
    console.log("req.body:", req.body);
    console.log("---------------------");
    next();
});
app.use(morgan("dev")); //loggin middleware morgan

app.use(express.static("../client/public")); //serving js, css, static files from public folder

//<------------------------cookiesSession----------------------->
const COOKIE_SECRET = process.env.COOKIE_SECRET || require("../secret.json").COOKIE_SECRET;

let sessionSecret;

if (process.env.NODE_ENV === "production") {
    sessionSecret = process.env.COOKIE_SECRET;
} else {
    sessionSecret = require("../secret.json").COOKIE_SECRET;
}

app.use(
    session({
        secret: COOKIE_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: "none"},
        saveUninitialized: false,
        resave: false
    })
);

if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
        if (req.headers["x-forwarded-proto"].startsWith("https")) {
            return next();
        }
        res.redirect(`https://${req.hostname}${req.url}`);
    });
}
//<------------------------routes----------------------->
app.get("/", (req, res) => {
    res.status(200).send("Hello World from the server!");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

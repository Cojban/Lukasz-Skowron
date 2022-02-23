const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send('{imie: "Łukasz", nazwisko: "Skowron", klasa: "3I2", grupa: "3I2a"')
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

let leads = [];

// SAVE LEAD (from index.html)
app.post("/lead", (req, res) => {
    leads.push(req.body);
    res.json({ ok: true });
});

// SEND LEADS (to crm.html)
app.get("/leads", (req, res) => {
    res.json(leads);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));

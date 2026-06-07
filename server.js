const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

let leads = [];

// Homepage
app.get("/", (req, res) => {
    res.send("CRM Server Running ✅");
});

// Save Lead
app.post("/lead", (req, res) => {

    const lead = {
        ...req.body,
        date: new Date().toISOString()
    };

    leads.unshift(lead);

    res.json({
        success: true
    });
});

// Get Leads
app.get("/leads", (req, res) => {
    res.json(leads);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});

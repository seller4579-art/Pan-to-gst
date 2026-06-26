const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/advanced/pan', async (req, res) => {
  try {
    const { key, pan } = req.query;
    const response = await fetch(
      `https://anon-gst-info.vercel.app/advanced/pan?key=${key}&pan=${pan}`
    );
    const data = await response.json();
    
    // ✅ Developer change
    data.developer = "@Boss_Hcrr";
    
    res.json(data);
  } catch (err) {
    res.json({ status: false, error: "Something went wrong" });
  }
});

app.get('/', (req, res) => {
  res.send('PAN to GST API Running! ✅');
});

app.listen(3000);

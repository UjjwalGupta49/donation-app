const bodyParser = require('body-parser');
const app = require('express')();
const PORT = 8080;

app.listen(PORT, () => console.log(`API is live on http://localhost:${PORT}`));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/all-campaigns', (req, res) => {
    res.status(200).send({
        totalCampaigns: '10',
        campaigns: { campaign01: { wallet: 'abc', name: 'Abc', totalDonation: 10, requiredDonation: 100 } },
    });
});

// URI when creating new campaign 
app.post('/create-campaign/:wallet', (req, res) => {

    const wallet = req.params.wallet;
    const campaign = req.body;

    // if (!campaign) {
    //     res.status(418).send({ message: `Invalid campaign info, recived ${campaign}`});    
    // }
    res.status(200).send({
        response: campaign,
    })
});
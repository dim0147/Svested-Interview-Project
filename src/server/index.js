const express = require('express');
const cors = require('cors');
const { Op } = require('sequelize');

const model = require('./models/index');
const chartModel = model.chart;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/pie', async (req, res) => {
    try {
        //async/await Split code for easy extended/fix-error in codebase in future and using await for readable code rather using .then()
        const ratios = await getGenderRatio();
        res.json(ratios);
    } catch (err) {
        res.status(500).send(err);
    }
});

function getGenderRatio() {
    return chartModel.findAll({
        attributes: [
            'chart.gender',
            [model.sequelize.fn('COUNT', '*'), 'total'],
        ],
        group: ['chart.gender'],
        raw: true,
    });
}

app.get('/bar', async (req, res) => {
    try {
        const youngAdult = getPeopleInAgeRange(0, 35, 'young');
        const adult = getPeopleInAgeRange(36, 50, 'adult');
        const seniors = getPeopleInAgeRange(51, undefined, 'seniors');
        const allRanges = await Promise.all([youngAdult, adult, seniors]);
        res.json(allRanges);
    } catch (err) {
        res.status(500).send(err);
    }
});

function getPeopleInAgeRange(min, max, name) {
    // Default condition ('max' parameter is exist)
    let condition = {
        [Op.between]: [min, max],
    };

    // 'max' parameter is NOT exist (For 'seniors' query)
    if (max === undefined) {
        condition = {
            [Op.gte]: min,
        };
    }

    return (
        chartModel
            .findAll({
                attributes: [[model.sequelize.fn('COUNT', '*'), 'total']],
                where: {
                    age: condition,
                },
                limit: 1,
            })
            // Shape the data
            .then((e) => {
                e[0].name = name;
                return e[0];
            })
    );
}

app.get('/chart', async (req, res) => {
    try {
        const records = await chartModel.findAll({});
        return res.json(records);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/chart', async (req, res) => {
    const { name, age, gender } = req.body;

    // Validate input
    if (!name || isNaN(age))
        return res.status(500).send({ error: 'Invalid input' });
    if (!gender || (gender !== 'F' && gender !== 'M'))
        return res.status(500).send({ error: 'Invalid Gender' });

    const newPerson = await chartModel.create({
        name,
        age,
        gender,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    return res.json(newPerson);
});

app.listen(process.env.PORT || 8080, () =>
    console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

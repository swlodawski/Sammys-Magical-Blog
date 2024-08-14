const path = require('path');
const express = require('express');
const session = require('express-session');
const controllers = require('./controllers');
const exbhs = require('express-handlebars');
const sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')
(session.Store);
const app = express();
const PORT  = process.env.PORT || 3001;

const secret = {
    secret: 'Super secret secret',
    cookie: {
        age: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUnitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(secret));

const exbhs = exbhs.create();
app.engine('handlebars', hbs.engine);
app.set('view-engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, 'public')));

app.use(controllers);

sequelize.async({force: false}).then(() => {
    app.listen(PORT, ()  => {
        console.log(`Sever started on ${PORT}.`)
    })
})
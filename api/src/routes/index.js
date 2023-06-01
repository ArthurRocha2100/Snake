import express from 'express';
import usuarios from './usersRoutes.js';
import auth from './authRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("API Ativa")
    })

    app.use(
        express.json(),
        usuarios,
        auth
    )
}

export default routes
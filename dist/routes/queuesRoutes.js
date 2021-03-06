"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
const QueueController = require('../controllers/QueueController');
const AuthController = require('../controllers/AuthController')

const queuesRoutes = _express.Router.call(void 0, );

// Criar as rotas abaixo

queuesRoutes.get('/' ,QueueController.queueData)
queuesRoutes.get('/polling/:platform', AuthController.Auth, QueueController.polling)
queuesRoutes.post('/', AuthController.Auth ,QueueController.store)
queuesRoutes.put('/exit', AuthController.Auth ,QueueController.quit)
queuesRoutes.put('/disable-notification', AuthController.Auth ,QueueController.disableNotification)

exports. default = queuesRoutes;

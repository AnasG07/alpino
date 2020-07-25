import Logger from '@reactioncommerce/logger';
import { Meteor } from 'meteor/meteor';
import config from './config.js';
// Init endpoints
import './i18n/handler.js';
import './oauthEndpoints.js';
import { oauthLogin } from './oauthMethods.js';

Meteor.methods({
  getGraphQLApiUrl: () => config.API_URL,
  'oauth/login': oauthLogin,
});

Meteor.startup(() => {
  Logger.info(`Serving Reaction Identity at ${config.ROOT_URL}`);
});

import express from 'express';

import authentication from './authentication';
import users from './users';
import aquaticAuth from './aquaticAuth';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  aquaticAuth(router);

  return router;
};
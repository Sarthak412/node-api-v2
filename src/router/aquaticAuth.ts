// import { createAquaticAnimal } from '../db/aquaticAnimalSchema';
import express from 'express';
import { isAuthenticated } from '../middlewares';

import { createNewAquaticAnimal, deleteAnimalById, updateAnimal } from '../controllers/aquaticAnimal';

export default (router: express.Router) => {
    router.post('/api/create-animal', isAuthenticated, createNewAquaticAnimal);
    router.delete('/api/delete/:id', isAuthenticated, deleteAnimalById);
    router.patch('/api/update/:id', isAuthenticated, updateAnimal);
};
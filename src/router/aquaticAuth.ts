// import { createAquaticAnimal } from '../db/aquaticAnimalSchema';
import express from 'express';
import { isAuthenticated } from '../middlewares';

import { createNewAquaticAnimal, deleteAnimalById, updateAnimal, getAllAquaticAnimals, getAquaAnimalById } from '../controllers/aquaticAnimal';

export default (router: express.Router) => {

    // Open endpoint
    router.get('/api/all-aqua-animals', getAllAquaticAnimals);

    router.get('/api/:id', getAquaAnimalById);

    // Secured endpoints
    router.post('/api/create-animal', isAuthenticated, createNewAquaticAnimal);
    router.delete('/api/:id', isAuthenticated, deleteAnimalById);
    router.patch('/api/:id', isAuthenticated, updateAnimal);
};
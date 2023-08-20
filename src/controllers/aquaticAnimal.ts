import express from 'express';

import { createAquaticAnimal, deleteAquaticAnimalById, updateAquaticAnimal, getAnimalById } from '../db/aquaticAnimalSchema';

export const createNewAquaticAnimal = async (req: express.Request, res: express.Response) => {
    try {
        
        const aquaticAnimal = req.body;

        const newAquaticAnimal = await createAquaticAnimal(aquaticAnimal);

        res.status(200).json(newAquaticAnimal);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteAnimalById = async (req: express.Request, res: express.Response) => {

    try {
        
        const {id} = req.params;

        const deletedAnimal = await deleteAquaticAnimalById(id);

        return res.json(deletedAnimal);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }

}

export const updateAnimal = async (req: express.Request, res: express.Response) => {

    try {
        
        const {id} = req.params;

        const { name } = req.body;

        if(!name){
            return res.sendStatus(400);
        }

        const aquaticAnimal = await getAnimalById(id);

        aquaticAnimal.name = name;

        await aquaticAnimal.save();

        return res.status(200).json(aquaticAnimal).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }

}
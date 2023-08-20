import express from 'express';

import { createAquaticAnimal, deleteAquaticAnimalById, updateAquaticAnimal, getAnimalById } from '../db/aquaticAnimalSchema';

import { AquaticModel } from '../db/aquaticAnimalSchema';

export const getAllAquaticAnimals = async (req: express.Request, res: express.Response) => {

    try {
        
        const getAllAquaAnimals = await AquaticModel.find();

        res.status(200).json(getAllAquaAnimals);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }

}

export const getAquaAnimalById = async (req: express.Request, res: express.Response) => {
    try {

        const {id} = req.params;

        const aquaAnimal = await getAnimalById(id);

        return res.status(200).json(aquaAnimal);
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

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
        
        const { id } = req.params;

        const { name } = req.body;

        if(!name){
            return res.sendStatus(400);
        }

        const aquaAnimal = await getAnimalById(id);

        aquaAnimal.name = name;

        await name.save();

        return res.status(200).json(aquaAnimal).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }

}
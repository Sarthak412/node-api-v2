import mongoose from "mongoose";

const AquaticAnimalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the aquatic animal name."]
        },
        scientific_name: {
            type: String,
            required: [true, "Please enter the scientific name."]
        },
        size: {
            length: {
                type: String,
                required: true
            },
            weight:{
                type: String,
                required: true
            }
        },
        description: {
            type: String,
            required: true
        },
        interesting_facts: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        }

    }, 
    
    {
        timestamps: true
    }
)

export const AquaticModel = mongoose.model('AquaAnimal', AquaticAnimalSchema);


// * Methods Implementation for AquaticModel

// Fetching all the aquatic animals
export const getAllAnimals = () => AquaticModel.find();

// Fetching Aquatic Animal using name
export const getAnimalsByName = (name: string) => AquaticModel.findOne({ name }); 

// Fetching Aquatic animal by id
export const getAnimalById = (id: string) => AquaticModel.findById(id);

// Method for creating/saving an aquatic animal
export const createAquaticAnimal = (values: Record <string, any>) => new AquaticModel(values).save().then((animal) => animal.toObject());

// Method for deleting an animal
export const deleteAquaticAnimalById = (id: string) => AquaticModel.findOneAndDelete({_id: id});

// Method for updating an animal
export const updateAquaticAnimal = (id: string, values: Record<string, any>) => AquaticModel.findByIdAndUpdate(id, values);
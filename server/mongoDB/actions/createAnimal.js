import connectDB from "../index.js";
import Animal from "../models/Animal.js";

export default async function createAnimal(data) {
    try {
        await connectDB();
        const animal = new Animal(data);
        await animal.save();
    } catch (e) {
       throw e;
    }
}
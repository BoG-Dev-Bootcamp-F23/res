import React, { useState, useEffect } from "react";
import AnimalCard from './AnimalCard';
import AnimalForm from './AnimalForm';
import styles from "@/styles/Animals.module.css";

export default function Animals() {
    const [animals, setAnimals] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const userID  = 'Sneha Pal';

    useEffect(() => {
        getAnimalData();
    }, []);

    async function getAnimalData() {
        try {
            const response = await fetch('/api/admin/animals');
            const data = await response.json();

            setAnimals(data);
        } catch (error) {
            console.error('Error fetching animal data:', error);
        }
    }

    const handleFormSubmitSuccess = () => {
        setShowForm(false);
        getAnimalData(); // Optionally, fetch the updated animal data after submission
    };

    return (
        <div className={styles.display}>
            {showForm ? (
                <div>
                    <AnimalForm className={styles.border} owner={userID} onCancel={() => setShowForm(false)} onSubmitSuccess={handleFormSubmitSuccess} />
                </div>
            ) : (
                <div>
                    <div className={styles.header}>
                        <h1>Animals</h1>
                        <button className= {styles.createAnimalButton} onClick={() => setShowForm(!showForm)}>+ Create Animal</button>
                    </div>
                    <div className={styles.cardDisplays}>
                        {animals.map(animal => (
                            <AnimalCard key={animal._id} animal={animal} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

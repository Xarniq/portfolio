import React from 'react';

function Accueil() {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon portfolio!</h1>
                <p className="text-lg mb-4">Mon portfolio est un espace où vous pouvez découvrir mon parcours, mes projets et me contacter.</p>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold">Parcours</h2>
                    <p>Je partage mon expérience professionnelle, mes compétences et mes formations.</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold">Projets</h2>
                    <p>Je présente mes réalisations passées et actuelles, en mettant en avant les technologies utilisées et les résultats obtenus.</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <p>Vous pouvez me contacter directement via le formulaire de contact pour toute question, collaboration ou opportunité professionnelle.</p>
                </div>
            </div>
        </div>
    );
}

export default Accueil

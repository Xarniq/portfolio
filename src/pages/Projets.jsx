import React from 'react';

const Projets = () => {
  const competences = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    "Développer la présence en ligne de l'organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel"
  ];

  const realisations = [
    "Réalisation en cours de formation",
    "Réalisations en milieu professionnel en cours de première année",
    "Réalisations en milieu professionnel en cours de seconde année"
  ];

  // Exemple de croix statiques (à modifier selon vos besoins)
  const staticChecks = {
    "0-1": true,
    "5-0": true,
    "3-0": true,
    "3-1": true,
    "5-1": true,
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">BTS SIO option SISR</h2>
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-600">Tableau de synthèse des compétences</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Compétences mises en œuvre</th>
                {realisations.map((realisation, index) => (
                  <th key={index} className="border p-2 text-center">{realisation}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competences.map((competence, compIndex) => (
                <tr key={compIndex} className={compIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border p-2">{competence}</td>
                  {realisations.map((_, realIndex) => (
                    <td key={realIndex} className="border p-2 text-center">
                      {staticChecks[`${compIndex}-${realIndex}`] ? 'X' : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projets;
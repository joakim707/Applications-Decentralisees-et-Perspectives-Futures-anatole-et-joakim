const fs = require('fs');
const path = require('path');

// Script utilitaire pour extraire l'ABI du contrat compilé
const artifactPath = path.join(__dirname, '../artifacts/contracts/SimpleStorage.sol/SimpleStorage.json');

try {
    if (!fs.existsSync(artifactPath)) {
        console.log('❌ Le fichier d\'artefact n\'existe pas. Compilez d\'abord le contrat avec: npm run compile');
        process.exit(1);
    }

    const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
    const abi = artifact.abi;

    console.log('✅ ABI extrait avec succès!\n');
    console.log('Copiez ceci dans votre fichier index.html (remplacez CONTRACT_ABI):\n');
    console.log(JSON.stringify(abi, null, 2));
    
    // Écrire aussi dans un fichier pour faciliter la copie
    const abiOutputPath = path.join(__dirname, '../ABI.json');
    fs.writeFileSync(abiOutputPath, JSON.stringify(abi, null, 2));
    console.log(`\n✅ ABI également sauvegardé dans: ${abiOutputPath}`);
} catch (error) {
    console.error('❌ Erreur lors de la lecture de l\'artefact:', error.message);
    process.exit(1);
}

const hre = require("hardhat");

async function main() {
    try {
        const provider = new hre.ethers.JsonRpcProvider("http://127.0.0.1:8545");
        
        // Vérifier la connexion
        const blockNumber = await provider.getBlockNumber();
        console.log("✅ Connexion au nœud Hardhat réussie");
        console.log("📦 Numéro de bloc actuel:", blockNumber);
        
        // Vérifier l'adresse du contrat
        const contractAddress = process.argv[2] || '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
        console.log("\n🔍 Vérification du contrat à l'adresse:", contractAddress);
        
        const code = await provider.getCode(contractAddress);
        
        if (code === '0x' || code === '0x0') {
            console.log("❌ Aucun contrat trouvé à cette adresse");
            console.log("\n💡 Solutions:");
            console.log("1. Assurez-vous que 'npm run node' est en cours d'exécution");
            console.log("2. Déployez le contrat avec: npm run deploy:localhost");
            console.log("3. Utilisez l'adresse affichée après le déploiement");
        } else {
            console.log("✅ Contrat trouvé !");
            console.log("📄 Code du contrat:", code.substring(0, 20) + "...");
            
            // Essayer d'appeler une fonction
            try {
                const SimpleStorage = await hre.ethers.getContractAt("SimpleStorage", contractAddress);
                const value = await SimpleStorage.value();
                console.log("✅ Fonction value() appelée avec succès");
                console.log("📊 Valeur actuelle:", value.toString());
            } catch (err) {
                console.log("⚠️  Contrat trouvé mais erreur lors de l'appel:", err.message);
            }
        }
    } catch (error) {
        console.error("❌ Erreur:", error.message);
        console.log("\n💡 Le nœud Hardhat n'est probablement pas en cours d'exécution");
        console.log("   Démarrez-le avec: npm run node");
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

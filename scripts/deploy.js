const hre = require("hardhat");

async function main() {
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    await simpleStorage.waitForDeployment();

    const address = await simpleStorage.getAddress();
    console.log("SimpleStorage déployé à :", address);
    
    // Afficher l'adresse pour faciliter la copie
    console.log("\n=== INFORMATIONS IMPORTANTES ===");
    console.log("Adresse du contrat:", address);
    console.log("N'oubliez pas de mettre à jour CONTRACT_ADDRESS dans index.html");
    console.log("L'ABI se trouve dans: artifacts/contracts/SimpleStorage.sol/SimpleStorage.json");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

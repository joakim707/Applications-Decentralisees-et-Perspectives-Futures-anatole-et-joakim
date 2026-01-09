const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    let simpleStorage;
    let owner;
    let addr1;

    beforeEach(async function () {
        // Récupérer les comptes de test
        [owner, addr1] = await ethers.getSigners();

        // Déployer le contrat
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.waitForDeployment();
    });

    describe("Déploiement", function () {
        it("Doit avoir une valeur initiale de 100", async function () {
            const value = await simpleStorage.value();
            expect(value).to.equal(100);
        });

        it("Doit retourner 100 avec getValue()", async function () {
            const value = await simpleStorage.getValue();
            expect(value).to.equal(100);
        });
    });

    describe("Modification de la valeur", function () {
        it("Doit permettre de modifier la valeur", async function () {
            await simpleStorage.setValue(42);
            const value = await simpleStorage.value();
            expect(value).to.equal(42);
        });

        it("Doit permettre à n'importe qui de modifier la valeur", async function () {
            await simpleStorage.connect(addr1).setValue(999);
            const value = await simpleStorage.value();
            expect(value).to.equal(999);
        });

        it("Doit retourner la nouvelle valeur avec getValue()", async function () {
            await simpleStorage.setValue(123);
            const value = await simpleStorage.getValue();
            expect(value).to.equal(123);
        });
    });
});

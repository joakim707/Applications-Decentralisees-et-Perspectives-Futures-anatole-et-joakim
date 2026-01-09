# Ma Première DApp

Ce projet est une application décentralisée (DApp) simple qui permet d'interagir avec un smart contract Ethereum via une interface web.

## 📋 Prérequis

- Node.js et npm installés sur votre ordinateur
- Un navigateur web avec l'extension MetaMask installée
- Git (optionnel)

## 🚀 Installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Vérifier l'installation de Hardhat**
   ```bash
   npx hardhat --version
   ```

## 🏃 Démarrage Rapide

### Étape 1 : Démarrer le réseau local Hardhat

Ouvrez un terminal et exécutez :
```bash
npm run node
```

Cela lancera un nœud blockchain local et affichera des adresses de comptes de test avec leurs clés privées. **Laissez ce terminal ouvert.**

### Étape 2 : Déployer le smart contract

Dans un **nouveau terminal**, exécutez :
```bash
npm run deploy:localhost
```

Vous devriez voir quelque chose comme :
```
SimpleStorage déployé à : 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

**Copiez cette adresse**, vous en aurez besoin pour l'étape suivante.

### Étape 3 : Configurer MetaMask

1. Ouvrez MetaMask dans votre navigateur
2. Cliquez sur le réseau en haut (probablement "Ethereum Mainnet")
3. Sélectionnez "Ajouter un réseau" > "Ajouter un réseau manuellement"
4. Remplissez les informations suivantes :
   - **Nom du réseau** : Hardhat Local
   - **URL RPC** : `http://127.0.0.1:8545`
   - **ID de chaîne** : `1337`
   - **Symbole de la devise** : ETH
   - **URL de l'explorateur de blocs** : (laissez vide)
5. Cliquez sur "Enregistrer"

6. Importez un compte de test :
   - Dans le terminal où `npm run node` est en cours, vous verrez des comptes avec leurs clés privées
   - Copiez une clé privée
   - Dans MetaMask, cliquez sur l'icône de compte > "Importer un compte"
   - Collez la clé privée et cliquez sur "Importer"

### Étape 4 : Récupérer l'ABI du contrat

**Méthode 1 : Script automatique (recommandé)**
```bash
npm run compile
npm run get-abi
```
Cela affichera l'ABI dans le terminal et créera un fichier `ABI.json` à la racine du projet.

**Méthode 2 : Manuel**
Après la compilation, l'ABI se trouve dans :
```
artifacts/contracts/SimpleStorage.sol/SimpleStorage.json
```

Ouvrez ce fichier et copiez le contenu du tableau `"abi"`.

### Étape 5 : Mettre à jour le fichier HTML

1. Ouvrez `index.html` dans un éditeur de texte
2. Remplacez `CONTRACT_ADDRESS` par l'adresse que vous avez copiée à l'étape 2
3. Remplacez `CONTRACT_ABI` par l'ABI que vous avez copié à l'étape 4

Exemple :
```javascript
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const CONTRACT_ABI = [
    {
        "inputs": [],
        "name": "value",
        // ... reste de l'ABI
    }
];
```

### Étape 6 : Ouvrir la DApp

1. Ouvrez `index.html` dans votre navigateur (double-cliquez dessus ou utilisez un serveur local)
2. Cliquez sur "Connecter MetaMask"
3. Autorisez la connexion dans MetaMask
4. Cliquez sur "Appeler ma Fonction (getValue)" pour lire la valeur
5. Entrez un nombre et cliquez sur "Définir la valeur (setValue)" pour modifier la valeur

## 📁 Structure du Projet

```
ma-premiere-dapp/
├── contracts/
│   └── SimpleStorage.sol    # Smart contract Solidity
├── scripts/
│   └── deploy.js             # Script de déploiement
├── artifacts/                # Fichiers compilés (générés)
├── cache/                    # Cache Hardhat (généré)
├── index.html                # Interface utilisateur de la DApp
├── hardhat.config.js         # Configuration Hardhat
├── package.json              # Dépendances npm
└── README.md                 # Ce fichier
```

## 🧪 Tests

Pour exécuter les tests (si vous en créez) :
```bash
npm test
```

## 🔧 Commandes Utiles

- `npm run compile` - Compiler les smart contracts
- `npm run deploy` - Déployer sur le réseau par défaut
- `npm run deploy:localhost` - Déployer sur le réseau local
- `npm run node` - Démarrer un nœud Hardhat local

## 🐛 Débogage

### Problèmes Courants

1. **MetaMask ne se connecte pas**
   - Vérifiez que MetaMask est déverrouillé
   - Assurez-vous d'être connecté au réseau "Hardhat Local"
   - Actualisez la page

2. **Transaction en attente**
   - Vérifiez que le nœud Hardhat est toujours en cours d'exécution
   - Vérifiez les logs dans la console du navigateur (F12)

3. **Erreur "Contract not deployed"**
   - Vérifiez que l'adresse du contrat dans `index.html` est correcte
   - Vérifiez que l'ABI correspond au contrat déployé

4. **Erreur "nonce too low"**
   - Réinitialisez votre compte dans MetaMask (Paramètres > Avancé > Réinitialiser le compte)

## 🔍 Extraction de l'ABI

Pour faciliter la configuration de votre DApp, utilisez le script d'extraction d'ABI :

```bash
npm run compile    # Compile d'abord le contrat
npm run get-abi    # Extrait l'ABI automatiquement
```

Le script affichera l'ABI dans le terminal et créera également un fichier `ABI.json` que vous pouvez copier facilement.

## 📚 Ressources

- [Documentation Hardhat](https://hardhat.org/docs)
- [Documentation Web3.js](https://web3js.readthedocs.io/)
- [Documentation Solidity](https://docs.soliditylang.org/)
- [MetaMask Documentation](https://docs.metamask.io/)

## ✅ Checklist de Réussite

À la fin de ce TP, vous devriez être capable de :

- [x] Configurer un environnement de développement blockchain avec Hardhat
- [x] Écrire, compiler et déployer un smart contract simple sur un réseau local
- [x] Créer une interface web (DApp) pour interagir avec ce smart contract
- [x] Lire des données et envoyer des transactions via votre DApp
- [x] Utiliser MetaMask pour gérer les interactions avec le smart contract
- [x] Déboguer des problèmes courants liés aux DApps et aux smart contracts

## 📝 Notes

- Ce projet utilise Hardhat pour le développement local
- Le smart contract `SimpleStorage` stocke une valeur entière et permet de la lire/modifier
- L'interface web utilise Web3.js pour communiquer avec la blockchain via MetaMask

## 🎓 Prochaines Étapes

Une fois que vous maîtrisez cette DApp de base, vous pouvez explorer :
- Les technologies complémentaires (IPFS, Chainlink, Sidechains)
- Des DApps plus complexes (système de vote, marketplace, galerie NFT)
- Le déploiement sur des réseaux de test (Sepolia, Goerli)
- Les tests automatisés des smart contracts

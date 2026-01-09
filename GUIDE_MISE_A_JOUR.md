# Guide : Mettre à jour index.html avec l'adresse et l'ABI

## 📋 Étapes à suivre

### Étape 1 : Compiler le contrat
```bash
npm run compile
```

### Étape 2 : Extraire l'ABI
```bash
npm run get-abi
```
L'ABI est maintenant dans le fichier `ABI.json` et a été mis à jour dans `index.html` automatiquement.

### Étape 3 : Démarrer le nœud Hardhat (dans un NOUVEAU terminal)
```bash
cd C:\Users\joaki\Documents\ma-premiere-dapp
npm run node
```
**⚠️ IMPORTANT : Laissez ce terminal ouvert !**

### Étape 4 : Déployer le contrat (dans un autre terminal)
```bash
cd C:\Users\joaki\Documents\ma-premiere-dapp
npm run deploy:localhost
```

Vous verrez quelque chose comme :
```
SimpleStorage déployé à : 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Étape 5 : Mettre à jour l'adresse dans index.html

1. Ouvrez `index.html` dans votre éditeur
2. Cherchez la ligne :
   ```javascript
   const CONTRACT_ADDRESS = '0xYourContractAddressHere';
   ```
3. Remplacez `'0xYourContractAddressHere'` par l'adresse que vous avez copiée :
   ```javascript
   const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
   ```
4. Sauvegardez le fichier

## ✅ Vérification

Une fois terminé, votre `index.html` devrait avoir :
- ✅ `CONTRACT_ADDRESS` avec une adresse réelle (commence par `0x`)
- ✅ `CONTRACT_ABI` avec le tableau complet de l'ABI

## 🚀 Test

1. Ouvrez `index.html` dans votre navigateur
2. Connectez MetaMask (assurez-vous d'être sur le réseau "Hardhat Local")
3. Cliquez sur "Connecter MetaMask"
4. Cliquez sur "Appeler ma Fonction (getValue)"
5. Vous devriez voir la valeur `100` s'afficher !

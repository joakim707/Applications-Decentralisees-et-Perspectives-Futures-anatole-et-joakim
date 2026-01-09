# Instructions Rapides - Démarrage en 5 Minutes

## 🚀 Démarrage Ultra-Rapide

### 1. Installation (une seule fois)
```bash
npm install
```

### 2. Démarrer le réseau local
```bash
npm run node
```
**Laissez ce terminal ouvert !**

### 3. Dans un NOUVEAU terminal : Déployer le contrat
```bash
npm run deploy:localhost
```
**Copiez l'adresse du contrat affichée** (ex: `0x5FbDB2315678afecb367f032d93F642f64180aa3`)

### 4. Récupérer l'ABI
```bash
npm run compile
npm run get-abi
```
**Copiez l'ABI affiché** ou utilisez le fichier `ABI.json` généré

### 5. Configurer MetaMask
- Ajoutez le réseau "Hardhat Local" (voir `GUIDE_METAMASK.md`)
- Importez un compte de test (clé privée affichée dans le terminal `npm run node`)

### 6. Mettre à jour `index.html`
Remplacez dans `index.html` :
- `CONTRACT_ADDRESS` par l'adresse copiée à l'étape 3
- `CONTRACT_ABI` par l'ABI copié à l'étape 4

### 7. Ouvrir la DApp
- Ouvrez `index.html` dans votre navigateur
- Cliquez sur "Connecter MetaMask"
- Testez les fonctions !

## ✅ Vérification Rapide

- [ ] `npm run node` est en cours d'exécution
- [ ] Le contrat est déployé (adresse copiée)
- [ ] L'ABI est extrait
- [ ] MetaMask est configuré avec le réseau Hardhat Local
- [ ] Un compte de test est importé dans MetaMask
- [ ] `index.html` est mis à jour avec l'adresse et l'ABI
- [ ] La DApp se connecte à MetaMask
- [ ] Les fonctions `getValue()` et `setValue()` fonctionnent

## 🐛 Problème ?

Consultez la section "Débogage" du `README.md` ou `GUIDE_METAMASK.md`

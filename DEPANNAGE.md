# Guide de Dépannage - Erreur "Parameter decoding error"

## 🔴 Erreur : "Parameter decoding error: Returned values aren't valid"

Cette erreur peut avoir plusieurs causes. Suivez ces étapes pour la résoudre :

### ✅ Vérification 1 : Le nœud Hardhat est-il en cours d'exécution ?

**Symptôme** : L'erreur apparaît immédiatement

**Solution** :
1. Ouvrez un terminal PowerShell
2. Naviguez vers le projet : `cd C:\Users\joaki\Documents\ma-premiere-dapp`
3. Démarrez le nœud : `npm run node`
4. **Laissez ce terminal ouvert !**
5. Le terminal doit afficher des comptes avec leurs clés privées

### ✅ Vérification 2 : Le contrat est-il déployé à cette adresse ?

**Symptôme** : L'erreur apparaît après la connexion

**Solution** :
1. Dans un **nouveau terminal**, déployez le contrat :
   ```bash
   cd C:\Users\joaki\Documents\ma-premiere-dapp
   npm run deploy:localhost
   ```
2. **Copiez l'adresse affichée** (ex: `0x5FbDB2315678afecb367f032d93F642f64180aa3`)
3. Vérifiez que cette adresse correspond à celle dans `index.html`
4. Si l'adresse est différente, mettez à jour `CONTRACT_ADDRESS` dans `index.html`

### ✅ Vérification 3 : MetaMask est-il sur le bon réseau ?

**Symptôme** : L'erreur apparaît même si tout semble correct

**Solution** :
1. Ouvrez MetaMask
2. Vérifiez que le réseau sélectionné est **"Hardhat Local"** (ou "Localhost 8545")
3. Le Chain ID doit être **1337**
4. Si le réseau n'existe pas, ajoutez-le :
   - Nom : `Hardhat Local`
   - URL RPC : `http://127.0.0.1:8545`
   - Chain ID : `1337`
   - Symbole : `ETH`

### ✅ Vérification 4 : L'ABI est-il correct ?

**Symptôme** : L'erreur persiste après toutes les vérifications

**Solution** :
1. Recompilez le contrat :
   ```bash
   npm run compile
   ```
2. Extrayez l'ABI à jour :
   ```bash
   npm run get-abi
   ```
3. Copiez l'ABI affiché et remplacez `CONTRACT_ABI` dans `index.html`
4. Ou utilisez le fichier `ABI.json` généré

### ✅ Vérification 5 : Le contrat a-t-il été redéployé ?

**Important** : Si vous redéployez le contrat, l'adresse change !

**Solution** :
1. Chaque fois que vous redéployez, vous devez :
   - Copier la nouvelle adresse
   - Mettre à jour `CONTRACT_ADDRESS` dans `index.html`
   - Actualiser la page dans le navigateur

### 🔧 Solution Rapide : Redémarrage Complet

Si rien ne fonctionne, suivez ces étapes dans l'ordre :

1. **Arrêtez tous les terminaux** (Ctrl+C)

2. **Redémarrez le nœud Hardhat** (Terminal 1) :
   ```bash
   cd C:\Users\joaki\Documents\ma-premiere-dapp
   npm run node
   ```

3. **Déployez le contrat** (Terminal 2) :
   ```bash
   cd C:\Users\joaki\Documents\ma-premiere-dapp
   npm run deploy:localhost
   ```
   Copiez l'adresse affichée !

4. **Mettez à jour index.html** :
   - Remplacez `CONTRACT_ADDRESS` par la nouvelle adresse
   - Vérifiez que `CONTRACT_ABI` est à jour

5. **Vérifiez MetaMask** :
   - Réseau : "Hardhat Local"
   - Chain ID : 1337

6. **Actualisez la page** dans le navigateur (F5)

7. **Reconnectez MetaMask** dans la DApp

### 🐛 Erreurs Courantes

#### "Contract not deployed"
- Le contrat n'existe pas à cette adresse
- **Solution** : Redéployez et mettez à jour l'adresse

#### "Out of Gas"
- Problème de configuration réseau
- **Solution** : Vérifiez que vous êtes sur "Hardhat Local"

#### "nonce too low"
- Problème avec MetaMask
- **Solution** : Réinitialisez le compte dans MetaMask (Paramètres > Avancé > Réinitialiser le compte)

#### "Could not connect to the network"
- Le nœud Hardhat n'est pas en cours d'exécution
- **Solution** : Démarrez `npm run node` dans un terminal

### 📝 Checklist de Vérification

Avant de tester votre DApp, vérifiez :

- [ ] Le nœud Hardhat est en cours d'exécution (`npm run node`)
- [ ] Le contrat est déployé (`npm run deploy:localhost`)
- [ ] L'adresse dans `index.html` correspond à l'adresse déployée
- [ ] L'ABI dans `index.html` est à jour (utilisez `npm run get-abi`)
- [ ] MetaMask est sur le réseau "Hardhat Local" (Chain ID: 1337)
- [ ] Un compte de test est importé dans MetaMask
- [ ] La page HTML est actualisée dans le navigateur

### 💡 Astuce

Ouvrez la console du navigateur (F12) pour voir les messages de débogage détaillés. Le code amélioré affiche maintenant plus d'informations sur ce qui ne va pas.

# 🔧 Résolution : "Aucun contrat trouvé à l'adresse"

## ✅ Diagnostic

Le contrat **EST bien déployé** et fonctionne correctement. Le problème vient de MetaMask qui ne peut pas le voir.

## 🎯 Solutions (essayez dans cet ordre)

### Solution 1 : Vérifier le réseau MetaMask

1. **Ouvrez MetaMask**
2. **Cliquez sur le nom du réseau** (en haut, par exemple "Ethereum Mainnet")
3. **Vérifiez que "Hardhat Local" est sélectionné**
   - Si ce n'est pas le cas, sélectionnez-le
   - Si le réseau n'existe pas, ajoutez-le (voir Solution 2)

### Solution 2 : Ajouter le réseau Hardhat Local dans MetaMask

Si le réseau n'existe pas :

1. Dans MetaMask, cliquez sur **"Ajouter un réseau"** ou **"Ajouter un réseau manuellement"**
2. Remplissez ces informations :
   - **Nom du réseau** : `Hardhat Local`
   - **URL RPC** : `http://127.0.0.1:8545`
   - **ID de chaîne** : `1337`
   - **Symbole de la devise** : `ETH`
   - **URL de l'explorateur de blocs** : (laissez vide)
3. Cliquez sur **"Enregistrer"**
4. **Sélectionnez ce réseau**

### Solution 3 : Réinitialiser le compte MetaMask

Parfois MetaMask a besoin d'être réinitialisé pour un réseau local :

1. Dans MetaMask, allez dans **Paramètres** (icône en bas)
2. Allez dans **Avancé**
3. Faites défiler jusqu'à **"Réinitialiser le compte"**
4. Cliquez sur **"Réinitialiser"**
5. **Reconnectez-vous** à la DApp

### Solution 4 : Redéployer le contrat

Si rien ne fonctionne, redéployez le contrat :

1. **Assurez-vous que le nœud Hardhat est en cours d'exécution** :
   ```bash
   npm run node
   ```
   (dans un terminal séparé)

2. **Dans un autre terminal**, redéployez :
   ```bash
   npm run deploy:localhost
   ```

3. **Copiez la nouvelle adresse** affichée

4. **Mettez à jour `index.html`** :
   - Remplacez `CONTRACT_ADDRESS` par la nouvelle adresse

5. **Actualisez la page** dans le navigateur (F5)

### Solution 5 : Vérifier que le nœud Hardhat est bien démarré

1. **Vérifiez dans le terminal** où vous avez lancé `npm run node`
   - Il doit afficher des comptes avec leurs clés privées
   - Il ne doit pas y avoir d'erreurs

2. **Si le nœud n'est pas démarré**, démarrez-le :
   ```bash
   npm run node
   ```

3. **Laissez ce terminal ouvert** pendant toute la session

### Solution 6 : Vérifier l'adresse du contrat

Utilisez le script de vérification :

```bash
npm run check-contract
```

Cela vous dira si le contrat est bien déployé et accessible.

## 🔍 Vérifications à faire

Avant de tester, vérifiez :

- [ ] Le nœud Hardhat est en cours d'exécution (`npm run node`)
- [ ] MetaMask est sur le réseau "Hardhat Local" (Chain ID: 1337)
- [ ] L'adresse dans `index.html` correspond à celle du dernier déploiement
- [ ] Vous avez actualisé la page dans le navigateur (F5)
- [ ] Vous avez reconnecté MetaMask après avoir changé de réseau

## 💡 Astuce : Console du Navigateur

Ouvrez la console du navigateur (F12) pour voir les messages de débogage :
- Le Chain ID détecté
- Si le contrat est trouvé
- Les erreurs détaillées

## 🚀 Après avoir résolu

Une fois que tout fonctionne :
1. Cliquez sur "Connecter MetaMask"
2. Le statut devrait passer à "Connecté" (vert)
3. Cliquez sur "Appeler ma Fonction (getValue)"
4. Vous devriez voir la valeur `100` s'afficher !

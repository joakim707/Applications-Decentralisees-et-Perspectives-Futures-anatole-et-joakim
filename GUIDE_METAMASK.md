# Guide de Configuration MetaMask pour Hardhat Local

## Étape 1 : Ajouter le Réseau Hardhat Local

1. Ouvrez MetaMask dans votre navigateur
2. Cliquez sur le menu déroulant du réseau (en haut, généralement "Ethereum Mainnet")
3. Cliquez sur "Ajouter un réseau" ou "Ajouter un réseau manuellement"

4. Remplissez les informations suivantes :
   - **Nom du réseau** : `Hardhat Local`
   - **URL RPC** : `http://127.0.0.1:8545`
   - **ID de chaîne** : `1337`
   - **Symbole de la devise** : `ETH`
   - **URL de l'explorateur de blocs** : (laissez vide)

5. Cliquez sur "Enregistrer"

## Étape 2 : Importer un Compte de Test

Quand vous lancez `npm run node`, Hardhat affiche des comptes de test avec leurs clés privées :

```
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

1. Copiez une clé privée (commence par `0x`)
2. Dans MetaMask, cliquez sur l'icône de compte (cercle en haut à droite)
3. Sélectionnez "Importer un compte"
4. Collez la clé privée
5. Cliquez sur "Importer"

⚠️ **ATTENTION** : Ces comptes sont uniquement pour le développement local. Ne les utilisez jamais avec de vrais fonds !

## Étape 3 : Vérifier la Connexion

1. Assurez-vous que le nœud Hardhat est en cours d'exécution (`npm run node`)
2. Dans MetaMask, sélectionnez le réseau "Hardhat Local"
3. Vérifiez que votre compte a des ETH (devrait être 10000 ETH)

## Dépannage

### MetaMask ne se connecte pas au réseau local

- Vérifiez que `npm run node` est toujours en cours d'exécution
- Vérifiez que l'URL RPC est exactement `http://127.0.0.1:8545`
- Essayez de redémarrer MetaMask

### Le compte n'a pas d'ETH

- Vérifiez que vous avez importé un compte depuis le terminal Hardhat
- Vérifiez que vous êtes connecté au bon réseau ("Hardhat Local")
- Redémarrez le nœud Hardhat si nécessaire

### Erreur "nonce too low"

- Allez dans Paramètres > Avancé > Réinitialiser le compte
- Cela effacera l'historique des transactions et réinitialisera le nonce

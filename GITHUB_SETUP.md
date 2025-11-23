# Instructions pour mettre le projet sur GitHub

## 📋 Étapes à suivre

### 1. Créer un nouveau dépôt sur GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite, puis **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `portfolio` (ou un nom de votre choix)
   - **Description** : "Portfolio moderne avec Next.js, Three.js et animations 3D"
   - Choisissez **Public** ou **Private** selon vos préférences
   - **NE COCHEZ PAS** "Initialize this repository with a README" (on a déjà un README)
4. Cliquez sur **"Create repository"**

### 2. Lier votre dépôt local à GitHub

Après avoir créé le dépôt, GitHub vous donnera des instructions. Utilisez ces commandes :

```bash
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub
# Remplacez portfolio par le nom de votre dépôt si différent

git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 3. Commandes complètes (copier-coller)

Si vous avez déjà fait le commit initial, utilisez simplement :

```bash
# Ajouter le remote (remplacez VOTRE_USERNAME et portfolio)
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

### 4. Vérification

Après avoir poussé, rafraîchissez la page GitHub. Vous devriez voir tous vos fichiers !

## 🔄 Commandes Git utiles pour la suite

### Ajouter des modifications
```bash
git add .
git commit -m "Description de vos modifications"
git push
```

### Voir l'état du dépôt
```bash
git status
```

### Voir l'historique des commits
```bash
git log
```

## 🚀 Déploiement automatique

Une fois sur GitHub, vous pouvez déployer automatiquement sur :

- **Vercel** : Connectez votre dépôt GitHub, Vercel détectera Next.js automatiquement
- **Netlify** : Importez votre dépôt et configurez le build

## 📝 Note

Si vous rencontrez des problèmes d'authentification avec GitHub, vous devrez peut-être :
- Configurer un Personal Access Token
- Ou utiliser SSH au lieu de HTTPS

Pour SSH :
```bash
git remote set-url origin git@github.com:VOTRE_USERNAME/portfolio.git
```


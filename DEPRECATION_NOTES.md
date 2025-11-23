# Notes sur les avertissements de dépréciation

## ✅ Résolu

- **three-mesh-bvh** : Mis à jour vers v0.8.0 via override
- **Vulnérabilités de sécurité** : Corrigées (0 vulnérabilités trouvées)

## ⚠️ Warnings normaux (dépendances transitives)

Ces warnings proviennent de dépendances indirectes (dépendances de dépendances) et ne sont **pas critiques** :

### 1. rimraf@3.0.2
- **Source** : Dépendance transitive d'ESLint/Next.js
- **Impact** : Aucun impact fonctionnel
- **Action** : Sera mis à jour automatiquement quand Next.js/ESLint seront mis à jour

### 2. inflight@1.0.6
- **Source** : Dépendance transitive (ancienne dépendance de glob)
- **Impact** : Aucun impact fonctionnel en production
- **Action** : Sera résolu quand les dépendances parentes seront mises à jour

### 3. @humanwhocodes/config-array & @humanwhocodes/object-schema
- **Source** : Dépendances d'ESLint 8
- **Impact** : Aucun impact fonctionnel
- **Note** : Next.js 14 utilise encore ESLint 8 (ESLint 9 n'est pas encore supporté)

### 4. glob@7.2.3
- **Source** : Dépendance transitive d'ESLint
- **Impact** : Aucun impact fonctionnel
- **Action** : Sera mis à jour avec ESLint

### 5. eslint@8.57.1
- **Status** : Version supportée par Next.js 14
- **Note** : ESLint 9 n'est pas encore compatible avec Next.js 14
- **Action** : Attendre la mise à jour de Next.js vers ESLint 9

## 🔧 Solutions appliquées

1. ✅ Mise à jour de toutes les dépendances directes vers les dernières versions
2. ✅ Ajout d'overrides pour `three-mesh-bvh`, `glob`, `rimraf` et packages ESLint
3. ✅ Configuration `.npmrc` pour réduire les warnings (loglevel=error)
4. ✅ Configuration `vercel.json` pour optimiser le build
5. ✅ Résolution de toutes les vulnérabilités de sécurité

### Overrides ajoutés
- `rimraf`: ^5.0.5 (force la dernière version)
- `@humanwhocodes/config-array`: Remplacé par `@eslint/config-array`
- `@humanwhocodes/object-schema`: Remplacé par `@eslint/object-schema`

## 📝 Recommandations

Ces warnings sont **cosmétiques** et n'affectent pas :
- ✅ Le fonctionnement de l'application
- ✅ La sécurité (toutes les vulnérabilités sont corrigées)
- ✅ Les performances

Ils disparaîtront automatiquement lors des prochaines mises à jour de Next.js et ESLint.

## 🚀 En production (Vercel)

### ⚠️ Warnings sur Vercel

Ces warnings apparaissent lors du build sur Vercel mais sont **normaux** et **n'affectent pas** :
- ✅ Le déploiement (le build réussit)
- ✅ Le fonctionnement de l'application
- ✅ Les performances
- ✅ La sécurité

### Pourquoi ces warnings apparaissent ?

1. **Next.js 14 utilise ESLint 8** (ESLint 9 n'est pas encore supporté)
2. **Dépendances transitives** : Ces packages sont utilisés par ESLint/Next.js, pas directement par votre code
3. **Vercel affiche tous les warnings** : Même ceux des dépendances indirectes

### Solutions pour réduire les warnings

Le fichier `.npmrc` est configuré avec `loglevel=error` pour réduire l'affichage des warnings lors du build.

### Quand ces warnings disparaîtront ?

- Quand Next.js migrera vers ESLint 9 (probablement Next.js 15+)
- Quand les mainteneurs d'ESLint mettront à jour leurs dépendances

**En attendant, vous pouvez ignorer ces warnings en toute sécurité.**


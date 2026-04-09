# AMFprep — version prête à déployer sur Vercel

## Lancer en local
```bash
npm install
npm run dev
```

## Déployer sur Vercel
1. Pousse ce dossier sur GitHub
2. Importe le repo dans Vercel
3. Vercel détectera automatiquement Next.js
4. Clique sur Deploy

## Remarque
Cette version est une **base front-end prête à déployer** avec :
- pages séparées
- navigation publique / espace membre
- verrouillage du dashboard côté interface
- simulation d'abonnement / création de compte / connexion via `localStorage`

Pour une vraie version commerciale, il faudra brancher :
- Stripe pour le paiement réel
- Supabase ou Firebase pour l'authentification
- une vraie protection serveur du dashboard

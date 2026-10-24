# ============================
# ÉTAPE 1 : Build Angular
# ============================
# Angular 22 exige Node 22.22.3, 24.15.0 ou 26 au minimum
FROM node:24-alpine AS build
WORKDIR /app

# Copie uniquement les fichiers nécessaires pour installer les dépendances, versions exactes du package-lock.json
# (les chemins partent du contexte de build, le « . » de docker build, pas du dossier docker/)
COPY package*.json ./
RUN npm ci

# Copie du reste du projet Angular
COPY . ./

# Build de l’application en mode production (par défaut)
RUN npm run build


# ============================
# ÉTAPE 2 : Serveur NGINX
# ============================
FROM nginx:1.30-alpine

# Copie de la configuration NGINX personnalisée
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copie du build Angular depuis l’étape précédente
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/training-front/browser ./

# Expose le port 80, pas obligatoire mais permet de documenter
EXPOSE 80

# Lancement du serveur NGINX, idem pas obligatoire car nginx le fait par défaut
CMD ["nginx", "-g", "daemon off;"]

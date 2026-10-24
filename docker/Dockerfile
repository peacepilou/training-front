# ============================
# ÉTAPE 1 : Build Angular
# ============================
# Angular 22 exige Node 22.22.3, 24.15.0 ou 26 au minimum
FROM node:24-alpine AS build
WORKDIR /app

# D'abord les fichiers de dépendances, seuls
COPY package*.json ./
RUN npm ci

# Puis le reste du projet
COPY . ./
RUN npm run build


# ============================
# ÉTAPE 2 : Serveur nginx
# ============================
FROM nginx:1.30-alpine

# Remplace la configuration par défaut de nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copie du build Angular depuis l'étape précédente
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/training-front/browser ./

EXPOSE 80

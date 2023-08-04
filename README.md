# Galatea

Galatea is the official front end of the PygmalionAI Website. Galatea will be the forefront of the PygmalionAI name, and provide a large user base with the latest [Pygmalion](https://huggingface.co/PygmalionAI) models along with [Aphrodite](https://github.com/PygmalionAI/aphrodite-engine).

Galatea is able to provide the best user experience possible with these great tools:

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

# Features

- Beautiful Landing Page
- Fast page loading times
- Fluid animations
- Support for all devices and browsers

# Docker

Run the services

- minio
- gotrue (supabase)
- galatea-server
- postgres

```
docker compose up -d --build
```

# Installation

## Requirements

- Operating System: Windows, Linux, or MacOS
- Node.js v16.0.0+

## Cloning the Repository

```bash
git clone https://github.com/PygmalionAI/galatea-frontend.git
cd galatea-frontend
```

## Installing Packages and Dependencies

```bash
npm install
```

## Configure .env

Navigate to the .env file, and configure the required values in your [Firebase](https://firebase.google.com/) dashboard.

## Starting the Server

In a development environment, running the server is easy.

```bashd
npm run dev
```

In a production environment, you'll first need to compile the contents of the app before they can be deployed.

```bash
npm run build
```

After you've compiled the directory, simply deploy the contents of the "dist" folder to the domain.

# Community Contributions

PRs and feedback are greatly appreciated by members of the community. If you have feedback or questions regarding Galatea, feel free to open an issue or contribue with a PR.

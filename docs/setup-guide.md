# Project Setup for Development.

The project compizes of two sections, one is the web application and one is the cli tool. Now both are written in different techstacks so they require different setup process. But it all starts with forking the repository, and cloning the forked repository in the development server.

**So for that make sure you have git installed. If not you can get installation guidelines from their [official website](https://git-scm.com/downloads).**

```bash
git clone https://github.com/debarshee2004/scaffoldgen.git
cd scaffoldgen
```

---

## Web Application

Prerequisites for this project is having node installed and pnpm installed. If not you can install nodejs via [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) and pnpm by thier [official documnetation](https://pnpm.io/installation).

**Step 01**: Lets first move into the `web-app` directory, and install the packages required for the project.

```bash
cd web-app
pnpm install
```

**Step 02**: Running the application in development server.

```bash
npm run dev
```

---

## CLI Tool

---

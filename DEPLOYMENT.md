# Deployment Guide: React + Vite to GitHub Pages

Deploying a Vite-based React single-page application to GitHub Pages involves building the static files and pushing them to the `gh-pages` branch. Follow these steps.

## Prerequisites
1. A GitHub account (https://github.com)
2. Git installed on your computer (https://git-scm.com/)

## Step 1: Configure Vite for GitHub Pages

1. Open `vite.config.js`.
2. Add a `base` property matching your repository name. If your repository will be named `my-portfolio`, the configuration should look like this:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portfolio/', // IMPORTANT: Replace with your actual repository name
  plugins: [react(), tailwindcss()],
})
```
*Note: If you name your repository exactly `yourusername.github.io`, you can leave `base: '/'`.*

## Step 2: Install gh-pages Package

Open your terminal in the project directory and install the `gh-pages` package as a development dependency:

```bash
npm install gh-pages --save-dev
```

## Step 3: Add Deployment Scripts

Open your `package.json` file and add the `predeploy` and `deploy` scripts in the `"scripts"` section:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Step 4: Initialize Git Repository

In your terminal, run the following commands:

```bash
git init
git add .
git commit -m "Initial commit of React portfolio"
```

## Step 5: Create a GitHub Repository

1. Go to GitHub and click **New repository**.
2. Name your repository (e.g., `my-portfolio`). Make sure it matches what you put in `vite.config.js`.
3. Do NOT initialize with a README, .gitignore, or license.
4. Click **Create repository**.
5. Copy the URL of your new repository.

## Step 6: Link Remote and Push

In your terminal, connect your local repository to the GitHub remote repository and push the code:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 7: Deploy the App

Now run the deployment script you added earlier:

```bash
npm run deploy
```
This command will build your React application into the `dist` folder and push that folder to a new branch called `gh-pages`.

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. On the left sidebar, scroll down and click on **Pages**.
4. Under the **Build and deployment** section, look for **Source**. Make sure "Deploy from a branch" is selected.
5. Under **Branch**, select `gh-pages` and leave the folder as `/ (root)`.
6. Click **Save**.

Your React site is now live! It may take a minute or two for GitHub to publish the site.

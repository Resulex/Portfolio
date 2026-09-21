
  # Professional Software Engineer Portfolio

  This is a code bundle for Professional Software Engineer Portfolio. The original project is available at https://www.figma.com/design/J28LSLJWSonNSarV0ylHpp/Professional-Software-Engineer-Portfolio.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  Run `npm run build` to create a production build in `dist/`, and `npm run preview` to serve that build locally.

  ## Deployment (GitHub Pages, free tier)

  Deployment is automated by `.github/workflows/deploy.yml`: every push to `main` installs
  dependencies, builds, and publishes `dist/` to GitHub Pages.

  One-time setup:

  1. Create a **public** repository on GitHub (Pages on private repos requires a paid plan) and push this project to `main`.
  2. In the repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
  3. Wait for the "Deploy to GitHub Pages" workflow run to finish. The site is published at `https://<owner>.github.io/<repo>/`.

  ### Base path

  `vite.config.ts` derives the asset base path from the `GITHUB_REPOSITORY` variable that
  GitHub Actions provides, so deploying to a differently named repository needs no config
  change. The path is `/<repo>/` for project sites; a user site repository named
  `<owner>.github.io` is detected and keeps the root `/` base. Local builds (`npm run dev`,
  `npm run build`) also use `/`.

  ### Assets

  Reference bundled assets through real imports so Vite emits them with a base-path-aware,
  hashed URL:

  ```tsx
  import profilePhoto from "@/imports/ALEXRESURRECCION_Pic-removebg-preview.png";
  ```

  Do not use literal `/src/...` paths in `src`/`href` attributes — Vite cannot rewrite them
  and they are not copied into `dist/`, so they 404 in the built site.

  ### Troubleshooting

  **`Error: Get Pages site failed ... Not Found` in the "Setup Pages" step.** The repository
  has no Pages site using the `GitHub Actions` source, so the Pages API returns 404. Set
  **Settings → Pages → Source** to **GitHub Actions**, then re-run the workflow. The
  `enablement` input of `actions/configure-pages` cannot fix this with the default token —
  the action requires a personal access token with `repo` scope, or a GitHub App with
  `administration:write` and `pages:write`. If the Pages settings page offers no source
  selector, the repository is private: GitHub Pages for private repositories requires a
  paid plan, so make the repository public or deploy to a host that allows private
  repositories on its free tier (Cloudflare Pages, Vercel, Netlify).

  **`Node 20 is being deprecated` warning.** Informational — the runner is telling you an
  action still declares the Node 20 runtime. The workflow pins Node 24 majors, so a new
  occurrence means an action needs a version bump; do not set
  `ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION`, as Node 20 is removed from runners on
  September 23, 2026.

  
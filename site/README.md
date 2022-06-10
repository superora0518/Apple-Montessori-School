# Apple Montessori Project

## Stack

 Next.js 12+, TypeScript, Tailwind CSS 3, Sanity. 
 
### Other:

ESLint, Prettier
Husky, 
Lint-Staged, Commitlint 
Jest + Testing Library
StoryBook

### Requirements

- Node.js 16+ and npm

### Getting started

Run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.


### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```


You can create an optimized production build with:

```shell
npm run build-prod
```

All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. The test for the `pages` folder are under the `__tests__` folder.


### Developer notes

This repository is using [Commitlint](https://commitlint.js.org/#/concepts-commit-conventions) conven tions for `git commit` messages. Please follow them.

[Conventional Commits Cheat Sheet by albelop](https://cheatography.com/albelop/cheat-sheets/conventional-commits/)


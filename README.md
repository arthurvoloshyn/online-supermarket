# Online supermarket

## Run the project

```
yarn install - install dependencies
yarn start:dev - run server + frontend project in dev mode
```

## Scripts

- `yarn start:dev` - Run frontend project + backend
- `yarn dev:server` - Run backend server
- `yarn start:client` - Run frontend project
- `yarn build:prod:client` - Build in prod mode
- `yarn build:dev:client` - Build in dev mode (non-minified)
- `yarn lint:client` - Lint check for ts files
- `yarn test:client` - Run unit tests with jest
- `yarn storybook:client` - Run Storybook
- `yarn storybook:build:client` - Build Storybook

## Planned features

- restaurant menu:
  - different sections
  - filters
  - add items to cart
- shopping cart:
  - display items
  - remove items
  - proceed to checkout
- checkout
  - enter additional info
  - show success

## Planned tech

- BE / FE in one repo - to keep things simpler
- simple REST API backend - just for demo purposes
- CRA Web App - for quick start with modern JS bundling, React etc
- React for View layer
- RxJS for reactive connection to avoid data pumping
- TypeScript
- Repository / Use Case / Presenter / View / Wireframe split (Clean Architecture inspired)
- Storybook for Views
- Unit / E2E / Screenshot testing

# Microsite template

## To start developing

```
yarn install -g gatsby
git@github.com:jimbofreedman/gatsby-bfb-bootstrap.git
cd gatsby-bfb-bootstrap
yarn install
gatsby develop
```

## To set up deployment

```
yarn install -g amplify
amplify init # You'll need to set up an AWS profile with IAM key/secret
amplify configure
amplify add hosting
```

## To publish

```
amplify publish
```

Amplify will tell you where to look

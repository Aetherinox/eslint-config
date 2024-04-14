# eslint-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Aetherinox/eslint-config/npm-tests.yml?logo=github&label=Tests&color=%23de1f6f)
![Codecov](https://img.shields.io/codecov/c/github/Aetherinox/eslint-config?token=MPAVASGIOG&logo=codecov&logoColor=FFFFFF&label=Coverage&color=354b9e)
[![NPM package](https://img.shields.io/npm/v/eslint-config)](https://npm.im/eslint-config)

<br />

---

<br />

## About
This package is a custom ESLint configuration for JavaScript/TypeScript modules, utilized for other packages such as [xSumJS](https://github.com/Aetherinox/xsumjs)

<br />

### Peer Dependencies
- @typescript-eslint/eslint-plugin
- eslint
- eslint-plugin-ava
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-tsdoc

<br />

---

<br />

## Install
```
npm install --save-dev @Aetherinox/eslint-config eslint eslint-plugin-{ava,import,node,prettier,promise} prettier
```

<br />

---

<br />

## Usage
The following are usage examples for implementation:

<br />

### Javascript
Implementation with javascript:

```json
{
  extends: [
    // . . .
    '@aetherinox'
  ]
}
```

<br />

### Typescript
Implementation with typescript:

```json
{
  extends: [
    // . . .
    '@aetherinox/eslint-config/typescript'
  ]
}
```
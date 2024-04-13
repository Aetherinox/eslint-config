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
    '@Aetherinox'
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
    '@Aetherinox/eslint-config/typescript'
  ]
}
```
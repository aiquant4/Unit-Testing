## step 1:
```bash
mkdir my-jest-project
cd my-jest-project
npm init -y
```
## step 2:
```bash
npm install --save-dev jest

```
## step 3:
Goto package.json file
```bash
{
  "scripts": {
    "test": "jest"
  }
}
```
## Writing Your First Test
Create a new directory called tests and add a test file, for example, `sum.test.js`
```bash
mkdir tests
touch tests/sum.test.js
```

## Running Your Tests
To run your tests, use the following command:
```bash
npm test
```
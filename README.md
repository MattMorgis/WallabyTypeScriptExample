# Wallaby.js TypeScript Example

### Prerequisites
* [Node v8.2.1 or higher](https://nodejs.org/en/) and the node package manager (NPM) must be installed on your machine.

Clone this repository.
```bash
$ git clone https://github.com/MattMorgis/WallabyTypeScriptExample.git
```

### Set Environment Variables
Copy the `.env-sample` file to your own `.env` dotfile. This file will be ignored by Git.
```bash
$ cp .env-sample .env
```

### Start the web server
```bash
$ npm start
```

### Running Tests

Unit tests are written and run by Facebook's [Jest](http://facebook.github.io/jest/)

```bash
$ npm test
```
The project also supports running tests in-line your editor as you code via [Wallaby.js](https://wallabyjs.com)

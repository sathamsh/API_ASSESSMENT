<h1 align="center">API Test Automation using MOCHA Framework</h1>

###

<p align="left">It can be used to automate API calls such as GET, POST, and PUT with the Axios tool.</p>

###

<h3 align="left">✅ Requirements</h3>

###

<h6 align="left">Before starting 🏁, make sure you have NodeJS version 14+ installed on your system.</h6>

###

[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/) [![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

---

### Clone Repository

```bash
1. git clone https://github.com/sathamsh/API_ASSESSMENT.git
2. Navigate to `API_ASSESSMENT`
```

---

## Installation

Install dependencies with npm:

```bash
  npm install
```

Run test:

> By default test will generate mochawesome report folder

```bash
  npm run test
```

Report Paths:

```bash
  reports/mochawesome.html
```

---

#### Tech stacks:

[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/) [![Axios](https://img.shields.io/badge/-Axios-07BA82?logoColor=white)](https://github.com/visionmedia/axios)

---

## Folder Structure:

![App Screenshot](https://i.ibb.co/yFCnWm1/Screenshot-2023-07-22-at-11-21-55-PM.jpg)

```bash
- /src
    - /resource
        - userPayload.ts
    - /service
        - endpoints.ts
    - /test
        - api.ts
    - /utils
        - apicalls.ts
        - loggers.ts
- .env
- package.json
- README.md
- tsconfig.json
```

### Brief

1. `/resource/userPayload.ts` - This code defines a function to generate a random user payload, and it uses the faker library to create realistic fake data for the user's first name, last name, avatar, user ID, email address and returning it.

2. `/service/endpoints.ts` - This code defines an enum endpoints that provides the endpoints of the API url.

3. `/test/api.ts` - This directory contains test scripts for API testing. Each test file should have a descriptive name that reflects the API endpoint being tested.

4. `/utils/apicalls.ts` - The code wraps the Axios functionality in three functions to provide a simple way to make GET, POST, and PUT requests using Axios. These functions handle the asynchronous nature of Axios by returning Promises relating to the response data and take away the complexity of building and sending requests.

5. `/utils/loggers.ts` - This function can be useful for including extra details, logs, or debugging information directly in the test report rather enetring it into the console, making it more informative and helpful for test analysis.

6. `.env` - This file stores the base URL of the API.

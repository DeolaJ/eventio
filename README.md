# Eventio

Web application that allows registered users to sign up for and create events.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

### Getting Started

    git clone https://github.com/deolaj/eventio.git
    cd eventio
    yarn install

### Development

To run the local server,

    yarn start

The `prettier`, `stylelint`, and `eslint` libraries are used for formating and error checking. Install their corresponding vscode extensions to use with VSCode.

Using the `.sample-env` as a reference, create a local `env` file with your API Key.

### Production

To generate build files for production,

    yarn build

### Test

Unit and Integration tests were written using Jest and Enzyme.
To run these tests

    yarn test

End to end tests were written using Cypress. Test files are in `cypress/integration/`. First, ensure your development server is running.
To run tests

    yarn test-end

Then select the test to run in the Cypress test runner.

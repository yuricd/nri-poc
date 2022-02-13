# English learning PoC

This project implements an application that aims to provide an enjoyable way to learn English.
The user can choose his/her interests, and the questions are assembled based on the given choices.

## Running

The project was made using a CRA boilerplate and using `yarn` as package manager. However, feel free to use `npm`.

`yarn start` will run and open the web app in port `3000`.

No other requirements needed. The backend and storage are both mocked internally using data structures, therefore there's no need to setup anything else.

## Testing

The application has some unit and integrations tests that can be run with `yarn test`.
I've also implemented some E2E that can be run with `yarn test:e2e`.

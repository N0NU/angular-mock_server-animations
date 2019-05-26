#json-server
The project has used json-server npm library as a mock server for generating mock APIs, GET DELETE and POST request are used.
To run json-server `npm install -g json-server` it will install the json-server globally then create a json file in your angular or react root directory, from there through cmd run `json-server your_json_file_name.json` this will start the server for example there is mock_data.json file in this repo so I will use command `json-server mock_data.json` to run the server.

#APIs
GET http://localhost:3000/cards to fetch all cards
DELETE http://localhost:3000/cards/card_id to delete certain card
POST http://localhost:3000/cards data in req body to add card

#Angular Material
Angular Material is an angular liberary of pre built cool elements. I have used Mat toolbar module of header bar, Mat Card module to show data,  Mat grid list module to arrange data in grid format, Mat icon module for icons and Mat button module. 

#Angular Animations
I have used fadeinout angular animation, so whenever a card is added or deleted, it will refresh the list and list will fade in to the frontend

#How to Use
First clone or download the repo, then run `npm install` in the clone directory to install dependencies. After installation completes run `ng serve`.

# AngularApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

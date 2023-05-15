# Test Automation Assessment
_____________________________

These tests were created as a challenge to automate three scenarios using cypress.

### Scenarios

- TC001 - Login (Positive) Test
- TC002 - Login (Negative) Tests
- TC003 - Validate invoice details

### Author
Luidson Lucas Bortolatto


### Important Informations

To automate these scenarios I have created a simple structure, keeping login tests in a file and invoice tests in a separeted file and using "describe" and "it".

I have created three custom commands for repeated and generic actions (.ie type username and password) on /support/commands.js.

For Login scenarios I have used custom commands and cypress commands to write text.

For Invoice Testing, as there are more number of validations I decided to use some alias and test using cypress and custom commands (To create a page objects could be a option for this). However besides the cypress documentation does not prohibit to create Page Objects they think it is not needed. I have worked in some projects that used to implement Page Objects and another projects that doesn't use. It is a valid discussion.

Ps: The "TC002 - Login (Negative) Tests" is failing because as it was specified on test assessment description, the test should pass when user types wrong user and/or password. However, in the data provided on document, the latest data on the table specified have user and password correct. I have implemented as described.

For "TC003 - Validate invoice details" I have identified some typos on following data in Invoice Details page:

**On Billing Details table:** The column name on table is "Deposit Now Deposit Nowt". However on test assessment document data table the name is "Deposit Now"

**On Booking/Stay details table:** On table "Check-in" and "Check-out" have dash. However on on test assessment document data table names are "Check In" and "Check Out". For both scenarios I have considered as a typo and used the names that are in the application.

### How to execute the tests

#### Pre-conditions
- NodeJS (It was used version 20.x)
- Google Chrome installed

#### Steps
1. Clone this repository;
2. Run `npm install` and wait for installation finish;
3. Optional: Open the project on your favorite IDE;
3. Run tests using command line running `npm run tests` or using cypress tool `npm run cypress:open`



 
For questions please feel free to contact me by email: lucasbortolatto2@hotmail.com
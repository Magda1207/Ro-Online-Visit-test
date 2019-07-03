# Ro-Online-Visit-test

To run the test use cmd command:
testcafe firefox EDOnlineVisit.js

Test scenarios:
1. 'E2E scenario' - test runs through Online Visit process (from the beginning until 'upload picture' step)
2. 'Links check' scenario - test verifies if links direct to proper screens
3. 'Validation check' scenario - test verifies if correct validation messages are displayed when no value / incorrect value is entered into input field

*Scenarios don't cover full path, all links, all input fields (due to limited amount of time for the exercise)*

Known issues:
1. Start page is set to: `https://start.ro.co/roman/ed/?utm_expid=.O9vTFADVROq81tYvJb_UdQ.0&utm_referrer=` instead of  `https://start.ro.co/roman/ed/`.<br>
This is due to redirection that happens when loading `https://start.ro.co/roman/ed/` and 'beforeunload' event fired (application issue?)

2. Sometimes loading of application takes too long and script fails. Awaiting timeout may need to be increased (to be investigated)


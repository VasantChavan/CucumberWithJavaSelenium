$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/createNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "varify new account is created",
  "description": "",
  "id": "varify-new-account-is-created",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter username as \"Mayuri_257\" and password as \"Mayuri$257\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "titile of the home page is \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "LoginStepDefination.titile_of_the_login_page_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 24
    },
    {
      "val": "Mayuri$257",
      "offset": 53
    }
  ],
  "location": "LoginStepDefination.user_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_butten()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.titile_of_the_home_page_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "verifry new account creatation",
  "description": "",
  "id": "varify-new-account-is-created;verifry-new-account-creatation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user should be on home page \"CRMPRO\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "verify user name as \"Mayuri Deshmukh\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "navigate to new contact page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter firstname as \"Gaurav\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enetr lastname as \"Pate\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter company name as \"U to Solutions\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CRMPRO",
      "offset": 29
    }
  ],
  "location": "NewAccountStepDef.user_should_be_on_home_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri Deshmukh",
      "offset": 21
    }
  ],
  "location": "NewAccountStepDef.verify_user_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAccountStepDef.navigate_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaurav",
      "offset": 20
    }
  ],
  "location": "NewAccountStepDef.enter_firstname_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pate",
      "offset": 19
    }
  ],
  "location": "NewAccountStepDef.enetr_lastname_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "U to Solutions",
      "offset": 23
    }
  ],
  "location": "NewAccountStepDef.enter_company_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAccountStepDef.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
});
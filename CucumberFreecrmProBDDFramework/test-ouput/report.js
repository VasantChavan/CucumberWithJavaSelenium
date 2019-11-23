$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vasant/workspace/CucumberFreecrmProBDDFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCrm Pro login smoke scenarios",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios",
  "keyword": "Feature"
});
formatter.write("setting up properties path");
formatter.write("done with system variable path setting");
formatter.before({
  "duration": 3910500,
  "status": "passed"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 5379159800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Free Crm Pro login page",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter username as \"Mayuri_257\" and password as \"Mayuri$257\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "titile of the home page is \"CRMPRO\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 7726441800,
  "status": "passed"
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
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 330389500,
  "status": "passed"
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
formatter.write("Enter valid username and valid password to the text username and password text feild..");
formatter.result({
  "duration": 767340500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_butten()"
});
formatter.write("Click on login btn on login page ...");
formatter.result({
  "duration": 5933428700,
  "status": "passed"
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
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 15718100,
  "status": "passed"
});
formatter.write("afterMethod().........");
formatter.write("quit the browser instance ...........");
formatter.after({
  "duration": 921819200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify Free Crm Pro login page sanity testcases",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter username as \"\u003cusername\u003e\" and password as \"\u003cuserpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "titile of the home page is \"\u003cpageTitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;",
  "rows": [
    {
      "cells": [
        "username",
        "userpass",
        "pageTitle"
      ],
      "line": 18,
      "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;1"
    },
    {
      "cells": [
        "Mayuri_257",
        "Mayuri$257",
        "CRMPRO"
      ],
      "line": 19,
      "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;2"
    },
    {
      "cells": [
        "Mayuri_2571",
        "Mayuri$257",
        "CRMPRO"
      ],
      "line": 20,
      "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;3"
    },
    {
      "cells": [
        "Mayuri_257",
        "Mayuri$2571",
        "CRMPRO"
      ],
      "line": 21,
      "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.write("setting up properties path");
formatter.write("done with system variable path setting");
formatter.before({
  "duration": 3385700,
  "status": "passed"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 2974166600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Free Crm Pro login page sanity testcases",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter username as \"Mayuri_257\" and password as \"Mayuri$257\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "titile of the home page is \"CRMPRO\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 6602691500,
  "status": "passed"
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
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 54151900,
  "status": "passed"
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
formatter.write("Enter valid username and valid password to the text username and password text feild..");
formatter.result({
  "duration": 480378100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_butten()"
});
formatter.write("Click on login btn on login page ...");
formatter.result({
  "duration": 4688980900,
  "status": "passed"
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
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 13411200,
  "status": "passed"
});
formatter.write("afterMethod().........");
formatter.write("quit the browser instance ...........");
formatter.after({
  "duration": 1158192200,
  "status": "passed"
});
formatter.write("setting up properties path");
formatter.write("done with system variable path setting");
formatter.before({
  "duration": 2919600,
  "status": "passed"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 3139209900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Free Crm Pro login page sanity testcases",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter username as \"Mayuri_2571\" and password as \"Mayuri$257\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "titile of the home page is \"CRMPRO\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 7103056700,
  "status": "passed"
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
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 55514500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_2571",
      "offset": 24
    },
    {
      "val": "Mayuri$257",
      "offset": 54
    }
  ],
  "location": "LoginStepDefination.user_enter_username_as_and_password_as(String,String)"
});
formatter.write("Enter valid username and valid password to the text username and password text feild..");
formatter.result({
  "duration": 618952200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_butten()"
});
formatter.write("Click on login btn on login page ...");
formatter.result({
  "duration": 2237488500,
  "status": "passed"
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
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 269234700,
  "status": "passed"
});
formatter.write("afterMethod().........");
formatter.write("quit the browser instance ...........");
formatter.after({
  "duration": 1258338400,
  "status": "passed"
});
formatter.write("setting up properties path");
formatter.write("done with system variable path setting");
formatter.before({
  "duration": 934700,
  "status": "passed"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 3625258500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Free Crm Pro login page sanity testcases",
  "description": "",
  "id": "freecrm-pro-login-smoke-scenarios;verify-free-crm-pro-login-page-sanity-testcases;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "titile of the login page is \"CRMPRO\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter username as \"Mayuri_257\" and password as \"Mayuri$2571\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on login butten",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "titile of the home page is \"CRMPRO\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 7551140400,
  "status": "passed"
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
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 47827300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayuri_257",
      "offset": 24
    },
    {
      "val": "Mayuri$2571",
      "offset": 53
    }
  ],
  "location": "LoginStepDefination.user_enter_username_as_and_password_as(String,String)"
});
formatter.write("Enter valid username and valid password to the text username and password text feild..");
formatter.result({
  "duration": 662485000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_butten()"
});
formatter.write("Click on login btn on login page ...");
formatter.result({
  "duration": 2200026700,
  "status": "passed"
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
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 219274500,
  "status": "passed"
});
formatter.write("afterMethod().........");
formatter.write("quit the browser instance ...........");
formatter.after({
  "duration": 1111885300,
  "status": "passed"
});
});
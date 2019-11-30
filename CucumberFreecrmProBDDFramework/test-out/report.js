$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deals data creations",
  "description": "",
  "id": "deals-data-creations",
  "keyword": "Feature"
});
formatter.write("setting up properties path");
formatter.write("done with system variable path setting");
formatter.before({
  "duration": 1951500,
  "status": "passed"
});
formatter.before({
  "duration": 26018964500,
  "status": "passed"
});
formatter.write("beforeMethod............");
formatter.before({
  "duration": 623400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify user is able to create deals",
  "description": "",
  "id": "deals-data-creations;verify-user-is-able-to-create-deals",
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
  "name": "titile of the login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "Mayuri_257",
        "Mayuri$257"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "uesr is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters deals deatils",
  "rows": [
    {
      "cells": [
        "test deals",
        "1000",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefination.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 33951972500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.titile_of_the_login_page_is_Free_Crm()"
});
formatter.write("Title of the login page is : CRMPRO - CRM software for customer relationship management, sales, and support.");
formatter.write("verified the login page title ");
formatter.result({
  "duration": 277075200,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_enter_username_and_password(DataTable)"
});
formatter.write("Enter valid username and valid password");
formatter.result({
  "duration": 3504227300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_click_on_login_button()"
});
formatter.write("Click on login btn ...");
formatter.result({
  "duration": 70443662400,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.uesr_is_on_homepage()"
});
formatter.write("User should be on home page with title as :CRMPRO");
formatter.write("Title of the home page is : CRMPRO");
formatter.write("Title of the homepage is verified ......");
formatter.result({
  "duration": 35107100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_moves_to_new_deals_page()"
});
formatter.write("navigating to deals page..");
formatter.write("user should be on new deals page..");
formatter.result({
  "duration": 597158700,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.user_enters_deals_deatils(DataTable)"
});
formatter.result({
  "duration": 10871070300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefination.close_the_browser()"
});
formatter.write("close the browser..");
formatter.write("browser is close the browser..");
formatter.result({
  "duration": 1322040600,
  "status": "passed"
});
formatter.after({
  "duration": 53600,
  "status": "passed"
});
});
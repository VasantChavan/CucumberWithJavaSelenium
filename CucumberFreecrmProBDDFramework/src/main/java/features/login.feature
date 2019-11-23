Feature: FreeCrm Pro login smoke scenarios 

Scenario: Verify Free Crm Pro login page 
	Given user is already on Login page 
	When titile of the login page is "CRMPRO" 
	Then user enter username as "Mayuri_257" and password as "Mayuri$257" 
	Then user click on login butten 
	And titile of the home page is "CRMPRO" 
	
Scenario Outline: Verify Free Crm Pro login page sanity testcases 
	Given user is already on Login page 
	When titile of the login page is "CRMPRO" 
	Then user enter username as "<username>" and password as "<userpass>" 
	Then user click on login butten 
	And titile of the home page is "<pageTitle>" 
	
	Examples: 
		|username 		| userpass 		| pageTitle 	|
		|Mayuri_257		|Mayuri$257		|CRMPRO 		|
		|Mayuri_2571	|Mayuri$257		|CRMPRO			|
		|Mayuri_257		|Mayuri$2571	|CRMPRO			|
Feature: Login freecrmpro smoke test cases 

Scenario: Verify Login to free crm pro with valid test data 

	Given open the browser as "Chrome" 
	And navigate to url as "https://www.crmpro.com" 
	When I enter username as "Mayuri_257" 
	And I enter password as "Mayuri$257" 
	Then I clicked on Login button 
	Then I should be on homepage of an application as "CRMPRO" 
	
Scenario Outline: Verify Login to free crm pro with data driven approach 
	Given open the browser as "Chrome" 
	And navigate to url as "https://www.crmpro.com" 
	When I enter username as "<username>" 
	And I enter password as "<userpass>" 
	Then I clicked on Login button 
	Then I should be on homepage of an application as "<pageTitle>" 
	
	Examples: 
		|username	| userpass		| pageTitle	|
		||Mayuri_257|Mayuri$257		|CRMPRO		|
		|Mayuri_2571|Mayuri$257		|CRMPRO		|
		
		
		
		
		
Feature: Deals data creations 

Scenario: verify user is able to create deals 
	Given user is already on Login page 
	When titile of the login page is Free Crm 
	Then user enter username and password
		|Mayuri_257   | Mayuri$257 | 
	Then user click on login button
	Then uesr is on homepage
	Then user moves to new deals page
	Then user enters deals deatils
	|test deals | 1000  | 50	| 10  |
	Then close the browser
	
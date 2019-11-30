package stepDefination;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driverManager.WebDriverManager;

public class DealsStepDefination {

	WebDriverManager browserManager;
	WebDriver driver;
	Scenario scn;

	// Hooks
	@Before
	public void beforeMethod(Scenario scn) {
		this.scn = scn;
		scn.write("beforeMethod............");
		browserManager = WebDriverManager.getInstanceOfWebDriverManager();
		driver = browserManager.getDriver();
	}
	
	@Given("^user is already on Login page$")
	public void user_is_already_on_Login_page() {
		driver.get("https://www.crmpro.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^titile of the login page is Free Crm$")
	public void titile_of_the_login_page_is_Free_Crm() {
		
		String title = driver.getTitle();
		scn.write("Title of the login page is : " + title);
		Assert.assertTrue(title.contains("CRMPRO"));
		scn.write("verified the login page title ");
	}

	@Then("^user enter username and password$")
	public void user_enter_username_and_password(DataTable credentials) {
		
		scn.write("Enter valid username and valid password");
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() {
		scn.write("Click on login btn ...");
		driver.findElement(By.xpath("//input[@type='submit' or @value='Login']")).click();
	}

	@Then("^uesr is on homepage$")
	public void uesr_is_on_homepage() {
		scn.write("User should be on home page with title as :CRMPRO");
		String title = driver.getTitle();
		scn.write("Title of the home page is : " + title);
		Assert.assertTrue(title.contains("CRMPRO"));
		scn.write("Title of the homepage is verified ......");

	}

	@Then("^user moves to new deals page$")
	public void user_moves_to_new_deals_page() {
	
		scn.write("navigating to deals page..");
		driver.switchTo().frame("mainpanel");
		WebElement deals = driver.findElement(By.xpath("//a[text()='Deals']"));
		WebElement newDeals = driver.findElement(By.xpath("//a[text()='New Deal']"));
		new Actions(driver).moveToElement(deals).build().perform();
		newDeals.click();
		scn.write("user should be on new deals page..");

	}

	@Then("^user enters deals deatils$")
	public void user_enters_deals_deatils(DataTable dealsDetails) {
		
		List<List<String>> dealsData = dealsDetails.raw();
		driver.findElement(By.id("title")).sendKeys(dealsData.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(dealsData.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(dealsData.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(dealsData.get(0).get(3));
		
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		scn.write("close the browser..");		
		browserManager.CloseDriver();
		scn.write("browser is close the browser..");
	}

}

package stepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driverManager.WebDriverManager;

public class LoginStepDefination {

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

	@When("^titile of the login page is \"([^\"]*)\"$")
	public void titile_of_the_login_page_is(String pageTitle) {

		String title = driver.getTitle();
		scn.write("Title of the login page is : " + title);
		Assert.assertTrue(title.contains(pageTitle));
		scn.write("verified the login page title ");

	}

	@Then("^user enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enter_username_as_and_password_as(String uname, String upass) {
		scn.write("Enter valid username and valid password to the text username and password text feild..");
		driver.findElement(By.name("username")).sendKeys(uname);
		driver.findElement(By.name("password")).sendKeys(upass);

	}

	@Then("user click on login butten")
	public void user_click_on_login_butten() {
		scn.write("Click on login btn on login page ...");
		driver.findElement(By.xpath("//input[@type='submit' or @value='Login']")).click();
	}

	@Then("^titile of the home page is \"([^\"]*)\"$")
	public void titile_of_the_home_page_is(String pageTitle) {

		scn.write("User should be on home page with title as :CRMPRO");
		String title = driver.getTitle();
		scn.write("Title of the home page is : " + title);
		Assert.assertTrue(title.contains(pageTitle));
		scn.write("Title of the homepage is verified ......");
	}

	/*
	 * WebDriver driver;
	 * 
	 * Scenario scn;
	 * 
	 * // Hooks
	 * 
	 * @Before public void beforeMethod(Scenario scn) { this.scn = scn;
	 * scn.write("beforeMethod............");
	 * System.setProperty("webdriver.chrome.driver",
	 * "C:\\Users\\vasant\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe"
	 * ); driver = new ChromeDriver(); }
	 * 
	 * @After public void afterMethod(Scenario scn) { this.scn = scn;
	 * scn.write("afterMethod().........");
	 * scn.write("quit the browser instance ..........."); driver.quit(); }
	 * 
	 * @Given("^user is already on Login page$") public void
	 * user_is_already_on_Login_page() { driver.get("https://www.crmpro.com");
	 * driver.manage().window().maximize();
	 * driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); }
	 * 
	 * @When("^titile of the login page is FreeCrmPro$") public void
	 * titile_of_the_login_page_is_FreeCrmPro() {
	 * 
	 * String title = driver.getTitle();
	 * scn.write("Title of the login page is : " + title);
	 * Assert.assertTrue(title.contains("CRMPRO"));
	 * scn.write("verified the login page title "); }
	 * 
	 * @Then("^user enter user and password$") public void
	 * user_enter_user_and_password() { scn.
	 * write("Enter valid username and valid password to the text username and password text feild.."
	 * ); driver.findElement(By.name("username")).sendKeys("Mayuri_257");
	 * driver.findElement(By.name("password")).sendKeys("Mayuri$257"); }
	 * 
	 * @Then("^user click on login butten$") public void
	 * user_click_on_login_butten() {
	 * scn.write("Click on login btn on login page ...");
	 * driver.findElement(By.xpath("//input[@type='submit' or @value='Login']"))
	 * .click(); }
	 * 
	 * @Then("^user is on home page$") public void user_is_on_home_page() {
	 * scn.write("User should be on home page with title as :CRMPRO"); String
	 * title = driver.getTitle(); scn.write("Title of the home page is : " +
	 * title); Assert.assertTrue(title.contains("CRMPRO"));
	 * scn.write("Title of the homepage is verified ......"); }
	 */

}

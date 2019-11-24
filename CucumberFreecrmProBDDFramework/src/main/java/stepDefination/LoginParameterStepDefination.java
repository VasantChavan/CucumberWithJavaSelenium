package stepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginParameterStepDefination {

	public WebDriver driver;
	public Scenario scn;

	@Before
	public void setUp(Scenario s) {
		this.scn = s;
		scn.write("setting up properties path");
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\vasant\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		scn.write("done with system variable path setting");

	}
	
	@Given("^open the browser as \"([^\"]*)\"$")
	public void open_the_browser_as(String brname) {

		if (brname.equals("Chrome")) {

			scn.write("launch the chrome browser");
			driver = new ChromeDriver();

		} else if (brname.equals("Firefox")) {
			scn.write("launch the Firefox browser");
			driver = new FirefoxDriver();
		}
		scn.write("maximize the browser ");
		driver.manage().window().maximize();

	}

	@Given("^navigate to url as \"([^\"]*)\"$")
	public void navigate_to_url_as(String url) {
		scn.write("navigating to url :" + url);
		driver.get(url);
		scn.write("wait to load the application for 10 sec ");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		scn.write("retrive the login page title ");
		String lptitle = driver.getTitle();
		scn.write("Title of the login page is :" + lptitle);
		Assert.assertTrue(lptitle.contains("CRMPRO"));
		scn.write("Verified the login page contain as CRMPRO");
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String uname) {
		scn.write("enter username to the username text field ");
		driver.findElement(By.name("username")).sendKeys(uname);

	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String upass) {
		scn.write("enter user password to the password text field ");
		driver.findElement(By.name("password")).sendKeys(upass);

	}

	@Then("^I clicked on Login button$")
	public void i_clicked_on_Login_button() {
		scn.write("click on login btn");
		driver.findElement(By.xpath("//input[@type='submit' or @value='Login']")).click();

	}

	@Then("^I should be on homepage of an application as \"([^\"]*)\"$")
	public void i_should_be_on_homepage_of_an_application_as(String hptitle) {
		scn.write("verify user is on home with title : " + hptitle);
		String acTitle = driver.getTitle();
		Assert.assertEquals(hptitle, acTitle);
		scn.write("Title of the homepage is verified as : " + hptitle);
	}

}

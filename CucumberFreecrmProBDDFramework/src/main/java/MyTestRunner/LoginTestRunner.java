package MyTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="classpath:features\\createNewAccount.feature",
		//features="C:\\Users\\vasant\\workspace\\CucumberFreecrmProBDDFramework\\src\\main\\java\\features",
			glue={"stepDefination"},
			plugin={"pretty"},
			dryRun=false,
			monochrome=true
			/*plugin={"pretty","html:test-output","json:json_output//cucumber.json",
					"junit:junit_output//cucumber.xml"
					,"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
		
			monochrome=true,
			dryRun=false*/
		)

public class LoginTestRunner {

}

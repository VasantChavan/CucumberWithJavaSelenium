package MyTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		//"html:test-output","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
		features = "classpath:features\\deals.feature",
		// features="C:\\Users\\vasant\\workspace\\CucumberFreecrmProBDDFramework\\src\\main\\java\\features",
		glue = { "stepDefination" },
		format={"pretty","html:test-out"}
		//plugin = { "pretty", "html:test-output"} //"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:" },
		,monochrome = true,
		dryRun = false
		
		)

public class LoginTestRunner {

}

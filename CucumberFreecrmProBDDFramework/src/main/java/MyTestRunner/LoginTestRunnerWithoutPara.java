package MyTestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "C:\\Users\\vasant\\workspace\\CucumberFreecrmProBDDFramework\\src\\main\\java\\features\\login.feature",
		glue = {"stepDefination" }, 
		plugin = { "pretty", "html:test-ouput","junit:xml-report//cucumber.xml" },
		monochrome = true,
		dryRun = false,
		strict = false
// tags={"@negative"}

)
public class LoginTestRunnerWithoutPara {

}

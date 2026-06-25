import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({

    CalculatorAdditionTest.class,
    CalculatorMultiplicationTest.class

})

public class AllTests {

}
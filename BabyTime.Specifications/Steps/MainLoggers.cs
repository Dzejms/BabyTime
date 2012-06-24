using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using TechTalk.SpecFlow;
using WatiN.Core;

namespace BabyTime.Specifications.Steps
{
    [Binding]
    public class MainLoggers
    {
        [Given(@"I am on the main page")]
        public void GivenIAmOnTheMainPage()
        {
            Browser browser = new IE();
            browser.GoTo("http://localhost:61571/");
            browser.FindText(new Regex(@"BABYTI.ME"));
        }

        [When(@"I press the Diaper button")]
        public void WhenIPressTheDiaperButton()
        {
            ScenarioContext.Current.Pending();
        }

        [Then(@"the diaper clock resets")]
        public void ThenTheDiaperClockResets()
        {
            ScenarioContext.Current.Pending();
        }

        [Then(@"a diaper event is logged on the back end\.")]
        public void ThenADiaperEventIsLoggedOnTheBackEnd_()
        {
            ScenarioContext.Current.Pending();
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using NUnit.Framework;
using TechTalk.SpecFlow;
using WatiN.Core;

namespace BabyTime.Specifications.Steps
{
    [Binding]
    public class MainLoggers
    {
        private Browser browser;

        [BeforeScenario()]
        private void SetUp()
        {
            if (System.Configuration.ConfigurationManager.AppSettings["Environment"] == "Test")
                Assert.Ignore();
            browser = new IE();
        }

        [Given(@"I am on the main page")]
        public void GivenIAmOnTheMainPage()
        {
            browser.GoTo("http://localhost:61571/");
            string headerText = browser.FindText(new Regex(@"BABYTI.ME"));
            Assert.AreEqual("BABYTI.ME", headerText);
        }

        [When(@"I press the Diaper button")]
        public void WhenIPressTheDiaperButton()
        {
            const string buttonName = "diaperButton";
            Button diaperButton = browser.Button(buttonName);
            if (!diaperButton.Exists)
                Assert.Fail("Missing {0} button", buttonName);
            diaperButton.Click();
        }

        [Then(@"the diaper clock resets")]
        public void ThenTheDiaperClockResets()
        {
            string diaperTextValue = browser.TextField("diaperTimerTextBox").Value;
            if (String.IsNullOrEmpty(diaperTextValue))
                Assert.Fail("Diaper Timer text box was empty!");
            TimeSpan span = TimeSpan.Parse(diaperTextValue);
            Assert.True(span.Seconds > 0 && span.Seconds < 5);

        }

        [Then(@"a diaper event is logged on the back end\.")]
        public void ThenADiaperEventIsLoggedOnTheBackEnd_()
        {
            ScenarioContext.Current.Pending();
        }

        [AfterScenario()]
        public void TearDown()
        {
            browser.Close();
        }

    }
}

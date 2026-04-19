Feature: Playwright Official Website

  Scenario: Verify Playwright homepage loads correctly
    Given I navigate to the Playwright website
    Then the page title should contain "Playwright"

Feature: to navigate around a flight booking site called ixigo

Scenario: choosing a flight

Given user opens ixigo flight booking site
When user enters the details of their preferred flight
And submits that information
Then user will get the flights with the given filters 


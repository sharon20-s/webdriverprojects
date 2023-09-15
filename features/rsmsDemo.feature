Feature: To login and navigate through different scenarios

Scenario Outline: To login to rajagiri student portal

# Given : user navigates from rajagiritech home page to the student login page 
# When : user enters username and password
# And : clicks on login button
# Then : the user is logged into their account

Given : user navigates from rajagiritech home page to the student login page 
When : user enters <username> and <password>
And : clicks on login button
Then : the user is logged into their account

Examples:
| username | password |
| u731 | 7297 |
| u1903194 | 190122   |
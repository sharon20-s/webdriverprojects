Feature: To login and navigate through different scenarios

        Scenario Outline: To login to rajagiri student portal

            Given user navigates from rajagiritech home page to the student login page
             When user enters <username> and <password>
              And clicks on login button
             Then the user is logged into their account and <message> is displayed

        Examples:
                  | username | password | message           |
                  | u731     | 7297     | Index.asp?stat=No |
                  | u1903194 | 190122   | Home.asp          |
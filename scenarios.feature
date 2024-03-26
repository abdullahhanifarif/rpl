Feature: Checking if a number is prime

    Scenario: Checking if a number is prime
        Given I have entered the number 2, 3, and 7
        When I check if it is a prime number
        Then it should be true

    Scenario: Checking if a number is not prime
        Given I have entered the number 4 dan 25
        When I check if it is a prime number
        Then it should be false

    Scenario: Checking if a number
        Given I have entered the number 'tiga'
        When I check if it is not number
        Then it should say 'it's not a number'


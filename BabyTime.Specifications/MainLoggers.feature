Feature: Diapers
	In order to avoid an unhappy baby
	As a new parent
	I want to note when some key actions last happened


Scenario: Change Diaper
	Given I am on the main page
	When I press the Diaper button
	Then the diaper clock resets
	And a diaper event is logged on the back end.
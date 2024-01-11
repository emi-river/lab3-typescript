Feature: Användaren går till sidan med skådespelare.

Det ska finnas en knapp som går till en sida med en lista på skådespelare

Scenario: Användaren hamnar på sidan med skådespelare.
  Given Användaren är på hemsidan och det finns en knapp "Actors".
  When Användaren klickar på knappen.
  Then Användaren hamnar på en sida med en titel "Actors".

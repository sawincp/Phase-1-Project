# Rick and Morty Search!

By Corey Sawin

A simple JavaScript web application that utilizes the Rick and Morty API to display a list of characters and their related information. 

## Technologies Used

- JavaScript
- HTML
- CSS

## Description

On page load, the user will be able to submit a form containg a search value of the name of the Rick and Morty charcater they are looking for. The search value can be eitehr a full name (ie Rick Sanchez) or partial name (ie Rick). The user will also be able to add adittional search parameters by filtering by the character status (Alive, Dead, or Uknown) and/or the character gender (Male, Female, Genderless, or Uknown).

![Page Load](/Images/PageLoad.png)


After the form is submited, the search value plus any additional parameters will fetch the appropriate data from the Rick and Morty filter API (https://rickandmortyapi.com/api/character/?) and return a list of the corresponding characters. 

![Results](/Images/SearchResults.png)

From here, the user can click on the "Character Information" button to show the character's full information including an image of the character, what spicies they are, their last known location, their origin and total number of episodes that character has been in so far during the series.

![Charcter Info](/Images/CharcterInfo.png)


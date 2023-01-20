# Rick and Morty Search!

By Corey Sawin

A simple JavaScript web application that utilizes the Rick and Morty API to display a list of characters and their related information. 

## Technologies Used

- JavaScript
- HTML
- CSS

## Description

On page load, the user will be able to submit a form containing a search value of the name of the Rick and Morty character they are looking for. The search value can be either a full name (i.e., Rick Sanchez) or partial name (i.e., Rick). The user will also be able to add additional search parameters to filtering by the character's status (Alive, Dead, or Unknown) and/or the character's gender (Male, Female, Genderless, or Unknown).

![Page Load](/Images/PageLoad.png)


After the form is submitted, the search value plus any additional parameters will fetch the appropriate data from the Rick and Morty filter API (https://rickandmortyapi.com/api/character/?) and return a list of the corresponding characters.

![Results](/Images/SearchResults.png)

From here, the user can click on the "Character Information" button to show the character's full information including an image of the character, what species they are, their last known location, their origin and total number of episodes that character has been in so far during the series.

![Charcter Info](/Images/CharcterInfo.png)

Additionally, the user can hover their mouse over any piece of the character information to highlight that portion orange. 

Finally, if the user tries to search for something other than a Rick and Morty character or if the search criteria return a null argument, an alert will show up on the page explaining this to the user.

![Alert](/Images/Alert.png)
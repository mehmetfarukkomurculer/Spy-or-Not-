# Spy or Not?

## Overview

Who's Spy? is a multiplayer game where players try to identify spies based on given words.

### Key Features

- Dynamic card generation based on player and spy numbers.
- Spy identification through spy images.
- Word guessing and questioning gameplay.

### Technologies Used

- React Native
- Redux
- TypeScript

## How to Play

Who's Spy? is a thrilling and strategic party game where players take on the roles of agents attempting to identify the spies among them through clever questioning and deduction.

### Setup

- Players: 3 or more.
- Spies: More than 0, lower than player numbers.
- Each player is assigned a secret role - either a spy or a knowledgeable operative.

### Gameplay

- Players input the total number of participants and the number of spies in the game.
- The game generates a set of cards equal to the number of players, with the designated number of spy cards displaying a spy image, and the remaining cards featuring random English words.

## Role Revelation

Each player opens only one card, revealing their role:

- If a player sees a spy image, they are aspy and do not know the word.
- If a player sees an English word, they are a knowledgeable operative and know the word.

## Questioning Phase

Players take turns asking yes-or-no questions related to the words on their cards, aiming to uncover the spies.

Example: If the word is "apple," a player might ask, "Is the word a fruit?"

## Answering Questions

Knowledgeable operatives answer questions truthfully based on their known words.

Spies must strategically answer questions without revealing their lack of knowledge about the word on their card.

## End of Round

Players engage in discussions, trying to identify the spies based on their answers and behavior during questioning.

Accusations are made, and players vote on who they believe are the spies.

If the majority correctly identifies the spies, operatives win. Otherwise, the spies triumph.

## Screenshots






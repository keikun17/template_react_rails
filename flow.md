user selects a game
user clicks "add"

   gameformwidget handlesubmit will call addGame passed from smart component/container
   with the game name/id as param

     step 1. reducer will call channel
       command : App.$channel_name.$channel_function
       ex. App.user_games.add_game('game name')

     step 2. `app/assets/javascript/channel/channel_name.coffee` will call actioncable
       command : @perform.$method_name
       ex. @perform "add_game", game: game

     step 3. `app/channels/channel_name_channel` will add that game to the db

     step 4. and send a new list of games via dispatch to the reducer to update the list of games

     step 5. Actioncable will broadcast the result to the games channel and send the list of games as payload
        ex command : ActionCable.server.broadcast 'contact_channel_test1', user: data['user'], game: data[]

     step 6. `app/assets/javascript/channel/channel_name.coffee` :
       -  `received` will hear the broadcast from step 5 and receive the payload (user's current games)
       - `received` will dispatch 'UPDATE_GAMES' and send the list of the user's games

    step 7. reducer will set the new `current_games` on the store
       ex.

     reducer from actioncable will update store with the added game




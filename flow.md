user selects a game
user clicks "add"

   gameformwidget handlesubmit will call addGame passed from smart component/container
   with the game name/id as param

     step 0. How is reducer called?
     step 1. reducer will :
     
       a. add the game to the approval queue with timestamp as the key
       b. call channel and pass the game name and the timestamp
       command : App.$channel_name.$channel_function
       ex. App.user_games.add_game('game name', timestamp)

     step 2.
     `app/assets/javascript/channel/channel_name.coffee` will call actioncable
       command : @perform.$method_name
       ex. @perform "add_game", game: game, timestamp: timestamp

     step 3. `app/channels/channel_name_channel` will add that game to the db

     step 5. Actioncable will broadcast the timestamp to the games channel
        ex command : ActionCable.server.broadcast 'contact_channel_test1', timestamp: data['timestamp']

     step 6. `app/assets/javascript/channel/channel_name.coffee` :
       -  `received` will hear the broadcast from step 5 and receive the payload (user's current games)
       - `received` will dispatch 'UPDATE_GAMES' and send the list of the user's games

    step 7. reducer will set the new `current_games` on the store
       ex.

     reducer from actioncable will update store with the added game




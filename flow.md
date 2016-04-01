user selects a game
user clicks "add"

   gameformwidget handlesubmit will call addGame passed from smart component/container
   with the game name/id as param
   ex. App.user_games.kek('game name')

     reducer will call actioncable
     actioncable will add that game to the db and send a new list of games via dispatch to the reducer to update the list of games
     reducer from actioncable will update store with the added game




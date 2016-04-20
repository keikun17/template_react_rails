App.user_games = App.cable.subscriptions.create "UserGamesChannel",

  dispatchers: {}

  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    switch data.type
      when "GAME_ADDED"
        App.dispatch({type: "CABLE_UPDATE_GAMES_LIST", games: data.games})

  update: (data) ->

  update: (reducer) ->

  add_game: (data) ->
    console.log("Adding game " + data["game"])
    @perform "add_game", game: data["game"]

  update_ready_in: (data) ->
    console.log("[me] sending UPDATE READY IN message to the channel")
    @perform "update_ready_in", ready_in: data["ready_in"]



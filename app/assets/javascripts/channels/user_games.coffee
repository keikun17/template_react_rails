App.user_games = App.cable.subscriptions.create "UserGamesChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    $('#tracking').replace("#{event.message}")

  update: (data) ->

  update: (reducer) ->

  kek: ->
    console.log("kek")

  add_game: (game) ->
    console.log("Adding game " + game)


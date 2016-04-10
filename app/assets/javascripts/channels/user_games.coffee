App.user_games = App.cable.subscriptions.create "UserGamesChannel",

  queue: {}

  enqueue: (key, val) ->
    this.queue[key] = val
    return this.queue

  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    switch data.type
      when "GAME_ADDED"
        cb_function = this.queue[data.timestamp][0]
        cb_function(data.games)

  update: (data) ->

  update: (reducer) ->

  kek: ->
    console.log("kek")

  add_game: (data) ->
    console.log("Adding game " + data["game"])

    timestamp = Date.now()
    this.enqueue(timestamp, data.success)

    @perform "add_game", game: data["game"], timestamp: timestamp

# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class UserGamesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "user_games-#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # --------------------------------------------------
  # actions here
  # --------------------------------------------------

  def add_game(data)
    game = Game.find_by(name: data['game'])
    current_user.games << game
    ActionCable.server.broadcast "user_games-#{current_user.id}",
      games: current_user.games.map(&:name),
      type: 'GAME_ADDED'
  end

  def update_ready_in(data)
    console.log("[me] backend saving of the ready_in value  ")
    ActionCable.server.broadcast "user_games-#{current_user.id}",
      games: current_user.games.map(&:name),
      type: 'CABLE_UPDATE_USER_READY'
  end

end

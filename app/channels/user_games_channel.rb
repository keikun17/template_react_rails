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

  def add_game
    game = Game.find_by(name: data['game_name'])
    current_user.games << game
  end

end

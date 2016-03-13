class UserGamesJob < ApplicationJob
  queue_as :default

  def perform(user)
    ActionCable.server.broadcast 'user_games-#{user.id}', games: user.games
  end

  def render_games_list(games)
    react_component('Something', props: games)
    # ApplicationController.renderer.render(partial: 'events/event', locals: { event: event })
  end
end

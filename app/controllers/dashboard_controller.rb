class DashboardController < ApplicationController

  def index
    @games = Game.all
    @current_games = current_user.games
  end

end

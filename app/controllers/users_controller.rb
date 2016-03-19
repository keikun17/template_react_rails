# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class UsersController < ApplicationController
  def update_games
    @game = Game.find(params[:game_id])

    respond_to do |format|
      if !current_user.games.include?(@game)
        current_user.add_game(@game)
        # current_user.games << @game
        format.json { render json: {game: @game, user: current_user} }
      else
        format.json { render json: {game: @game, user: current_user} } # temporry lang. remove this
      end
    end
  end
end

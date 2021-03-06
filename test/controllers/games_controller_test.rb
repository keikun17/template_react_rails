# == Schema Information
#
# Table name: games
#
#  id            :integer          not null, primary key
#  name          :string
#  icon_path     :string
#  icon_big_path :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @game = games(:one)
  end

  test "should get index" do
    get games_url
    assert_response :success
  end

  test "should get new" do
    get new_game_url
    assert_response :success
  end

  test "should create game" do
    assert_difference('Game.count') do
      post games_url, params: { game: { icon_big_path: @game.icon_big_path, icon_path: @game.icon_path, name: @game.name } }
    end

    assert_redirected_to game_path(Game.last)
  end

  test "should show game" do
    get game_url(@game)
    assert_response :success
  end

  test "should get edit" do
    get edit_game_url(@game)
    assert_response :success
  end

  test "should update game" do
    patch game_url(@game), params: { game: { icon_big_path: @game.icon_big_path, icon_path: @game.icon_path, name: @game.name } }
    assert_redirected_to game_path(@game)
  end

  test "should destroy game" do
    assert_difference('Game.count', -1) do
      delete game_url(@game)
    end

    assert_redirected_to games_path
  end
end

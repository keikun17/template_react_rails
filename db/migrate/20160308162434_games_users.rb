class GamesUsers < ActiveRecord::Migration[5.0]
  def change
    create_table "games_users" do |t|
      t.references :user
      t.references :game
    end
    add_index :games_users, [:game_id, :user_id]
  end
end

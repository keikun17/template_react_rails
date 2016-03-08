class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :icon_path
      t.string :icon_big_path

      t.timestamps
    end
  end
end

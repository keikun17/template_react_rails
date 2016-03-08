json.array!(@games) do |game|
  json.extract! game, :id, :name, :icon_path, :icon_big_path
  json.url game_url(game, format: :json)
end

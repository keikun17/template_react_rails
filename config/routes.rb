Rails.application.routes.draw do
  devise_for :users
  resources :games
  root to: "dashboard#index"

  resources :users do
    member do
      patch 'update_games'
    end
  end

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
end

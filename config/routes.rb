Rails.application.routes.draw do
	
resources :events, only: [:index, :create, :destroy] do
  get :search, on: :collection
end
  root 'dashboard#index'
end

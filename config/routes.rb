Rails.application.routes.draw do
  root to: "dashboard#index"
  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :create, :destroy, :update]
      get 'events/search'
    end
  end
end

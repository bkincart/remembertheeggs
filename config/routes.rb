Rails.application.routes.draw do
  root 'static_pages#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :groceries, only: [:index, :create, :destroy, :update]
      resources :inventories, only: [:index, :create, :destroy, :update]
      resources :locations, only: [:index, :create, :destroy, :update]
    end
  end
end

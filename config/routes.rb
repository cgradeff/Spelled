Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show, :create, :destroy, :update] do 
      resources :comments, only: [:create, :destroy, :show, :index]
    end
  end
  
  root "static_pages#root"
end

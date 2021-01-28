Rails.application.routes.draw do
  resources :roles
  resources :users do 
    resources :projects
  end
  resources :projects do
    resources :users
    resources :roles
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'

end

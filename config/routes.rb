Rails.application.routes.draw do
  resources :announcements
  resources :users
  resources :projects
  resources :roles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get 'auth/verify', to: 'authentication#verify'

  get '/my_projects', to: 'projects#show_mine'

  get 'projects/:project_id/roles', to: 'project_roles#project_roles'
  get 'projects/:project_id/users', to: 'project_roles#project_users'
  get 'projects/:project_id/my_roles', to: 'project_roles#user_project_roles'
  put 'projects/:project_id/roles', to: 'project_roles#update_role'
  # delete 'projects/:project_id/roles', to: 'project_roles#destroy_project_roles'

  get 'projects/:project_id/announcements/', to: 'announcements#project_announcements'

end

#Get all projects
#Get all projects for a specific user via project_roles
#Create a project
  #sets roles for the project
#Delete a project
#Update a project
#Set Roles inside project

#Get all users
#Get a specific user
#Create
#Update
#Destroy

#Get project users
#Get project roles users
#Get role specific to user
#Update project roles users

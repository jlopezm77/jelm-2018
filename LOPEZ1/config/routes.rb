Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/usuarios/todos', to: 'jelm_user#index'
  get '/usuarios/nuevo', to: 'jelm_user#new'
  post '/usuarios/nuevo', to: 'jelm_user#create'
end

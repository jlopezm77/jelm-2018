Rails.application.routes.draw do
  get "libros/mis-libros", to:"user#index"
  post "libros/agregar", to: "user#add_book"
  devise_for :users
  root to: "boostore#index"
  get "autores", to: 'author#index'
  get "api/libros", to: "api#books"
  get "api/libro/:book_id", to: "api#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
end

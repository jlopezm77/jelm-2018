class ApiController < ApplicationController
    def books
        books = Book.all
        render json:{
        books: books
        }
    end
end

class JelmUserController < ApplicationController
    def index
        @users = LopezUser.all
    end

    def new

    end
    
    def create
        user_params = params.require(:Jelm_user).permit(:name, :email)
        LopezUser.create(user_params)
        redirect_to action: 'index'
    end
end

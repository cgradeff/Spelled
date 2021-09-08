class Api::UsersController < ApplicationController
    
    def show 
        @user = User.find_by(email: params[:email])
        render :show
    end
    
    def create 
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: ['Error: Required', 'Error: Password must be at least 8 characters long.'], status: 422
        end
    end

    # def new 
    #     @user = User.new
    # end

    private 
    
    def user_params
        params.require(:user).permit(:email, :password, :username)
    end
end

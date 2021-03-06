class Api::UsersController < ApplicationController
    protect_from_forgery
    
    def show 
        @user = User.find_by(id: params[:id])
        if @user
          render :show
      end
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

    def update 
        @user = User.find_by(id: params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 
    
    def user_params
        params.require(:user).permit(:email, :password, :username, :bio)
    end
end



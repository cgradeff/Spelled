class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index 
        @listing = Listing.find(params[:listing_id])
        @comments = @listing.comments
        render :index
    end

    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def create 
        @listing = Listing.find(params[:listing_id])
        @comment = Comment.new(comment_params)

        if @comment.save 
            render :show 
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy 
        @listing = Listing.find(params[:listing_id])
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.destroy 
            render :show 
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :list_id)
  end

end

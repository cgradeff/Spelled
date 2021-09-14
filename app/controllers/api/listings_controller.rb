class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  before_action :require_user_owns_listing, only: [ :destroy]

  # fix render route for destroy


  def index
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find_by(id: params[:id])
      if @product 
          render :show
      end
  end

  def create
    @listing = Listing.create!(listing_params)

    if @listing.save 
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  # def edit
  #   @listing = Listing.find(params[:id])
  #   render :show
  # end

  def update
    @listing = Listing.find_by(id: params[:id])
    if @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    @listing.destroy 
    render :show 
  end

  private

  def require_user_owns_listing
    return if current_user.listings.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end

  def listing_params
    params.require(:listing).permit(:title, :body, :price, :offer, :sold, :condition, :rarity, :mana, :author_id, :photo)
  end

end

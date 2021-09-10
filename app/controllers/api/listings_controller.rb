class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  before_action :require_user_owns_listing, only: [:edit, :update, :destroy]

  def new
    @listing = Listing.new
  end


  def index
    listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = current_user.listings.new(listing_params)
    render :show
  end

  def edit
    @listing = Listing.find(params[:id])
    render :show
  end

  def destroy
    @listing = current_user.listings.find_by(id: params[:id])
    if @listing && @listing.delete
        render :index
    end
  end

  private

  def require_user_owns_listing
    return if current_user.listings.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end

  def listing_params
    params.require(:listing).permit(:title, :body, :price, :offer, :sold, :condition, color_ids: [], :rarity, type_ids: [], :mana, :photo)
  end

end
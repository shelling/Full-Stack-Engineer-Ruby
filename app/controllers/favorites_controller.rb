class FavoritesController < ApplicationController
  before_action :authenticate_user!

  def create
    @favorite = current_user.favorites.create(favorite_params)
    render json: @favorite
  end

  private

  def favorite_params
    params.require(:favorite).permit(:comic_id)
  end
end

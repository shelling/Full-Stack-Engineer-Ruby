class ComicsController < ApplicationController
  def index
    @comics = Comic.retrieve(params.permit(:limit, :orderBy, :offset, :characters))
    @favorited = Favorite.where(user: current_user, comic: @comics.map(&:id)).pluck(:comic_id)
    @comics.each { |comic| comic.favorited = @favorited.include?(comic.id) }
    render json: @comics.as_json(methods: [:favorited])
  end
end

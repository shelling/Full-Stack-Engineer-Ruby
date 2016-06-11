class Comic < ActiveRecord::Base
  attr_accessor :favorited

  serialize :thumbnail, Hash

  has_many :favorites
  has_many :users, through: :favorites

  def self.retrieve(options = {})
    Rails.application.config.marvel.comics(options).map do |comic|
      find_by(id: comic.id) || create(
        id:         comic.id,
        title:      comic.title,
        modified:   comic.modified,
        thumbnail:  comic.thumbnail.as_json,
      )
    end
  end
end

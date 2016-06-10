class Comic < ActiveRecord::Base
  def self.retrieve(options = {})
    Rails.application.config.marvel.comics(options).map do |comic|
      find_by(id: comic.id) || create(
        id:         comic.id,
        title:      comic.title,
        modified:   DateTime.parse(comic.modified),
        thumbnail:  "#{comic.thumbnail.path}.#{comic.thumbnail.extension}",
      )
    end
  end
end

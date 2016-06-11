class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :comic

  validates :user, :comic, presence: true
  validates :comic_id, uniqueness: { scope: :user_id, message: "A user can only like a comic once" }
end

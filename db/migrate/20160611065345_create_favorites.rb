class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.references :user
      t.references :comic
      t.timestamps null: false
    end

    add_index :favorites, [:user_id, :comic_id], unique: true
  end
end

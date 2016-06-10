class CreateComics < ActiveRecord::Migration
  def change
    create_table :comics do |t|
      t.string    :title
      t.datetime  :modified
      t.string    :thumbnail
      t.timestamps null: false
    end
  end
end

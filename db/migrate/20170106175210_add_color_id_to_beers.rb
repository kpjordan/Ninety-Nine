class AddColorIdToBeers < ActiveRecord::Migration
  def change
  	add_column :beers, :color_id, :integer
  end
end

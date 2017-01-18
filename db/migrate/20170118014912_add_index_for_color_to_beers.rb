class AddIndexForColorToBeers < ActiveRecord::Migration
  def change
  	add_index :beers, :color_id
  end
end

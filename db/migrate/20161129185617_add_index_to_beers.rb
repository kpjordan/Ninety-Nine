class AddIndexToBeers < ActiveRecord::Migration
  def change
  	add_index :beers, :category_id
  end
end

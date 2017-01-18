class RemoveColorFromBeers < ActiveRecord::Migration
  def change
  	remove_column :beers, :color
  end
end

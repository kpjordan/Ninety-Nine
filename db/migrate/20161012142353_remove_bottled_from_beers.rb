class RemoveBottledFromBeers < ActiveRecord::Migration
  def change
  	remove_column :beers, :bottled
  end
end

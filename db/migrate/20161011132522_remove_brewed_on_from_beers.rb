class RemoveBrewedOnFromBeers < ActiveRecord::Migration
  def change
  	remove_column :beers, :brewed_on
  end
end

class AddAbvToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :abv, :decimal
  end
end

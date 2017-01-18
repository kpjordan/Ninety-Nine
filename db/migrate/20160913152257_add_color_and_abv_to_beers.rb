class AddColorAndAbvToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :color, :string
    add_column :beers, :abv, :string
  end
end

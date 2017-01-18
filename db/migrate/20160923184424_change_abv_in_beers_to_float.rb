class ChangeAbvInBeersToFloat < ActiveRecord::Migration
  def change
  	change_column :beers, :abv, :float
  end
end

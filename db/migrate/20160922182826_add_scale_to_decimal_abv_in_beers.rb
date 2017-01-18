class AddScaleToDecimalAbvInBeers < ActiveRecord::Migration
  def change
  	change_column :beers, :abv, :decimal, precision: 4, scale: 2
  end
end

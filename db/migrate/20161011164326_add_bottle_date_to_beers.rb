class AddBottleDateToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :bottle_date, :date
  end
end

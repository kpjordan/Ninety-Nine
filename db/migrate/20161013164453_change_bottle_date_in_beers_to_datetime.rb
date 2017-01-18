class ChangeBottleDateInBeersToDatetime < ActiveRecord::Migration
  def change
  	change_column :beers, :bottle_date, :datetime
  end
end

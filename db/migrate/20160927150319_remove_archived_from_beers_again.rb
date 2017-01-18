class RemoveArchivedFromBeersAgain < ActiveRecord::Migration
  def change
  	remove_column :beers, :archived
  end
end

class AddArchivedBackToBeers < ActiveRecord::Migration
  def change
  	add_column :beers, :archived, :boolean, default: false
  end
end

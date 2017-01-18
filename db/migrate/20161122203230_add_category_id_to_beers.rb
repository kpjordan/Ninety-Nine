class AddCategoryIdToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :category_id, :integer
  end
end

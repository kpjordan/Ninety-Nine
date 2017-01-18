class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name
      t.string :brewed_on
      t.integer :quantity_small
      t.integer :quantity_large
      t.string :category
      t.string :id_marks
      t.string :description
      t.boolean :bottled

      t.timestamps null: false
    end
  end
end

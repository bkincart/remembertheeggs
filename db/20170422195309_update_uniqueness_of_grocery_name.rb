class UpdateUniquenessOfGroceryName < ActiveRecord::Migration[5.0]
  def up
    remove_column :groceries, :name
    add_column :groceries, :name, { null: false, unique: true }
  end
  def down
    add_column :groceries, :name, null: false
    remove_column :groceries, :name
  end
end

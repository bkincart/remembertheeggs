class RemoveOpenFromLocations < ActiveRecord::Migration[5.0]
  def up
    remove_column :locations, :open
  end
  def down
    add_column :locations, :open, :boolean
  end
end

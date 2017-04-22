class UpdateLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :opening_time, :time
    add_column :locations, :closing_time, :time
  end
end

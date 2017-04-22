class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.boolean :open

      t.timestamps null: false
    end
  end
end

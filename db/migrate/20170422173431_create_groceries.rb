class CreateGroceries < ActiveRecord::Migration[5.0]
  def change
    create_table :groceries do |t|
      t.string :name, null: false
      t.string :unit

      t.timestamps null: false
    end
  end
end

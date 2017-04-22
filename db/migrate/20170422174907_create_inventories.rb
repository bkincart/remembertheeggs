class CreateInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.integer :quantity

      t.timestamps null: false

      t.belongs_to :grocery
      t.belongs_to :store
      t.belongs_to :user
    end
  end
end

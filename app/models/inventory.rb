class Inventory < ApplicationRecord
  validates :quantity, numericality: true

  belongs_to :grocery
  belongs_to :user
  belongs_to :location
end

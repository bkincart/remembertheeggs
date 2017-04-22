class Grocery < ApplicationRecord
  validates :name, presence: true

  has_many :inventories
  has_many :locations, through: :inventories
end

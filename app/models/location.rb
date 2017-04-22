class Location < ApplicationRecord
  validates :name, presence: true

  has_many :inventories
  has_many :groceries, through: :inventories
end

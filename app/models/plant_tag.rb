class PlantTag < ApplicationRecord
  belongs_to :plant
  belongs_to :tag

  validates :plant, presence: true
  validates :tag, presence: true, uniqueness: {
    scope: :plant
  }
end

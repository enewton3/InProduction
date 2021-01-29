class ProjectRole < ApplicationRecord
  has_one :user
  belongs_to :project
  belongs_to :role
end

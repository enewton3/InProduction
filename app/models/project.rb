class Project < ApplicationRecord
  belongs_to :user
  # alias_attribute :user, :owner
  has_one_attached :image
  has_many :project_roles
  has_many :users, :through => :project_roles
end

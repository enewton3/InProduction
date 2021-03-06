class Project < ApplicationRecord
  belongs_to :user
  alias_attribute :owner, :user
  has_one_attached :image
  has_many :project_roles
  alias_attribute :roles, :project_roles
  has_many :users, :through => :project_roles
  has_many :announcements
end

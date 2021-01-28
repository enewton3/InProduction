class User < ApplicationRecord
  has_one_attached :prof_pic
  has_many :project_roles
  has_many :projects, through: :project_roles
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end

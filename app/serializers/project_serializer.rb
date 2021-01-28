class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :venue, :start_date, :end_date, :image
  has_one :user

  def image
    object.image.url if object.image.attached?
  end
end

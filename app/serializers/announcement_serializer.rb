class AnnouncementSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :project
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :prof_pic

  def prof_pic
    object.prof_pic.url if object.prof_pic.attached?
  end
end

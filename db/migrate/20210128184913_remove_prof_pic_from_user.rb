class RemoveProfPicFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :prof_pic, :string
  end
end

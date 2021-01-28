class AddProfPicToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :prof_pic, :string
  end
end

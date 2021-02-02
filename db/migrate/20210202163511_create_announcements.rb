class CreateAnnouncements < ActiveRecord::Migration[6.1]
  def change
    create_table :announcements do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end

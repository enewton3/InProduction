class ChangeDateTimeToDateProjects < ActiveRecord::Migration[6.1]
  def change
    change_column :projects, :start_date, :date
    change_column :projects, :end_date, :date
  end
end

class MakeUserProjectRoleNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :project_roles, :user_id, true
  end
end

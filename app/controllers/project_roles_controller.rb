class ProjectRolesController < ApplicationController
  before_action :set_project
  before_action :authorize_request
  
  def project_roles
    render json: @project.roles, include: [:user, :role]
  end

  def project_users
    render json: @project.users, include: [:project_role]
  end

  def update_role
    @role = @project.roles.where(role_id: params[:role_id]).first
    @user = User.find(params[:user_id])
    byebug
    @user.project_roles << @role
    @role.user = @user

    if @role.save
      render json: @role
    else 
      render json: @role.errors, status: :unprocessable_entity
    end

  end

  private
  def set_project
    @project = Project.find(params[:project_id])
  end
end

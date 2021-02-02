class ProjectRolesController < ApplicationController
  before_action :set_project
  before_action :authorize_request
  
  def user_project_roles
    @user_roles = @project.roles.where(user_id: @current_user.id).first
    render json: @user_roles, include: [:project, :role]
  end

  def project_roles
    render json: @project.roles, include: [:role]
  end

  def project_users
    render json: @project.users, include: [:project_role]
  end

  def update_role
    @role = @project.roles.where(role_id: params[:role_id]).first
    @role.user_id = params[:user_id]

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

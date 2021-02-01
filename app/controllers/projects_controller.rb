class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:show, :create, :update, :destroy, :show_mine]
  
  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  def show_mine
    @my_projects = ProjectRole.where(user_id: @current_user.id)
    render json: @my_projects, include: :project
  end

  # POST /projects
  def create
    @project = Project.new(project_params)
    @project.owner = @current_user
    
    if @project.save
      @projectroles = Role.all.each do |role|
        if role.role == 'Owner'
          ProjectRole.create!(project: @project, role: role, user_id: @current_user.id)
        else 
          ProjectRole.create!(project: @project, role: role)
        end
      end
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    puts "owner!!!! #{@project.owner}"
    if @current_user == @project.owner && @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    if @current_user == @project.owner
      @project.roles.destroy_all
      @project.destroy
      render json: {message: 'deleted'}, status: :ok
    else 
      render json: {errors: 'unauthorized'}, status: :unauthorized
    end
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:name, :description, :venue, :url, :start_date, :end_date, :owner)
    end
    
end

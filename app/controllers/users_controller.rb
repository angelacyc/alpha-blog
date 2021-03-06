class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update]
  def new
    @user = User.new
  end

  def index
    @user = User.all
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      #flash[:success] = "Welcome to FHL Bible School #{@user.username}"
      redirect_to root_path, :notice => "Welcome to FHL Bible School, #{@user.username}"
    else
      render 'new'
    end
  end
  
  def edit
    
  end
  
  def update
    if @user.update(user_params)
      flash[:notice] = "Your account is updated successfully"
      redirect_to root_path
    else
      render 'edit'
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
  def set_user
    @user = User.find(params[:id])
  end
end
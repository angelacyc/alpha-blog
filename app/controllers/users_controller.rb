class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      #flash[:success] = "Welcome to FHL Bible School #{@user.username}"
      redirect_to root_path, :notice => "Welcome to FHL Bible School, #{@user.username}"
    else
      render 'new'
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
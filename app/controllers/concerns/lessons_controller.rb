class LessonsController < ApplicationController

  def main
      if !logged_in?
          flash[:success] = "You must be logged in to view this page"
          redirect_to login_path
      end
  end

end
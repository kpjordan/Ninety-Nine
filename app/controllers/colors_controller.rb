class ColorsController < ApplicationController
  def index
	colors = Color.all

  	respond_with colors
  end

  private

  def color_params
  	params.require(:color).permit(:name, :hex)
  end
  
end

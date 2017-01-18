class CategoriesController < ApplicationController
  def index
  	categories = Category.all

  	respond_with categories
  end

  private

  def category_params
  	params.require(:category).permit(:name)
  end
  
end

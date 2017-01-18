class BeersController < ApplicationController

  def index
    beers = Beer.where(archived: false).where.not(quantity_large: 0, quantity_small: 0)
  	respond_with beers
  end

  def past
    past_beers = Beer.where(quantity_large: 0, quantity_small: 0).where(archived: false)
    respond_with past_beers
  end

  def archived
    archived_beers = Beer.where(archived: true)
    respond_with archived_beers
  end

  def create
    respond_with Beer.create(beer_params)
  end

  def edit
    respond_with Beer.find(params[:id])
  end
  
  def archive
    beer = Beer.find(params[:id])
    beer.update(archived: true)

    respond_with beer
  end 

  def unarchive
    beer = Beer.find(params[:id])
    beer.update(archived: false) 

    respond_with beer
  end

  def update
    beer = Beer.find(params[:id])
    beer.update(beer_params)

    respond_with beer
  end

  def show
  	respond_with Beer.find(params[:id])
  end

  def drink_large
    beer = Beer.find(params[:id])
    if beer.quantity_large > 0
      beer.decrement!(:quantity_large)
    end

    respond_with beer
  end

  def drink_small
    beer = Beer.find(params[:id])
    if beer.quantity_small > 0
      beer.decrement!(:quantity_small)
    end

    respond_with beer
  end




  private
    def beer_params
  	  params.require(:beer).permit(:name, :bottle_date, :quantity_small, :quantity_large, :category_id, :id_marks, :description, :color_id, :abv, :archived)
    end

end

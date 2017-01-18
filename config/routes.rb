Rails.application.routes.draw do



root to: 'application#angular'

  get '/past' => 'beers#past'
  get '/archived' => 'beers#archived'

  resources :beers do
  	
  	member do
  		put '/drink_small' => 'beers#drink_small'
  		put '/drink_large' => 'beers#drink_large'
  		put '/update' => 'beers#update'
  		put '/archive' => 'beers#archive'
      put '/unarchive' => 'beers#unarchive'

  	end
  end

  resources :categories, only: :index

  resources :colors, only: :index

end

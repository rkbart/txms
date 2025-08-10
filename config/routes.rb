Rails.application.routes.draw do
  get "/transactions", to: "transactions#index"
  post "/transactions", to: "transactions#create"
end

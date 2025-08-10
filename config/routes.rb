Rails.application.routes.draw do
  get "/transactions", to: "transactions#index"
  post "/transactions", to: "transactions#create"

  get "*path", to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end

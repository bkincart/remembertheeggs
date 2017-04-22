class Api::V1::GroceriesController < Api::V1::BaseController
  def index
    respond_with Grocery.all
  end

  def create
    respond_with :api, :v1, Grocery.create(grocery_params)
  end

  def destroy
    respond_with Grocery.destroy(params[:id])
  end

  def update
    grocery = Grocery.find(params[:id])
    grocery.update_attributes(grocery_params)
    respond_with grocery, json: grocery
  end

  private

  def grocery_params
    params.require(:grocery).permit(:name, :measurement)
  end
end

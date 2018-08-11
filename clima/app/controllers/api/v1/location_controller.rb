class Api::V1::LocationController < ApiController
#    before_action :set_default_format
    before_action :set_location, except: [:index, :create]
    def index
        
        @locations = Location.all
    end
    def show
#        location_id = params[:id]
#        @location = Location.find(location_id)
    end
    
    def create
        location_params = params.require(:location).permit(:name)        
        Location.create(name: location_params[:name])
        render status: :created
    end

    private
#    def set_default_format
#    request.format = :json
#    end

    def set_location
        location_id = params[:id]
        @location = Location.find(location_id)
    end
end

class Api::TypesController < ApplicationController

    def index
        @types = Type.all
        render :index
    end
end
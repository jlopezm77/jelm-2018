class WelcomeController < ApplicationController
def index
    UserMailer.with('').welcome.deliver_now
end
end

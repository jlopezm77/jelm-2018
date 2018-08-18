class UserMailer < ApplicationMailer
    default from: "jlopez@gmail.com" 
    
    def welcome
        mail(to:"fede2018.fullstack@gmail.com", subject: "Correo de bienvenida")
    end
end

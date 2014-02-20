class ContactsController < ApplicationController
  def index
     @contact = Contact.new
   end

   def create
     @contact = Contact.new(params[:contact])
     @contact.request = request
     if @contact.deliver
       flash.now[:error] = nil
       flash.now[:notice] = "Thanks! That's great writing if I say so myself! I'll deliver your message to her right this second!"
     else
       flash.now[:error] = 'Oops! You seem to be missing something. Please try again!'
       render :new
     end
     render :index
   end
end

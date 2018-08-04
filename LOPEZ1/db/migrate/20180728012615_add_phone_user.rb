class AddPhoneUser < ActiveRecord::Migration[5.2]
  def change
    add_column :lopez_users, :phone, :string
  end
end

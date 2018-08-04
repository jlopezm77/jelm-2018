class CreateLopezUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :lopez_users do |t|

      t.string :name, {null: false}
      t.string  :email, {unique: true}
      t.timestamps
    end
  end
end

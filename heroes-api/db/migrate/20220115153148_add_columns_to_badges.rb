class AddColumnsToBadges < ActiveRecord::Migration[6.1]
  def change
    add_column :badges, :recipient_email, :string
    add_column :badges, :recipient_first_name, :string
    add_column :badges, :recipient_last_name, :string
    add_column :badges, :badge_template_id, :string
    add_column :badges, :issued_at, :string
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@admin = User.create!(username:'admin', email: 'admin@admin.com', password:"123456789")

puts "#{User.count} users created"

@roles = Role.create!([{role:'Production Manager'}, {role:'Stage Manager'}, {role: 'Director'}, {role: 'Producer'}, {role: 'Actor'}, {role: 'Lighting Designer'}])

puts "#{Role.count} roles created"

@wicked = Project.create!(name: "Wicked", description: 'A couple of witches have a bad day.', venue: 'Richard Harris Theater', start_date:  Time.now, end_date: Time.now + 60, user: @admin)
@pippin = Project.create!(name: "Pippin", description: 'Someone thinks he is special', venue: 'Walter Kerr Theater', start_date:  Time.now, end_date: Time.now + 60, user: @admin)
@lionking = Project.create!(name: "Lion King", description: 'A bunch of animals sing and dance', venue: 'Disneys number one venue', start_date:  Time.now, end_date: Time.now + 60, user: @admin)
@rent = Project.create!(name: "Rent", description: 'Christmas bells are ringing.', venue: 'Another such venue', start_date:  Time.now, end_date: Time.now + 60, user: @admin)
@hamilton = Project.create!(name: "Hamilton", description: 'Some guys start a war, and then they all die or kill each other.', venue: 'Richard Rogers Theater', start_date:  Time.now, end_date: Time.now + 60, user: @admin)

puts "#{Project.count} projects created"
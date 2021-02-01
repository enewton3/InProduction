# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Role.destroy_all
Project.destroy_all
ProjectRole.destroy_all

@admin = User.create!(username:'admin', email: 'admin@admin.com', password:"123456789")
@evyn = User.create!(username:'evyn', email: 'evyn@evyn.com', password:"123456789")
@rachel = User.create!(username:'rachel', email: 'rachel@rachel.com', password:"123456789")

puts "#{User.count} users created"

@roles = Role.create!([{role:'Production Manager', description:'They manage the productions.'}, {role:'Stage Manager', description: 'They manage the stage'}, {role: 'Director', description:'Director.'}, {role: 'Producer', description: 'Where the money is at.'}, {role: 'Actor', description: 'The pretty face.'}, {role: 'Lighting Designer', description:'Without them, nothing would be seen.'}, {role: 'Owner', description: 'They created this project.'}])

puts "#{Role.count} roles created"

@wicked = Project.create!(name: "Wicked", description: 'A couple of witches have a bad day.', venue: 'Richard Harris Theater', start_date:  Time.now, end_date: Time.now + 60, owner: @admin)
@pippin = Project.create!(name: "Pippin", description: 'Someone thinks he is special', venue: 'Walter Kerr Theater', start_date:  Time.now, end_date: Time.now + 60, owner: @admin)
@lionking = Project.create!(name: "Lion King", description: 'A bunch of animals sing and dance', venue: 'Disneys number one venue', start_date:  Time.now, end_date: Time.now + 60, owner: @admin)
@rent = Project.create!(name: "Rent", description: 'Christmas bells are ringing.', venue: 'Another such venue', start_date:  Time.now, end_date: Time.now + 60, owner: @admin)
@hamilton = Project.create!(name: "Hamilton", description: 'Some guys start a war, and then they all die or kill each other.', venue: 'Richard Rogers Theater', start_date:  Time.now, end_date: Time.now + 60, owner: @admin)

puts "#{Project.count} projects created"

@projects = Project.all
@projects.each do |project|
  @roles.each do |role|
    ProjectRole.create!(user_id: @evyn.id, project: project, role: role)
  end
end

# ProjectRole.create!(user: @evyn, project: @wicked, role: @roles.first)

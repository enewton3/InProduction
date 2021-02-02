# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

ProjectRole.destroy_all
User.destroy_all
Role.destroy_all
Project.destroy_all
Announcement.destroy_all

puts "Destroyed Everything."

@admin = User.create!(username:'admin', email: 'admin@admin.com', password:"123456789")
@evyn = User.create!(username:'evyn', email: 'evyn@evyn.com', password:"123456789")
@rachel = User.create!(username:'rachel', email: 'rachel@rachel.com', password:"123456789")

puts "#{User.count} users created"

@roles = Role.create!([{role:'Production Manager', description:'They manage the productions.'}, {role:'Stage Manager', description: 'They manage the stage'}, {role: 'Director', description:'Director.'}, {role: 'Producer', description: 'Where the money is at.'}, {role: 'Actor', description: 'The pretty face.'}, {role: 'Lighting Designer', description:'Without them, nothing would be seen.'}, {role: 'Owner', description: 'They created this project.'}])

puts "#{Role.count} roles created"

@wicked = Project.create!(name: "Wicked", description: 'A couple of witches have a bad day.', venue: 'Richard Harris Theater', start_date:  Time.now, end_date: Time.now + 60, owner: @admin, image_url: 'https://d1rx0dtgjk9kr3.cloudfront.net/wp-content/uploads/2018/06/3423_OG_1200x628.jpg')
@pippin = Project.create!(name: "Pippin", description: 'Someone thinks he is special', venue: 'Walter Kerr Theater', start_date:  Time.now, end_date: Time.now + 60, owner: @admin, image_url:'https://media.npr.org/assets/img/2013/08/26/pippin-cover_wide-91cf0a45fd6836d7ed91f15b6ed567d1881dd6a2.jpg?s=1400')
@lionking = Project.create!(name: "Lion King", description: 'A bunch of animals sing and dance', venue: 'Disneys number one venue', start_date:  Time.now, end_date: Time.now + 60, owner: @admin, image_url:'https://cdn.worldvectorlogo.com/logos/the-lion-king.svg')
@rent = Project.create!(name: "Rent", description: 'Christmas bells are ringing.', venue: 'Another such venue', start_date:  Time.now, end_date: Time.now + 60, owner: @admin, image_url:'https://www.mtishows.com/sites/default/files/show/logo/000281_hero.jpg')
@hamilton = Project.create!(name: "Hamilton", description: 'Some guys start a war, and then they all die or kill each other.', venue: 'Richard Rogers Theater', start_date:  Time.now, end_date: Time.now + 60, owner: @admin,image_url: 'https://www.theatermania.com/dyn/graphics/theatermania/v27w432/hamilton-logo-45999.jpeg' )

puts "#{Project.count} projects created"

@projects = Project.all
@projects.each do |project|
  @roles.each do |role|
    ProjectRole.create!(user_id: @evyn.id, project: project, role: role)
  end
end

puts "#{ProjectRole.count} Roles associated with Projects"

@projects.each do |project|
  3.times do 
    Announcement.create!(user: @evyn, project: project, content: Faker::Lorem.paragraph)
  end
end

puts "#{Announcement.count} announcements created"

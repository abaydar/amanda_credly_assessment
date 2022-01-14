# response = RestClient.get("https://randomuser.me/api/?results=100")

# user_array = JSON.parse(response.body)
# user_array["results"].each do |user|
#     User.create(first_name: user["name"]["first"], last_name: user["name"]["last"], age: user["dob"]["age"])
# end

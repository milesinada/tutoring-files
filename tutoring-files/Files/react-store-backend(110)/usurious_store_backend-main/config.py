import pymongo
import certifi


mongo_url = "mongodb+srv://MilesFSDI:Miles2995@cluster0.joq6u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

client = pymongo.MongoClient(mongo_url, tlsCAFile=certifi.where())

#get the specfic DB
db = client.get_database("UsuriousStore")
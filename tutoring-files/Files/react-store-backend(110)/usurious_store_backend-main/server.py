from flask import Flask, abort, request
from mock_data import catalog
from me_data import me
import random
import json 
from flask_cors import CORS
from config import db
from bson import ObjectId

#Create the server/app
app = Flask("server")
CORS(app) #Allows the server to be called from any orgin


@app.route("/myaddress")
def get_myaddress():
    address = me["address"]    
    return address["street"] + " " + address["city"]
    #return f"2-2281 {address['street']}. {address['city']}"
    #return json.dumps(me)

@app.route("/", methods=["get"])
def home_page():
    return "Under Construction"

@app.route("/test")
def test():
    return "I'm a simple test"


@app.route("/about")
def about():
    return "Miles Inada"




#######################################################
################# API ENDPOINT ########################
#######################################################


@app.route("/api/catalog")
def get_catalog():

    cursor = db.products.find({})
    results = []
    for prod in cursor:
        prod["_id"] = str(prod["_id"])
        results.append(prod)

    return json.dumps(results)


@app.route("/api/catalog", methods=["POST"])
def save_products():
    product = request.get_json()

    if not "title" in product or len(product["title"]) < 5:
        return abort(400, "Title is missing or too short.")

    if not "price" in product:
        return abort(400, "Price is missing.")

    if not isinstance(product["price"], int) and not isinstance(product["price"], float):
        return abort(400, "Invaild price credentials.")

    if (product["price"]) < 1:
        return abort(400, "Invalid price, too low.")

    db.products.insert_one(product)

    #Hack to fix the _id
    product["_id"] = str(product["_id"])


    return json.dumps(product)

# get /api.catalog/count
# return the num of products
@app.route("/api/catalog/count")
def get_count():
    cursor = db.products.find({})
    count = 0
    for prod in cursor:
        count += 1
    
    return  json.dumps(count)
        
#get /api/catalog/sum
#return all prices sum
@app.route("/api/catalog/sum")
def get_sum():
    cursor = db.products.find({})
    total = 0
    for prod in cursor:
        total += prod["price"]
    res = f"${total}"
    return json.dumps(res)

# get /api/product/<id>
# get a product by its _id
@app.route("/api/product/<id>")
def get_product(id):


    if not ObjectId.is_valid(id):
        return abort(400, "id is not a valid ObjectId")


    prod = db.products.find_one({"_id": ObjectId(id) })
    
    if not prod:
        return abort(404, "Product not found")


    prod["_id"] = str(prod["_id"])
    return json.dumps(prod)
    
    # return abort(404)


# get /api/product/most_expensive
@app.route("/api/product/most_expensive")
def get_most_expensive():
    cursor = db.products.find({})
    pivot = cursor[0]
    for prod in cursor:
        if prod["price"] > pivot["price"]:
            pivot = prod
            
    pivot["_id"] = str(pivot["_id"])

    return json.dumps(pivot)



@app.route("/api/product/categories")
def get_category():
    cursor = db.products.find({})

    res=[]
    for prod in cursor:
        catagory = prod["catagory"]
        if not catagory in res:
            res.append(catagory)
    return json.dumps(res)


@app.route("/api/catalog/<catagory>")
def products_by_catagory(catagory):
    res = []
    cursor = db.products.find({ "catagory" : catagory})

    for prod in cursor:
 
        prod["_id"] = str(prod["_id"])
        res.append(prod)

    return json.dumps(res)

    
#######################################################
################# API ENDPOINT for coupon codes #######
#######################################################


coupons = [
    {
        "code": "savenow",
        "discount": 10 ,
        "_id": 12
    },
    {
        "code": "blackfriday",
        "discount": 30 ,
        "_id": 15
    },
    {
        "code": "xmas",
        "discount": 20 ,
        "_id": 80
    }
]

@app.route("/api/coupons")
def get_coupons():
    cursor = db.coupons.find({})
    results = []
    for coupon in cursor:
        coupon["_id"] = str(coupon["_id"])
        results.append(coupon)

    return json.dumps(results)

@app.route("/api/coupons", methods=["POST"])
def save_coupouns():

    coupon = request.get_json()

    if not "code" in coupon or len(coupon["code"]) < 2:
        return abort(400, "Title is missing or too short.")


    
    db.coupons.insert_one(coupon)
    coupon["_id"] = str(coupon["_id"])
    return json.dumps(coupon)

@app.route("/api/coupons/<code>")
def get_coupon(code):
    coupon = db.coupons.find_one({"code": code })
    if not coupon:
        return abort(404, "Coupon not found for code: " + code)
    coupon["_id"] = str(coupon["_id"])
    return json.dumps(coupon)

#######################################################
################# API ENDPOINT for Users ##############
#######################################################

#create endpoints to Save order, retrieve all orders, retrieve order by user_id



@app.route("/api/orders")
def get_orders():
    cursor = db.orders.find({})
    results = []
    for order in cursor:
        order["_id"] = str(order["_id"])
        results.append(order)

    return json.dumps(results)



@app.route("/api/orders", methods=["POST"])
def save_order():

    order = request.get_json()
    if not "user_id" in order:
        return abort(400, "Please log in or create an account to order.")

    db.orders.insert_one(order)
    order["_id"] = str(order["_id"])
    return json.dumps(order)



@app.route("/api/orders/<user_id>")
def get_order(user_id):
    order = db.orders.find_one({"user_id": int(user_id) })
    if not order:
        return abort(404, "User not found for user id: " + user_id)
    order["_id"] = str(order["_id"])
    return json.dumps(order)



"""
{
    user_id: 123,
    total: 99.99,
    products: [
        {
           title: "asdasd",
            price: 12,
            quantity: 4
 
        },
        {
            title: "asdasd",
            price: 12,
            quantity: 4

        }
    ]
}

"""

# start the server
app.run(debug=True)

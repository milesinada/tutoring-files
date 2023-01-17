from flask import Flask, abort
from mock_data import catalog
from me_data import me
import json 

#Create the server/app
app = Flask("server")


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
    return json.dumps(catalog)

# get /api.catalog/count
# return the num of products
@app.route("/api/catalog/count")
def get_count():
    count = len(catalog)
    return  json.dumps(count)
        
#get /api/catalog/sum
#return all prices sum
@app.route("/api/catalog/sum")
def get_sum():
    total = 0
    for prod in catalog:
        total += prod["price"]
    res = f"${total}"
    return json.dumps(res)

# get /api/product/<id>
# get a product by its _id
@app.route("/api/product/<id>")
def get_product(id):
    for prod in catalog:
        if id == prod["_id"]:
            return json.dumps(prod)

    return abort(404)


# get /api/product/most_expensive
@app.route("/api/product/most_expensive")
def get_most_expensive():
    pivot = catalog[0]
    
    for prod in catalog:
        if pivot["price"] > prod["price"]:
            pivot = prod

    return json.dumps(prod)

# start the server
app.run(debug=True)
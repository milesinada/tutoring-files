def print_name():
    print("Miles Inada")


def test_dict():
    print("--------- Dictionary ----------")

    me = {
        "first": "Miles",
        "last": "Inada",
        "age": 27,
        "hobbies": [],
        "address":{
            "street": "Kaumualii HWY",
            "city": "Kalaheo"
        }
    }

    
    print(me["first"] + " " + me["last"])


    address = me["address"]
    print(address["street"] + " " + address["city"])


def younger_person():
    ages = [12,42,32,50,56,14,78,30,51,89,12,38,67,10]
    pivot = ages[0]
    for x in ages:
        if x < pivot:
            pivot = x
    
    print(f"The lowest age is: {pivot}")

print_name()
test_dict()
younger_person()


# funciton to print your name
# call the function
# run the script
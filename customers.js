var customers=[
		{
		    "fullName": "Priya Pawar",
			"addressLine1": "some addressLine1",
			"adreessLine2": "some adreessLine2",
			"city": "some city",
			"state": "Chhattisgarh",
			"country": "India",
			"phoneNumber": 8109485931,
			"email": "priyapawar121@gmail.com"
		  },
		  {
			"fullName": "Alka Das",
			"addressLine1": "some addressLine1",
			"adreessLine2": "some adreessLine2",
			"city": "Bhilai",
			"state": "chhattisgarh",
			"country": "india",
			"phoneNumber": 8152455425,
			"email": "alkadas@gmail.com"
		  },
		  {
			"fullName": "Soma Sharma",
			"addressLine1": "some addressLine1",
			"adreessLine2": "some adreessLine2",
			"city": "Durg",
			"state": "Chhattisgarh",
			"country": "india",
			"phoneNumber": 8128168521,
			"email": "sharmasoma@gmail.com"
		  },
		  {
			"fullName": "Shikha Shroti",
			"addressLine1": "some addressLine1",
			"adreessLine2": "some adreessLine2",
			"city": "Raipur",
			"state": "Chhattisgarh",
			"country": "india",
			"phoneNumber": 9125252451,
			"email": "priyapawar121@gmail.com"
		  },
		  {
			"fullName": "Preeti Dixit",
			"addressLine1": "Nadanwan Society",
			"adreessLine2": "ward no. 15",
			"city": "Bilaspur",
			"state": "chhattisgarh",
			"country": "india",
			"phoneNumber": 9256948531,
			"email": "dixitpreeti@gmail.com"
		  }

]
//Function to Read data from JSON file and display it in console.
var customerArrayLoop=function(customers){

  for (var i=0;i<customers.length;i++){
    console.log(customers[i].fullName+'\n'+customers[i].addressLine1+" "+customers[i].adreessLine2+" "+customers[i].city+" "+customers[i].state+" "+customers[i].country+'\n'+customers[i].phoneNumber+'\n'+customers[i].email);
    i=i+1;
  }
}
customerArrayLoop(customers);
//function Call
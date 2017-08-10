
var Allcustomers = [

		{"fullName":"Priya Pawar","city":"some_city","state": "Chhattisgarh","country": "India"},
		{"fullName":"Alka Das","city":"Bhilai","state": "chhattisgarh","country": "india"},
		{"fullName":"Soma Sharma","city": "Durg","state": "Chhattisgarh","country": "india"},
		{"fullName":"Shikha Shroti","city": "Raipur","state": "Chhattisgarh","country": "india"},
		{"fullName":"Preeti Dixit","state": "chhattisgarh","city": "Bilaspur","country": "india"}
				  
]
//Function to find a particular entry from JSON
var loopThroughData = function(customers){
		for (x in customers){
			
 
			//Re-iterating all Array elements by comparing values
			if(customers[x].city=='Durg'){
      	alert("Customer Found, city is "+customers[x].city);
      		else{
      			alert("invalid entry");
      		}
      }
      
		}
}
loopThroughData(Allcustomers);

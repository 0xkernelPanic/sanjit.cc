function SubForm (){
			$.ajax({
				url:"https://api.apispreadsheets.com/data/13998/",
				type:"post",
				data:$("#contactForm").serializeArray(),
				success: function(){
					alert("Form Data Submitted :)")
				},
				error: function(){
					alert("There was an error :(")
				}
			});
		}

$.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
});


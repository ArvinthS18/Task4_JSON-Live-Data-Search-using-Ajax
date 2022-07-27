	
function fun()		
{				 
				 let x = document.getElementById("cc").value;
				 let u ='https://openlibrary.org/search/authors.json?q=';
				 let URL = u+x;
                                if(x === ""){
                                 alert("Please Enter the name in the search box");}
                                 else{		
				     ajaxCall(URL);
				       }}
		function ajaxCall(URL) {
			$.ajax({
				url: URL ,
				type: "GET",
				success: function (data) {
				
						function funt()
						{console.log(data);
						}
				let temp  = "";
				temp += "<tr>";
				temp += "<td>"+ "Serial Number" +"</td>";
						temp += "<td>" +"Name"+ "</td>";
						temp += "<td>" +"Type"+ "</td>";
						temp += "<td>" +"Bithday Date"+ "</td>";
						temp += "<td>" +"Work Count"+ "</td>";
						temp += "<td>" +"Top Subjects"+ "</td>";
									 
	     for (const [key, value] of Object.entries(data))
		{	
		    if (key == "numFound" && value == 0){document.getElementById("msg").innerHTML = "No Author's are available in this name "; }	

			else{
				if (key == "docs")   {		   
				for (var i=0;i<value.length;i++) {
                            
					      	    temp += "<tr>";
					      	    temp += "<th>"+ parseInt(i+1) +"</th>";    
					            temp += "<td id ="+value[i]['name']+" onClick=fun2(this)><a href='#author'>"+ value[i]["name"] + "</td>"; 				        
						    temp += "<td>"+ value[i]["type"] +"</td>";
						   if( value[i]["birth_date"] === undefined){temp +="<td>"+ "No data" +"</td>";}else{temp += "<td>"+ value[i]["birth_date"] +"</td>";}
							temp += "<td>"+ value[i]["work_count"] +"</td>";
							
							if( value[i]["top_subjects"] === undefined){temp +="<td>"+ "No data" +"</td>";}else{temp += "<td>"+ value[i]["top_subjects"] +"</td></tr>";}
							
                             				                   }
				         }
			 }
		}		
				document.getElementById("data").innerHTML = temp;

				},
				error: function (error) {
					console.log(`Error ${error}`);
				}
			});
		}
function fun2(a)
{  
	//var x = document.getElementById("myBtn").value;
	//document.getElementById("cc").innerHTML = x;
	console.log(a.innerText);
	let u ='https://openlibrary.org/search/authors.json?q=';
	let URL = u+a.innerText;
	ajaxCall1(URL);
		function ajaxCall1(URL) {
			$.ajax({
				url: URL ,
				type: "GET",
				success: function (data) {
				
		for (const [key, value] of Object.entries(data))
		{	
			if (key == "numFound" && value == 0){document.getElementById("msg").innerHTML = "No Author's are available in this name "; }	
			else{
				if (key == "docs")   {
					
				for (var i=0;i<value.length;i++) {
                                      document.getElementById("name").innerHTML = value[i]["name"];
					document.getElementById("type").innerHTML = value[i]["type"];
					document.getElementById("work_count").innerHTML = value[i]["work_count"];
					document.getElementById("_version_").innerHTML = value[i]["_version_"];
					let date;
                    if( value[i]["birth_date"] === undefined){date = "No data";}else{date= value[i]["birth_date"];}
					document.getElementById("birth_date").innerHTML = date;
					document.getElementById("top_work").innerHTML = value[i]["top_work"];
					document.getElementById("key").innerHTML = value[i]["key"];
		    if( value[i]["alternate_names"] === undefined){date = "No data";}else{date= value[i]["alternate_names"];}
				        document.getElementById("alternate_names").innerHTML = value[i]["alternate_names"];		
                      break;			
										}
                          
						}
			}

		}
		
				},


				error: function (error) {
					console.log(`Error ${error}`);
				}
			});
		}
		
	}

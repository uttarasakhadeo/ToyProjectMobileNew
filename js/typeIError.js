/**
* @summary 
* @description 
* @version 1.0.0
* @file solvingfor.js
* @author Uttara Sakhadeo
* @contact www.samplesizeshop@gmail.com
*
* @copyright 
* User Interface for the ToyProjectMobile Software.  This application 
* will help in developing the proposed GLIMMPSE Mobile/Web/Desktop application.
* Copyright (C) 2010 Regents of the University of Colorado.  
*  	
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/				
$(document).on("pageshow", "#typeIError", function(){
	var count = typeIErrorArray.length;		
	
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");					
	var i = 0;
	/*if(isAndroid) {
		// Do something!
		// Redirect to Android-site?
		alert('Android Platform Accesing ToyProject!');
	}
	else{
		alert('Browser Accesing ToyProject!');
	}*/
	
	if(count != 0 && count <= 5)
	{		
		for(i = 0; i < count ; i++)
		{			
			//$("#list").append('<li>'+typeIErrorArray[i]+'<span id="list-option" class="ui-li-count"><img src="../images/clear_button.png" class="ui-li-icon"/></span></li>').listview('refresh');
			$("#list").append('<li class="'+i+'" data-icon="delete"><a href="#">'+typeIErrorArray[i]+'</a></li>').listview('refresh');
		}
	}	
		
	/*
	 * Append to list on EnterKey Pressed event.
	 */
	$('#what_to_add').bind("enterKey",function(e){
		var value = $("#what_to_add").val();
		if(count < 5)
		{
			if(value > 0 && value < 1)
			{
				$("#what_to_add_label").css('color', '#000000');
				typeIErrorArray[count] = value;			
				//$("#list").append('<li>'+typeIErrorArray[count]+'<img src="../images/clear_button.png" class="ui-li-icon"/></li>').listview('refresh');
				$("#list").append('<li class="'+count+'" data-icon="delete"><a href="#">'+typeIErrorArray[count]+'</a></li>').listview('refresh');
				count++;
			}
			else{
				//alert("Type I Error should be between 0 and 1.");
				//var label = document.getElementById(("what_to_add_label");
				//label.style.color = "Red";
				$("#what_to_add_label").css('color', '#FF0000');
			}
		}
	   else{
			alert("You can only add upto 5 Type I Error values.");
	   }
	   $('#what_to_add').val('');
	});
	/*
	 * Handing and validating key events.
	 */
	$('#what_to_add').keyup(function(e){		
		 // Allowing only numbers in Browser access.		 
		if(isAndroid){			
			this.value = this.value.replace(/[^1-9\.]/g,'');
		}
		else{
			if (/\D/g.test(this.value))
			{
				// Filter non-digits from input value.
				//this.value = this.value.replace(/\D\./g, '');		
				this.value = this.value.replace(/[^1-9\.]/g,'');				
			}
		}					
		if(e.keyCode == 13 || e.keyCode == 66 )
		{
		  $(this).trigger("enterKey");
		}
		//else if(e.keyCode ){}
	});
	
	$('#list').delegate('li', 'tap', function () {
		//alert('clicked : '+$(this).index());
		var index = $(this).index();				
		$(this).hide();
		//$(this).parents(".custom_select ."+index).hide();
		typeIErrorArray.splice(index,1);
		count = typeIErrorArray.length;			
		//$(this).remove().listview('refresh');		
		//$(this).listview('refresh');
				
	});
});
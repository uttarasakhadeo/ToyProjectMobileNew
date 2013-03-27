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
$(document).on("pageshow", "#designpage", function(){	
	if(solvingForValue){		
		$('#solvingfor-list-option').html(""+solvingForValue);						// Displaying selected value in header line							
		
		// Remove Existing Power or Sample Size rows.
		if($("#samplesize_row")){
			$('#samplesize_row').remove();
		}		
		if($("#power_row")){
			$('#power_row').remove();
		}
		
		// Dynamically Add the Power or Sample Size list.
		if(solvingForValue == "Power"){												
			$('#input_listview').append('<li data-theme="b" id="samplesize_row"><a href="samplesize.html" data-transition="flip">'+
				'<h2 id="samplesize-header">Sample Size <span id="samplesize-list-option" class="ui-li-count"><img src="../images/incomplete_icon.png"/>'+
				'</span></h2></a></li>').trigger('create');									
			//$("#samplesize_row").attr("data-theme","b").trigger('create');
			//$('#samplesize_row').css("display", "none"); // working									
			//$('#image').attr("src","../images/incomplete_icon.png").trigger('create');
			$('#input_listview').listview('refresh');
		}									
		else{										
			$('#input_listview').append('<li data-theme="b" id="power_row"><a href="power.html" data-transition="flip">'+
				'<h2 id="power-header">Power <span id="power-list-option" class="ui-li-count"><img src="../images/incomplete_icon.png"/>'+
				'</span></h2></a></li>').trigger('create');
			$('#input_listview').listview('refresh');									
		}	
	}
		
	if(typeIErrorArray.length > 0){
		$('#typeIerror-list-option').html("Complete");						// Displaying selected value in header line
	}
	else{		
		 var path = document.location.pathname;
		//$('#typeIerror-list-option').remove(":contains('Complete')");				
		$('#typeIerror-list-option').empty();		
		$('#typeIerror-list-option').append('<img src="'+path+'/images/incomplete_icon.png">').trigger('create');	
		$('#input_listview').listview('refresh');
	}
});

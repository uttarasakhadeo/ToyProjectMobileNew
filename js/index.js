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
$(document).on("pagebeforeshow", "#designpage", function(){
	alert("design page show : "+solvingForValue);
	/*if($.toyprojectmobile.solvingForValue){
		$("#solvingfor-list-option").html($.toyprojectmobile.solvingForValue);						// Displaying selected value in header line
		document.getElementById("solvingfor-list-option").style.color = selecte_option_color;		// Setting selection value color
	}*/	
	if(solvingForValue){
			
		$("#solvingfor-list-option").html(solvingForValue);						// Displaying selected value in header line
		//document.getElementById("solvingfor-list-option").style.color = selecte_option_color;		// Setting selection value color
		
		if(document.getElementById('samplesize_row')){
			$('#samplesize_row').remove();
		}		
		if(document.getElementById('power_row')){
			$('#power_row').remove();
		}
		
		if(solvingForValue == "power"){
			//solvingForValue = "Power";										
			$('#input_listview').append('<li data-theme="b" id="samplesize_row"><a href="samplesize.html" data-transition="flip">'+
				'<h2 id="samplesize-header">Sample Size <span id="samplesize-list-option" class="ui-li-count"><img id="image"/>'+
				'</span></h2></a></li>').trigger('create');									
			$("#samplesize_row").attr("data-theme","b").trigger('create');
			//$('#samplesize_row').css("display", "none"); // working									
			$("#image").attr("src","img/incomplete_icon.png").trigger('create');
			$('#input_listview').listview('refresh');
		}									
		else{
			//solvingForValue = "Sample Size";										
			$('#input_listview').append('<li data-theme="b" id="power_row"><a href="power.html" data-transition="flip">'+
				'<h2 id="power-header">Power <span id="power-list-option" class="ui-li-count"><img id="image"/>'+
				'</span></h2></a></li>').trigger('create');
			$("#image").attr("src","img/incomplete_icon.png").trigger('create');
			$('#input_listview').listview('refresh');									
		}	
	}
});

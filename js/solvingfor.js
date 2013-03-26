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
$(document).on("pageshow", "#solvingforpage", function(){ 				
		// Show preselected option for solving for		
		if(solvingForValue == "Sample Size"){										
				$("#power").removeClass("ui-btn-active");
				$("#samplesize").addClass("ui-btn-active");					
		}
		$("#button_group a").each(function(){
				var elementID = $(this).attr("id"); 						
				$(document).on('click', '#'+elementID, function(event){  
					if(event.handled !== true) // This will prevent event triggering more then once
					{								
						$("#samplesize").removeClass("ui-btn-active");
						$("#power").removeClass("ui-btn-active");
						$("#"+elementID).addClass("ui-btn-active");	
						
						/* Set the value of Global Variable "solvingForValue". */
						if(elementID == "power"){
							solvingForValue = "Power";																	
						}									
						else{
							solvingForValue = "Sample Size";																							
						}															
					}    														
				});
			});
	});
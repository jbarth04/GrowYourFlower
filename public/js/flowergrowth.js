		var dimension = 500;


		var svg = d3.select('body').append('svg')
			.attr('width', dimension)
			.attr('height', dimension)
			.style('background-color', 'black');

		//centers of flowers
		var cx1 = (0.2 * dimension);
		var cy1 = (0.5 * dimension);
		var cx2 = (0.4 * dimension);
		var cy2 = (0.24 * dimension);
		var cx3 = (0.8 * dimension);
		var cy3 = (0.1 * dimension);
		var cx4 = (0.68 * dimension);
		var cy4 = (0.56 * dimension);


		svg.append("circle")
			.attr("id", "circle1")
			.attr("cx", cx1)
			.attr("cy", cy1)
			.attr("r", (.02 * dimension))
			.attr("fill", "#F0AFC3")

		svg.append("circle")
			.attr("id", "circle2")
			.attr("cx", cx2)
			.attr("cy", cy2)
			.attr("r", (.02 * dimension))
			.attr("fill", "#F0AFC3")
		
		svg.append("circle")
			.attr("id", "circle3")
			.attr("cx", cx3)
			.attr("cy", cy3)
			.attr("r", (.02 * dimension))
			.attr("fill", "#F0AFC3")

		svg.append("circle")
			.attr("id", "circle4")
			.attr("cx", cx4)
			.attr("cy", cy4)
			.attr("r", (.02 * dimension))
			.attr("fill", "#F0AFC3")

		// flower stems
			svg.append("polyline")
			.attr("fill", "none")
			.attr("stroke", "#88C556")
			.attr("points", (0.216*dimension)+","+(0.51*dimension)+" "+(0.36*dimension)+","+(0.7*dimension)+" "+(0.5*dimension)+","+(0.96*dimension))

			svg.append("polyline")
			.attr("fill", "none")
			.attr("stroke", "#88C556")
			.attr("points", (0.4*dimension)+","+(0.256*dimension)+" "+(0.45*dimension)+","+(0.52*dimension)+" "+(0.5*dimension)+","+(0.96*dimension))

			svg.append("polyline")
			.attr("fill", "none")
			.attr("stroke", "#88C556")
			.attr("points", (0.796*dimension)+","+(0.116*dimension)+" "+(0.7*dimension)+","+(0.28*dimension)+" "+(0.58*dimension)+","+(0.6*dimension)+" "+(0.5*dimension)+","+(0.96*dimension))

			svg.append("polyline")
			.attr("fill", "none")
			.attr("stroke", "#88C556")
			.attr("points", (0.676*dimension)+","+(0.576*dimension)+" "+(0.6*dimension)+","+(0.76*dimension)+" "+(0.5*dimension)+","+(0.96*dimension))

		// Define petals and their starting growth points
		var petal1 = svg.append("polygon")
		 	.attr("points", cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1)
		 	.attr("fill", "#E688A4") 

		var petal2 = svg.append("polygon")
		 	.attr("points", cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")
	
		var petal3 = svg.append("polygon")
		 	.attr("points", cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal4 = svg.append("polygon")
		 	.attr("points", cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		 var petal5 = svg.append("polygon")
		 	.attr("points", cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1+" "+cx1+","+cy1)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal6 = svg.append("polygon")
		 	.attr("points", cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")
		
		var petal7 = svg.append("polygon")
		 	.attr("points", cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal8 = svg.append("polygon")
		 	.attr("points", cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal9 = svg.append("polygon")
		 	.attr("points", cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal10 = svg.append("polygon")
		 	.attr("points", cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2+" "+cx2+","+cy2)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")
		var petal11 = svg.append("polygon")
		 	.attr("points", cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")
		
		var petal12 = svg.append("polygon")
		 	.attr("points", cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal13 = svg.append("polygon")
		 	.attr("points", cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal14 = svg.append("polygon")
		 	.attr("points", cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal15 = svg.append("polygon")
		 	.attr("points", cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3+" "+cx3+","+cy3)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")
		var petal16 = svg.append("polygon")
		 	.attr("points", cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")
		
		var petal17 = svg.append("polygon")
		 	.attr("points", cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal18 = svg.append("polygon")
		 	.attr("points", cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal19 = svg.append("polygon")
		 	.attr("points", cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		var petal20 = svg.append("polygon")
		 	.attr("points", cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4+" "+cx4+","+cy4)
		 	.attr("fill", "#E688A4") 
		 	.attr ("stroke", "none")

		d3.select("svg").on("click", function() {
			petal1
			.transition()
			.delay(1500)
			.duration(1000)
			.attr("points", cx1+","+cy1+" "+(cx1-8)+","+(cy1-14)+" "+(cx1-10)+","+(cy1-32)+" "+cx1+","+(cy1-42)+" "+(cx1+12)+","+(cy1-38)+" "+(cx1+12)+","+(cy1-18)+" "+cx1+","+cy1); 
			petal2
			.transition()
			.delay(1500)
			.duration(2000)
			.attr("points", (cx1-5)+","+cy1+" "+(cx1-16)+","+(cy1-10)+" "+(cx1-24)+","+(cy1-18)+" "+(cx1-36)+","+(cy1-12)+" "+(cx1-46)+","+cy1+" "+(cx1-36)+","+(cy1+18)+" "+(cx1-20)+","+(cy1+14)+" "+(cx1-5)+","+cy1);  
			petal3
			.transition()
			.delay(1500)
			.duration(3000)
			.attr("points", (cx1-2)+","+(cy1+2)+" "+(cx1-16)+","+(cy1+10)+" "+(cx1-22)+","+(cy1+16)+" "+(cx1-30)+","+(cy1+24)+" "+(cx1-32)+","+(cy1+46)+" "+(cx1-14)+","+(cy1+38)+" "+(cx1-2)+","+(cy1+16)+" "+(cx1-2)+","+(cy1+2));
			petal4
			.transition()
			.delay(1500)
			.duration(3500)
			.attr("points", (cx1+2)+","+(cy1+6)+" "+(cx1+2)+","+(cy1+18)+" "+(cx1+6)+","+(cy1+30)+" "+(cx1+18)+","+(cy1+38)+" "+(cx1+32)+","+(cy1+44)+" "+(cx1+28)+","+(cy1+24)+" "+(cx1+24)+","+(cy1+12)+" "+(cx1+18)+","+(cy1+8)+" "+(cx1+2)+","+(cy1+6));
			petal5
			.transition()
			.delay(1500)
			.duration(4000)
			.attr("points", (cx1+4)+","+cy1+" "+(cx1+10)+","+(cy1-10)+" "+(cx1+16)+","+(cy1-14)+" "+(cx1+26)+","+(cy1-18)+" "+(cx1+44)+","+(cy1-5)+" "+(cx1+32)+","+(cy1+6)+" "+(cx1+22)+","+(cy1+8)+" "+(cx1+14)+","+(cy1+6)+" "+(cx1+4)+","+cy1); 
			petal6
			.transition()
			.duration(1000)
			.attr("points", cx2+","+cy2+" "+(cx2-8)+","+(cy2-14)+" "+(cx2-10)+","+(cy2-32)+" "+cx2+","+(cy2-42)+" "+(cx2+12)+","+(cy2-38)+" "+(cx2+12)+","+(cy2-18)+" "+cx2+","+cy2); 
			petal7
			.transition()
			.duration(2000)
			.attr("points", (cx2-5)+","+cy2+" "+(cx2-16)+","+(cy2-10)+" "+(cx2-24)+","+(cy2-18)+" "+(cx2-36)+","+(cy2-12)+" "+(cx2-46)+","+cy2+" "+(cx2-36)+","+(cy2+18)+" "+(cx2-20)+","+(cy2+14)+" "+(cx2-5)+","+cy2);  
			petal8
			.transition()
			.duration(3000)
			.attr("points", (cx2-2)+","+(cy2+2)+" "+(cx2-16)+","+(cy2+10)+" "+(cx2-22)+","+(cy2+16)+" "+(cx2-30)+","+(cy2+24)+" "+(cx2-32)+","+(cy2+46)+" "+(cx2-14)+","+(cy2+38)+" "+(cx2-2)+","+(cy2+16)+" "+(cx2-2)+","+(cy2+2));
			petal9
			.transition()
			.duration(3500)
			.attr("points", (cx2+2)+","+(cy2+6)+" "+(cx2+2)+","+(cy2+18)+" "+(cx2+6)+","+(cy2+30)+" "+(cx2+18)+","+(cy2+38)+" "+(cx2+32)+","+(cy2+44)+" "+(cx2+28)+","+(cy2+24)+" "+(cx2+24)+","+(cy2+12)+" "+(cx2+18)+","+(cy2+8)+" "+(cx2+2)+","+(cy2+6));
			petal10
			.transition()
			.duration(4000)
			.attr("points", (cx2+4)+","+cy2+" "+(cx2+10)+","+(cy2-10)+" "+(cx2+16)+","+(cy2-14)+" "+(cx2+26)+","+(cy2-18)+" "+(cx2+44)+","+(cy2-5)+" "+(cx2+32)+","+(cy2+6)+" "+(cx2+22)+","+(cy2+8)+" "+(cx2+14)+","+(cy2+6)+" "+(cx2+4)+","+cy2); 
			petal11
			.transition()
			.delay(3000)
			.duration(1000)
			.attr("points", cx3+","+cy3+" "+(cx3-8)+","+(cy3-14)+" "+(cx3-10)+","+(cy3-32)+" "+cx3+","+(cy3-42)+" "+(cx3+12)+","+(cy3-38)+" "+(cx3+12)+","+(cy3-18)+" "+cx3+","+cy3); 
			petal12
			.transition()
			.delay(3000)
			.duration(2000)
			.attr("points", (cx3-5)+","+cy3+" "+(cx3-16)+","+(cy3-10)+" "+(cx3-24)+","+(cy3-18)+" "+(cx3-36)+","+(cy3-12)+" "+(cx3-46)+","+cy3+" "+(cx3-36)+","+(cy3+18)+" "+(cx3-20)+","+(cy3+14)+" "+(cx3-5)+","+cy3);  
			petal13
			.transition()
			.delay(3000)
			.duration(3000)
			.attr("points", (cx3-2)+","+(cy3+2)+" "+(cx3-16)+","+(cy3+10)+" "+(cx3-22)+","+(cy3+16)+" "+(cx3-30)+","+(cy3+24)+" "+(cx3-32)+","+(cy3+46)+" "+(cx3-14)+","+(cy3+38)+" "+(cx3-2)+","+(cy3+16)+" "+(cx3-2)+","+(cy3+2));
			petal14
			.transition()
			.delay(3000)
			.duration(3500)
			.attr("points", (cx3+2)+","+(cy3+6)+" "+(cx3+2)+","+(cy3+18)+" "+(cx3+6)+","+(cy3+30)+" "+(cx3+18)+","+(cy3+38)+" "+(cx3+32)+","+(cy3+44)+" "+(cx3+28)+","+(cy3+24)+" "+(cx3+24)+","+(cy3+12)+" "+(cx3+18)+","+(cy3+8)+" "+(cx3+2)+","+(cy3+6));
			petal15
			.transition()
			.delay(3000)
			.duration(4000)
			.attr("points", (cx3+4)+","+cy3+" "+(cx3+10)+","+(cy3-10)+" "+(cx3+16)+","+(cy3-14)+" "+(cx3+26)+","+(cy3-18)+" "+(cx3+44)+","+(cy3-5)+" "+(cx3+32)+","+(cy3+6)+" "+(cx3+22)+","+(cy3+8)+" "+(cx3+14)+","+(cy3+6)+" "+(cx3+4)+","+cy3); 
			petal16
			.transition()
			.delay(2000)
			.duration(1000)
			.attr("points", cx4+","+cy4+" "+(cx4-8)+","+(cy4-14)+" "+(cx4-10)+","+(cy4-32)+" "+cx4+","+(cy4-42)+" "+(cx4+12)+","+(cy4-38)+" "+(cx4+12)+","+(cy4-18)+" "+cx4+","+cy4); 
			petal17
			.transition()
			.delay(2000)
			.duration(2000)
			.attr("points", (cx4-5)+","+cy4+" "+(cx4-16)+","+(cy4-10)+" "+(cx4-24)+","+(cy4-18)+" "+(cx4-36)+","+(cy4-12)+" "+(cx4-46)+","+cy4+" "+(cx4-36)+","+(cy4+18)+" "+(cx4-20)+","+(cy4+14)+" "+(cx4-5)+","+cy4);  
			petal18
			.transition()
			.delay(2000)
			.duration(3000)
			.attr("points", (cx4-2)+","+(cy4+2)+" "+(cx4-16)+","+(cy4+10)+" "+(cx4-22)+","+(cy4+16)+" "+(cx4-30)+","+(cy4+24)+" "+(cx4-32)+","+(cy4+46)+" "+(cx4-14)+","+(cy4+38)+" "+(cx4-2)+","+(cy4+16)+" "+(cx4-2)+","+(cy4+2));
			petal19
			.transition()
			.delay(2000)
			.duration(3500)
			.attr("points", (cx4+2)+","+(cy4+6)+" "+(cx4+2)+","+(cy4+18)+" "+(cx4+6)+","+(cy4+30)+" "+(cx4+18)+","+(cy4+38)+" "+(cx4+32)+","+(cy4+44)+" "+(cx4+28)+","+(cy4+24)+" "+(cx4+24)+","+(cy4+12)+" "+(cx4+18)+","+(cy4+8)+" "+(cx4+2)+","+(cy4+6));
			petal20
			.transition()
			.delay(2000)
			.duration(4000)
			.attr("points", (cx4+4)+","+cy4+" "+(cx4+10)+","+(cy4-10)+" "+(cx4+16)+","+(cy4-14)+" "+(cx4+26)+","+(cy4-18)+" "+(cx4+44)+","+(cy4-5)+" "+(cx4+32)+","+(cy4+6)+" "+(cx4+22)+","+(cy4+8)+" "+(cx4+14)+","+(cy4+6)+" "+(cx4+4)+","+cy4); 
		});
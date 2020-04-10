$(function(){
	'use strict';
	$("#addMon").hide();
	$("#one").hide();
	$("#two").hide();
	var map = new Map();
	var array = [];
	var countWase = 0;
	var countWaseAdd = 0;
	var countKei = 0;
	var countKeiAdd = 0;
	
	$("#waseda").on('click',function() {
		if(this.checked) {
		//チェックがついたら、チェックボックスにnameを追加
		var count1 = document.getElementsByClassName("waseda1").length;
		var count2 = document.getElementsByClassName("wasecount").length;
		var count3 = document.getElementsByClassName("keio1").length;
		var count4 = document.getElementsByClassName("keiocount").length;
		var count5 = document.getElementsByClassName("keio3").length;
		countWase = count1 + count2 + count3 + count4 + count5;
		if(countWase === 0) {
			countWase = 0
		} else {
			countWase = countWase
        }

		//keyを取り出してarray[]につめている
		var keys = map.keys();
		for(var key of keys) {
			array.push(key);
        }

        //array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
        for (var value of array) {
            if(value === countWase) {
                countWase = Math.max.apply(null,array) + 1;
            } else {
                countWase = countWase;
            }
        }
        
        //mapにセットしている
		map.set(countWase, 'countWase');
		
		var waseda = document.getElementById("waseda");
		waseda.setAttribute("name","teacherList[" + countWase + "].university");
		
		//<div id="parentM">の中に<input>を形成していく
		var parentM = document.getElementById("parentM");
		var childM = document.createElement("div");
		childM.setAttribute("id","idM");
		
		var name = document.createElement("input");
		name.setAttribute("type","text");
		name.setAttribute("placeholder","教授名");
		name.setAttribute("name","teacherList[" + countWase + "].name");
		name.setAttribute("class","waseda1");
		
		var subject = document.createElement("input");
		subject.setAttribute("type","text");
		subject.setAttribute("placeholder","科目名");
		subject.setAttribute("name","teacherList[" + countWase + "].subject");
		
		
		childM.appendChild(name);
		childM.appendChild(subject);
		
		parentM.appendChild(childM);
		
		
		$("#one").show();
		$("#addMon").show();
		
		} else {
            $("#addMon").hide();
            $("#one").hide();
            $("#idM").remove();
            var checkbox = document.getElementById( "oneMonday" );
            checkbox.checked = false;
            $('#oneMonday').removeAttr('name');
            
            map.delete(countWase);
            map.delete(countWaseAdd);
            
		}
	});
	
	//早稲田のすべてボタンを押したとき
	$("#oneMonday").on('click',function(){
		if(this.checked) {
	        console.log("2番目早稲田" + countWase);
	        
			var oneMonday = document.getElementById("oneMonday");
			oneMonday.setAttribute("name","teacherList[" + countWase + "].one");
			
			$("#addMon").hide();
            $("#idM").remove();
            
            map.delete(countWaseAdd);
            
		} else {
			//チェックがついたら、チェックボックスにnameを追加
			var count1 = document.getElementsByClassName("waseda1").length;
			var count2 = document.getElementsByClassName("wasecount").length;
			var count3 = document.getElementsByClassName("keio1").length;
			var count4 = document.getElementsByClassName("keiocount").length;
			var count5 = document.getElementsByClassName("waseda3").length;
			countWase = count1 + count2 + count3 + count4 + count5;
			if(countWase === 0) {
				countWase = 0
			} else {
				countWase = countWase
	        }

			//keyを取り出してarray[]につめている
			var keys = map.keys();
			for(var key of keys) {
				array.push(key);
	        }

	        //array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
	        for (var value of array) {
	            if(value === countWase) {
	                countWase = Math.max.apply(null,array) + 1;
	            } else {
	                countWase = countWase;
	            }
	        }
	        
	        //mapにセットしている
			map.set(countWase, 'countWase');
			
			var waseda = document.getElementById("waseda");
			waseda.setAttribute("name","teacherList[" + countWase + "].university");
			
			//<div id="parentM">の中に<input>を形成していく
			var parentM = document.getElementById("parentM");
			var childM = document.createElement("div");
			childM.setAttribute("id","idM");
			
			var name = document.createElement("input");
			name.setAttribute("type","text");
			name.setAttribute("placeholder","教授名");
			name.setAttribute("name","teacherList[" + countWase + "].name");
			name.setAttribute("class","waseda1");
			
			var subject = document.createElement("input");
			subject.setAttribute("type","text");
			subject.setAttribute("placeholder","科目名");
			subject.setAttribute("name","teacherList[" + countWase + "].subject");
			
			
			childM.appendChild(name);
			childM.appendChild(subject);
			
			parentM.appendChild(childM);
			
			$('#oneMonday').removeAttr('name');
			
			$("#one").show();
			$("#addMon").show();
		}
	})

	
    $("#addMon").on('click',function(){
        var count1 = document.getElementsByClassName("waseda1").length;
        var count2 = document.getElementsByClassName("wasecount").length;
        var count3 = document.getElementsByClassName("keio1").length;
        var count4 = document.getElementsByClassName("keiocount").length;
        countWaseAdd = count1 + count2 + count3 + count4;
        if(countWaseAdd === 0) {
            countWaseAdd = 0
        } else {
            countWaseAdd = countWaseAdd
        }
        
	    //keyを取り出してarray[]につめている
		var keys = map.keys();
		for(var key of keys) {
			array.push(key);
	    }
	
	    //array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
	    for (var value of array) {
	        if(value === countWaseAdd) {
	            countWaseAdd = Math.max.apply(null,array) + 1;
	        } else {
	            countWaseAdd = countWaseAdd;
	        }
	    }

        //mapにセットしている
		map.set(countWaseAdd, 'countWaseAdd');
            
        var name = document.createElement("input");
        name.setAttribute("type","text");
        name.setAttribute("placeholder","教授名");
        name.setAttribute("name","teacherList[" + countWaseAdd + "].name");
        name.setAttribute("class","waseda2 wasecount");
        
        var subject = document.createElement("input");
        subject.setAttribute("type","text");
        subject.setAttribute("placeholder","科目名");
        subject.setAttribute("name","teacherList[" + countWaseAdd + "].subject");
        subject.setAttribute("class","waseda2");
        
        var university = document.createElement("input");
        university.setAttribute("type","checkbox");
        university.setAttribute("checked","checked");
        university.setAttribute("value","早稲田大学");
        university.setAttribute("name","teacherList[" + countWaseAdd + "].university");
        university.setAttribute("class","waseda2");
        university.setAttribute("id","checkM");
        
        
        var del = document.createElement("input");
        del.setAttribute("type","button");
        del.setAttribute("value","削除");
        del.setAttribute("id","del1");
        del.setAttribute("class","waseda2");
        
       
        var childM = document.getElementById("idM");
        childM.appendChild(name);
        childM.appendChild(subject);
        childM.appendChild(del);
        childM.appendChild(university);
        
        
        $("#checkM").hide();
        
        if(countWaseAdd >= 1) {
            $("#addMon").hide();
        }
        
        $("#del1").on('click',function(){
        	$(".waseda2").remove();
        	map.delete(countWaseAdd);
        	$("#addMon").show();
        })
    });
        
        
	$("#addTue").hide();
    $("#oneT").hide();
	$("#keio").on('click',function() {
		if(this.checked) {
			var count1 = document.getElementsByClassName("waseda1").length;
			var count2 = document.getElementsByClassName("wasecount").length;
			var count3 = document.getElementsByClassName("keio1").length;
			var count4 = document.getElementsByClassName("keiocount").length;
			var count5 = document.getElementsByClassName("waseda3").length;
			countKei = count1 + count2 + count3 + count4 + count5;
			if(countKei === 0) {
				countKei = 0
			} else {
				countKei = countKei
			}
			
			//keyを取り出してarray[]につめている
			var keys = map.keys();
			for(var key of keys) {
				array.push(key);
	        }
	
	        //array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
	        for (var value of array) {
	            if(value === countKei) {
	                countKei = Math.max.apply(null,array) + 1;
	            } else {
	                countKei = countKei;
	            }
	        }
	
	        //mapにセットしている
			map.set(countKei, 'countKei');
			
			console.log("1番目慶應" + countKei);
			
			//チェックがついたら、チェックボックスにnameを追加
			var keio = document.getElementById("keio");
			keio.setAttribute("name","teacherList[" + countKei + "].university");
			
			//<div id="childM">の中に<input>を形成していく
			var parentTue = document.getElementById("parentTue");
			var childTue = document.createElement("div");
			childTue.setAttribute("id","idTue");
			
			var name = document.createElement("input");
			name.setAttribute("type","text");
			name.setAttribute("placeholder","教授名");
			name.setAttribute("name","teacherList[" + countKei + "].name");
			name.setAttribute("class","keio1");
			
			var subject = document.createElement("input");
			subject.setAttribute("type","text");
			subject.setAttribute("placeholder","科目名");
			subject.setAttribute("name","teacherList[" + countKei + "].subject");
			
			childTue.appendChild(name);
			childTue.appendChild(subject);
			
			parentTue.appendChild(childTue);
			
			$("#addTue").show();
			$("#two").show();
			
            
		} else {
            $("#addTue").hide();
            $("#two").hide();
			$("#idTue").remove();
			var checkbox1 = document.getElementById( "oneTuesday" );
            checkbox1.checked = false;
            $('#oneTuesday').removeAttr('name');
			
			map.delete(countKeiAdd)
			
		}
	});
	
		//慶應のすべてボタンを押したとき
		$("#oneTuesday").on('click',function(){
			if(this.checked) {
				console.log("2番目慶應" + countKei);
				
				var oneTuesday = document.getElementById("oneTuesday");
				oneTuesday.setAttribute("name","teacherList[" + countKei + "].one");
				
				$("#addTue").hide();
	            $("#idTue").remove();
	            map.delete(countKei);
	            map.delete(countKeiAdd);
			} else {
				var count1 = document.getElementsByClassName("waseda1").length;
				var count2 = document.getElementsByClassName("wasecount").length;
				var count3 = document.getElementsByClassName("keio1").length;
				var count4 = document.getElementsByClassName("keiocount").length;
				var count5 = document.getElementsByClassName("keio3").length;
				countKei = count1 + count2 + count3 + count4 + count5;
				if(countKei === 0) {
					countKei = 0
				} else {
					countKei = countKei
				}
				
				//keyを取り出してarray[]につめている
				var keys = map.keys();
				for(var key of keys) {
					array.push(key);
		        }
	
		        //array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
		        for (var value of array) {
		            if(value === countKei) {
		                countKei = Math.max.apply(null,array) + 1;
		            } else {
		                countKei = countKei;
		            }
		        }
	
		        //mapにセットしている
				map.set(countKei, 'countKei');
				
				//チェックがついたら、チェックボックスにnameを追加
				var keio = document.getElementById("keio");
				keio.setAttribute("name","teacherList[" + countKei + "].university");
				
				//<div id="childM">の中に<input>を形成していく
				var parentTue = document.getElementById("parentTue");
				var childTue = document.createElement("div");
				childTue.setAttribute("id","idTue");
				
				var name = document.createElement("input");
				name.setAttribute("type","text");
				name.setAttribute("placeholder","教授名");
				name.setAttribute("name","teacherList[" + countKei + "].name");
				name.setAttribute("class","keio1");
				
				var subject = document.createElement("input");
				subject.setAttribute("type","text");
				subject.setAttribute("placeholder","科目名");
				subject.setAttribute("name","teacherList[" + countKei + "].subject");
				
				childTue.appendChild(name);
				childTue.appendChild(subject);
				
				parentTue.appendChild(childTue);
				
				$('#oneTuesday').removeAttr('name');
				
				$("#addTue").show();
				$("#two").show();
			}
		});
	
        $("#addTue").on('click',function(){
            var count1 = document.getElementsByClassName("waseda1").length;
            var count2 = document.getElementsByClassName("wasecount").length;
            var count3 = document.getElementsByClassName("keio1").length;
            var count4 = document.getElementsByClassName("keiocount").length;
            var count5 = document.getElementsByClassName("waseda3").length;
            countKeiAdd = count1 + count2 + count3 + count4 + count5;
            if(countKeiAdd === 0) {
                countKeiAdd = 0
            } else {
                countKeiAdd = countKeiAdd
            }
            
            //keyを取り出してarray[]につめている
            var keys = map.keys();
            for(var key of keys) {
                array.push(key);
            }

            //array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
            for (var value of array) {
                if(value === countKeiAdd) {
                    countKeiAdd = Math.max.apply(null,array) + 1;
                } else {
                    countKeiAdd = countKeiAdd;
                }
            }

            //mapにセットしている
		    map.set(countKeiAdd, 'countKeiAdd');
            
            var name = document.createElement("input");
            name.setAttribute("type","text");
            name.setAttribute("placeholder","教授名");
            name.setAttribute("name","teacherList[" + countKeiAdd + "].name");
            name.setAttribute("class","keio2 keiocount");
            
            var subject = document.createElement("input");
            subject.setAttribute("type","text");
            subject.setAttribute("placeholder","科目名");
            subject.setAttribute("name","teacherList[" + countKeiAdd + "].subject");
            subject.setAttribute("class","keio2");
            
            var university = document.createElement("input");
            university.setAttribute("type","checkbox");
            university.setAttribute("checked","checked");
            university.setAttribute("value","慶應大学");
            university.setAttribute("name","teacherList[" + countKeiAdd + "].university");
            university.setAttribute("class","keio2");
            university.setAttribute("id","checkTue");
            
            var del = document.createElement("input");
            del.setAttribute("type","button");
            del.setAttribute("value","削除");
            del.setAttribute("id","del2");
            del.setAttribute("class","keio2");
            
            
            var childTue = document.getElementById("idTue");   
            childTue.appendChild(name);
            childTue.appendChild(subject);
            childTue.appendChild(del);
            childTue.appendChild(university);
            
            $("#checkTue").hide();
            
            if(countKeiAdd >= 1) {
                $("#addTue").hide();
            }
            
            $("#del2").on('click',function(){
            	$(".keio2").remove();
            	map.delete(countKeiAdd);
            	$("#addTue").show();
            })
            
        });
});
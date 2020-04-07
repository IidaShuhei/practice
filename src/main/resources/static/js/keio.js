// ---------------------------------月曜日--------------------------------------
	
	$("#monday").on('click',function() {
		if(this.checked) {
			// チェックがついたら、チェックボックスにnameを追加
			var count1 = document.getElementsByClassName("mon1").length;
			var count2 = document.getElementsByClassName("moncount").length;
			var count3 = document.getElementsByClassName("tue1").length;
			var count4 = document.getElementsByClassName("tuecount").length;
			var count5 = document.getElementsByClassName("wed1").length;
			var count6 = document.getElementsByClassName("wedcount").length;
			var count7 = document.getElementsByClassName("thu1").length;
			var count8 = document.getElementsByClassName("thucount").length;
			var count9 = document.getElementsByClassName("fri1").length;
			var count10 = document.getElementsByClassName("fricount").length;
			var count11 = document.getElementsByClassName("sat1").length;
			var count12 = document.getElementsByClassName("satcount").length;
			var count13 = document.getElementsByClassName("sun1").length;
			var count14 = document.getElementsByClassName("suncount").length;
			countMon = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14;
			if(countMon === 0) {
				countMon = 0
			} else {
				countMon = countMon
			}
			
			// keyを取り出してarray[]につめている
			var keys = map.keys();
			for(var key of keys) {
				array.push(key);
	        }

	        // array[]を回して中にある値とcountWaseを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
	        for (var value of array) {
	            if(value === countMon) {
	            	countMon = Math.max.apply(null,array) + 1;
	            } else {
	            	countMon = countMon;
	            }
	        }
	        
	        // mapにセットしている
			map.set(countMon, 'countMon');
			
			
			var monday = document.getElementById("monday");
			monday.setAttribute("name","ramenShopTimeList[" + countMon + "].days");
			
			// <div id="parentMon">の中に<div>を形成していく
			var parentMon = document.getElementById("parentMon");
			var childMon = document.createElement("div");
			childMon.setAttribute("id","idMon");
			
			var noonStartTime = document.createElement("input");
			noonStartTime.setAttribute("type","number");
			noonStartTime.setAttribute("placeholder","開始時間");
			noonStartTime.setAttribute("name","ramenShopTimeList[" + countMon + "].noonStartTime");
			noonStartTime.setAttribute("class","mon1");
			
			var noonEndTime = document.createElement("input");
			noonEndTime.setAttribute("type","number");
			noonEndTime.setAttribute("placeholder","終了時間");
			noonEndTime.setAttribute("name","ramenShopTimeList[" + countMon + "].noonEndTime");
			
			childMon.appendChild(noonStartTime);
			childMon.appendChild(document.createTextNode("\u0020"));
			childMon.appendChild(noonEndTime);
			childMon.appendChild( document.createElement('br'));
			childMon.appendChild( document.createElement('br'));
			
			parentMon.appendChild(childMon);
			
			$("#addMon").show();
			
		} else {
			$("#addMon").hide();
			$("#idMon").remove();
			
			map.delete(countMon);
            map.delete(countMonAdd);
		}
	});

	$("#addMon").on('click',function(){
		var count1 = document.getElementsByClassName("mon1").length;
		var count2 = document.getElementsByClassName("moncount").length;
		var count3 = document.getElementsByClassName("tue1").length;
		var count4 = document.getElementsByClassName("tuecount").length;
		var count5 = document.getElementsByClassName("wed1").length;
		var count6 = document.getElementsByClassName("wedcount").length;
		var count7 = document.getElementsByClassName("thu1").length;
		var count8 = document.getElementsByClassName("thucount").length;
		var count9 = document.getElementsByClassName("fri1").length;
		var count10 = document.getElementsByClassName("fricount").length;
		var count11 = document.getElementsByClassName("sat1").length;
		var count12 = document.getElementsByClassName("satcount").length;
		var count13 = document.getElementsByClassName("sun1").length;
		var count14 = document.getElementsByClassName("suncount").length;
		var countMonAdd = count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10 + count11 + count12 + count13 + count14;
		if(countMonAdd === 0) {
			countMonAdd = 0
		} else {
			countMonAdd = countMonAdd
		}
		
		//keyを取り出してarray[]につめている
		var keys = map.keys();
		for(var key of keys) {
			array.push(key);
        }

        //array[]を回して中にある値とcountMonを比べて、同じだったらarray[]の最大値を取得し、その値に＋１したものをcountWaseの値とする
        for (var value of array) {
            if(value === countMonAdd) {
            	countMonAdd = Math.max.apply(null,array) + 1;
            } else {
            	countMonAdd = countMonAdd;
            }
        }

        //mapにセットしている
		map.set(countMonAdd, 'countMonAdd');
		
	    var nightStartTime = document.createElement("input");
	    nightStartTime.setAttribute("type","number");
	    nightStartTime.setAttribute("placeholder","開始時間");
	    nightStartTime.setAttribute("name","ramenShopTimeList[" + countMonAdd + "].nightStartTime");
	    nightStartTime.setAttribute("class","mon2 moncount");
		
		var nightEndTime = document.createElement("input");
		nightEndTime.setAttribute("type","number");
		nightEndTime.setAttribute("placeholder","終了時間");
		nightEndTime.setAttribute("name","ramenShopTimeList[" + countMonAdd + "].nightEndTime");
		nightEndTime.setAttribute("class","mon2");
		
		var days = document.createElement("input");
		days.setAttribute("type","checkbox");
		days.setAttribute("checked","checked");
		days.setAttribute("value","月曜日");
		days.setAttribute("name","ramenShopTimeList[" + countMonAdd + "].days");
		days.setAttribute("id","checkMon");
		days.setAttribute("class","mon2");
		
		
		var del = document.createElement("input");
		del.setAttribute("type","button");
		del.setAttribute("value","削除");
		del.setAttribute("id","del");
		del.setAttribute("class","mon2");
	    
	   
		var childMon = document.getElementById("idMon");
		childMon.appendChild(nightStartTime);
		childMon.appendChild(document.createTextNode("\u0020"))
		childMon.appendChild(nightEndTime);
		childMon.appendChild(days);
		childMon.appendChild(del);
	    
	    $("#checkMon").hide();
	    
	    if(countMonAdd >= 1) {
	    	$("#addMon").hide();
	    }
	    $("#del").on('click',function(){
	    	$(".mon2").remove();
	    	map.delete(countMonAdd);
	    	$("#addMon").show();
	    })
	});

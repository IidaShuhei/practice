$(function(){	
	$("#waseda").on('click',function() {
		if(this.checked) {
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
			
			//すべて選択フォームを作成
			var oneM = document.createElement("div");
			oneM.setAttribute("id","oneM");
			
//			var labelM = document.createElement("label");
//			labelM.setAttribute("for","oneMonday");
//			labelM.appendChild(document.createTextNode("すべて"));
			var one = document.createElement("input");
			one.setAttribute("type","checkbox");
			one.setAttribute("value","すべて");
			one.setAttribute("name","teacherList[" + countWase + "].one");
			one.setAttribute("class","waseda3");
			one.setAttribute("id","oneMonday");
			oneM.appendChild(one);
			
			childM.appendChild(name);
			childM.appendChild(subject);
			
			parentM.appendChild(childM);
			parentM.appendChild(oneM);
		}
		//早稲田のすべてボタンを押したとき
        $("#oneM").on('click',function(){
        		console.log('hello');
//    	$("#addMon").hide();
//        $("#idM").remove();
//        
//        map.delete(countWase);
//        map.delete(countWaseAdd);
        });
	});

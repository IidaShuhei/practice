$(function() {
	var num1;
	
	//クローンする
	var copy = function(i) {
		//クローンを変数に格納
		clonecode = $('.item:last').clone(true);
		
		//数字を＋１し変数に格納
		var num = clonecode.attr('data-formno');
		num1 = parseInt(num) + 1;
		
		//data属性の数字を＋１
		clonecode.attr('data-formno',num1);
		
		//name属性の数字を+1
		var namecode = clonecode.find('input.daigaku').attr('name');
		namecode = namecode.replace(/teacherList\[[0-9]{1,2}/g,'teacherList[' + num1);
		clonecode.find('input.daigaku').attr('name',namecode);
		
		var namecode = clonecode.find('input.teacher').attr('name');
		namecode = namecode.replace(/teacherList\[[0-9]{1,2}/g,'teacherList[' + num1);
		clonecode.find('input.teacher').attr('name',namecode);
		
		var namecode = clonecode.find('input.subject').attr('name');
		namecode = namecode.replace(/teacherList\[[0-9]{1,2}/g,'teacherList[' + num1);
		clonecode.find('input.subject').attr('name',namecode);
		//HTMLに追加
		clonecode.insertAfter($('.item:last'));
	};

	//追加
	$('#add').click(function() {
		copy();
		clonecode.find('input.daigaku').val('');
		clonecode.find('input.teacher').val('');
		clonecode.find('input.subject').val('');
	});	

	//削除
	$('.del').click(function() {
		//クリックされた削除ボタンの親要素を削除
		var len = document.getElementsByClassName("item");
		if(len.length > 1) {
			$(this).parents(".item").remove();
		} else {
			alert('消せません');
		}

		var count = 0;
		
		//番号振り直し
		$('.item').each(function(){
			
			//data属性の数字
			$(this).attr('data-formno',count);
		
			//input質問タイトル番号振り直し
			var name = $('input.daigaku',this).attr('name');
			name = name.replace(/teacherList\[[0-9]{1,2}/g,'teacherList[' + count);
			$('input.daigaku',this).attr('name',name);
			
			var name = $('input.teacher',this).attr('name');
			name = name.replace(/teacherList\[[0-9]{1,2}/g,'teacherList[' + count);
			$('input.teacher',this).attr('name',name);
			
			var name = $('input.subject',this).attr('name');
			name = name.replace(/teacherList\[[0-9]{1,2}/g,'teacherList[' + count);
			$('input.subject',this).attr('name',name);
	
			count += 1;
		});
	});
});
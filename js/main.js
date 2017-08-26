	// 2017-08-26 By CSSLICK
	/* 
		getPage(selector, url[html document])
		예) getPage('#page', 'header.html');
	 	주의: 동적 추가 요소의 이벤트 처리는 on메소드를 사용하시오.
		$(document).on('click', selector, function(){})
	*/
	function getPage(selector, url){
		var pageLoad =
		$.ajax({
			// type: 'post',
			url: url,
			dataType: 'html',
			success: function(data){
				$(selector).append(data);
				console.log(data);
			}
		});

		pageLoad.fail(function(){ 
				$(selector).html('error load page!');
		});	
	} // end getPage
	

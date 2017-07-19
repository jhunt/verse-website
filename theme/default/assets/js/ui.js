$(function () {
	console.log('starting');
	$('#m strong').each(function (i,e) {
		if (!$(e).text().match(/[vV]erse/)) { return }
		$(e).addClass('logo');
	});
});

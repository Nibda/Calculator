$(function() {
	var screen = '',
		subscreen = '',
		key = '',
		first = '',
		operand = '',
		result = '';
		
	$('.btn').on({
		mousedown: function(){
			$(this).css('border', 'inset');
		},
		mouseup: function(){
			$(this).css("border", "groove");
			key = $(this).text();
			calculate(key);
		}
	});

	$(document).keydown(function(){
			// console.log('event:', event.key);
			calculate(event.key);
		});
	
	function calculate(key) {
		if ($.isNumeric(key) || key == ',' || key == '.') {
			if (key == ',' || key == '.') {
				if (screen.indexOf('.') == -1) {
					screen += '.';
				}
			}
			else {
				screen += key;
			}
		}
		if (key == 'C' || key == 'CE' || key == 'Delete') {
			screen = '';
			subscreen = '';
			operand = '';
			result = '';
			first = '';
		}
		if (key == '⬅' || key == 'Backspace') {
			screen = screen.substring(0, screen.length - 1);
		}
		// ====================== '+' =====================
		if (key == '+') {
			operand = '+';
			if (!first) {
				first = screen;
				subscreen = screen + '+';
				screen = '';
			}
			else {
				result = Number(first) + Number(screen);
				first = result;
				subscreen = result + '+';
			}
		}		
		// ========================= '-' ==============
		if (key == '-') {
			if (!screen) {
				screen = '-';
				subscreen = '-'
			}
			else if (screen != '-') {
				operand = '-';
				if (!first) {
					first = screen;
					subscreen = screen + '-';
					screen = '';
				}
				else {
					result = Number(first) - Number(screen);
					first = result;
					subscreen = result + '-';
				}
			}
		}

		// ====================== '*' =====================
		if (key == '*') {
			operand = '*';
			if (!first) {
				first = screen;
				subscreen = screen + '*';
				screen = '';
			}
			else {
				result = Number(first) * Number(screen);
				first = result;
				subscreen = result + '*';
			}
		}

		// ====================== '/' =====================
		if (key == '/') {
			operand = '/';
			if (!first) {
				first = screen;
				subscreen = screen + '/';
				screen = '';
			}
			else {
				result = Number(first) / Number(screen);
				first = result;
				subscreen = result + '/';
			}
		}		
		// =================== '=' =================
		if (key == '=' || key == 'Enter') {
			if (operand == '+') {
				console.log(Number(first), operand, Number(screen));
				result = Number(first) + Number(screen);
			}
			if (operand == '-') {
				console.log(operand)
				result = Number(first) - Number(screen);
			}
			if (operand == '*') {
				console.log(operand)
				result = Number(first) * Number(screen);
			}
			if (operand == '/') {
				console.log(operand)
				result = Number(first) / Number(screen);
			}
			first = '';
			operand = '';
			subscreen = '';
		}
		$('#subscreen').text(subscreen);
		if (result !== '') {
			$('#screen').text(result);
			screen = '';
			result = '';
			subscreen = '';
		}
		else {
			$('#screen').text(screen);
		}
	}
});
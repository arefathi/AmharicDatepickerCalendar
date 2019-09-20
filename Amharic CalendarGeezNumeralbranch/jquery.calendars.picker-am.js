/* http://keith-wood.name/calendars.html
   Amharic (አማርኛ) localisation for calendars datepicker for jQuery.
   Leyu Sisay. */
(function($) {
	$.calendars.picker.regional['am']= {
		renderer: $.calendars.picker.defaultRenderer,
		prevText: 'ያለፈ',
		prevStatus: 'ያለፈውን ወር አሳይ',
		prevJumpText: '&#x3c;&#x3c;',
		prevJumpStatus: 'ያለፈውን ዓመት አሳይ',
		nextText: 'ቀጣይ',
		nextStatus: 'ቀጣዩን ወር አሳይ',
		nextJumpText: '&#x3e;&#x3e;',
		nextJumpStatus: 'ቀጣዩን ዓመት አሳይ',
		currentText: 'አሁን',
		currentStatus: 'የአሁኑን ወር አሳይ',
		todayText: 'ዛሬ',
		todayStatus: 'የዛሬን ወር አሳይ',
		clearText: 'አጥፋ',
		clearStatus: 'የተመረጠውን ቀን አጥፋ',
		closeText: 'ዝጋ',
		closeStatus: 'የቀን መምረጫውን ዝጋ',
		yearStatus: 'ዓመቱን ቀይር',
		monthStatus: 'ወሩን ቀይር',
		weekText: 'ሳም',
		weekStatus: 'የዓመቱ ሳምንት ',
		dayStatus: 'DD, M d, yyyy ምረጥ',
		defaultStatus: 'ቀን ምረጥ',
		isRTL: false,

	//Translation function from Decimal to Bijective Regular Expression Conversion
	//Number Translation Function
    translateNumberFunction: function(num){
	  var string_value = num.toString();
	  
	  //Dictionary mapping deprecated since the number system is not decimal base 10, its bijective.
    //   var mapping = {
	// 	   1: '፩',
    //     2: '፪',
    //     3: '፫',
    //     4: '፬',
    //     5: '፭',
    //     6: '፮',
    //     7: '፯',
    //     8: '፰',
	// 	   9: '፱',
	// 	   10:'፲', 
	// 	   11:'፲፩',
	// 	   20:'፳',
	// 	   30:'፴',
	// 		};

	//Years Translation 2002-2010
	string_value = string_value.replace(new RegExp(2002, 'gy'), '፳፻፪');
	string_value = string_value.replace(new RegExp(2003, 'gy'), '፳፻፫');
	string_value = string_value.replace(new RegExp(2004, 'gy'), '፳፻፬');
	string_value = string_value.replace(new RegExp(2005, 'gy'), '፳፻፭');
	string_value = string_value.replace(new RegExp(2006, 'gy'), '፳፻፮');
	string_value = string_value.replace(new RegExp(2007, 'gy'), '፳፻፯');
	string_value = string_value.replace(new RegExp(2008, 'gy'), '፳፻፰');
	string_value = string_value.replace(new RegExp(2009, 'gy'), '፳፻፱');
	string_value = string_value.replace(new RegExp(2010, 'gy'), '፳፻፲');

	//Year Translation 2011-2020 using global and sticky flag
	string_value = string_value.replace(new RegExp(2011, 'gy'), '፳፻፲፩');
	string_value = string_value.replace(new RegExp(2012, 'gy'), '፳፻፲፪');
	string_value = string_value.replace(new RegExp(2013, 'gy'), '፳፻፲፫');
	string_value = string_value.replace(new RegExp(2014, 'gy'), '፳፻፲፬');
	string_value = string_value.replace(new RegExp(2015, 'gy'), '፳፻፲፭');
	string_value = string_value.replace(new RegExp(2016, 'gy'), '፳፻፲፮');
	string_value = string_value.replace(new RegExp(2017, 'gy'), '፳፻፲፯');
	string_value = string_value.replace(new RegExp(2018, 'gy'), '፳፻፲፰');
	string_value = string_value.replace(new RegExp(2019, 'gy'), '፳፻፲፱');
	string_value = string_value.replace(new RegExp(2020, 'gy'), '፳፻፳');

	//Year Translation 2021-2022 using global and sticky flag
	string_value = string_value.replace(new RegExp(2021, 'gy'), '፳፻፳፩');
	string_value = string_value.replace(new RegExp(2022, 'gy'), '፳፻፳፪');

	//Day Translation from 10-19 using global and sticky flag
	string_value = string_value.replace(new RegExp(10, 'gy'), '፲');
	string_value = string_value.replace(new RegExp(11, 'gy'), '፲፩');
	string_value = string_value.replace(new RegExp(12, 'gy'), '፲፪');
	string_value = string_value.replace(new RegExp(13, 'gy'), '፲፫');
	string_value = string_value.replace(new RegExp(14, 'gy'), '፲፬');
	string_value = string_value.replace(new RegExp(15, 'gy'), '፲፭');
	string_value = string_value.replace(new RegExp(16, 'gy'), '፲፮');
	string_value = string_value.replace(new RegExp(17, 'gy'), '፲፯');
	string_value = string_value.replace(new RegExp(18, 'gy'), '፲፰');
	string_value = string_value.replace(new RegExp(19, 'gy'), '፲፱');
	
	//Day Translation from 20-30 using global and sticky flag
	string_value = string_value.replace(new RegExp(20, 'gy'), '፳');
	string_value = string_value.replace(new RegExp(21, 'gy'), '፳፩');
	string_value = string_value.replace(new RegExp(22, 'gy'), '፳፪');
	string_value = string_value.replace(new RegExp(23, 'gy'), '፳፫');
	string_value = string_value.replace(new RegExp(24, 'gy'), '፳፬');
	string_value = string_value.replace(new RegExp(25, 'gy'), '፳፭');
	string_value = string_value.replace(new RegExp(26, 'gy'), '፳፮');
	string_value = string_value.replace(new RegExp(27, 'gy'), '፳፯');
	string_value = string_value.replace(new RegExp(28, 'gy'), '፳፰');
	string_value = string_value.replace(new RegExp(29, 'gy'), '፳፱');
	string_value = string_value.replace(new RegExp(30, 'gy'), '፴');

	//Year Prefix and Suffix Translation using global and case insensitive flag
	string_value = string_value.replace(new RegExp(13, 'gi'), '፲፫');
	string_value = string_value.replace(new RegExp(12, 'gi'), '፲፪');
	string_value = string_value.replace(new RegExp(11, 'gi'), '፲፩');
	string_value = string_value.replace(new RegExp(10, 'gi'), '፲');
	string_value = string_value.replace(new RegExp(20, 'gy'), '፳');
	string_value = string_value.replace(new RegExp(21, 'gi'), '፳፩');
	string_value = string_value.replace(new RegExp(22, 'gi'), '፳፪');
	string_value = string_value.replace(new RegExp(20, 'gi'), '፳፻');

			//Base numbers and Day Translation from 0 to 9 using global and multiline flag
			string_value = string_value.replace(new RegExp(0, 'gm'), '');
			string_value = string_value.replace(new RegExp(1, 'gm'), '፩');
			string_value = string_value.replace(new RegExp(2, 'gm'), '፪');
			string_value = string_value.replace(new RegExp(3, 'gm'), '፫');
			string_value = string_value.replace(new RegExp(4, 'gm'), '፬');
			string_value = string_value.replace(new RegExp(5, 'gm'), '፭');
			string_value = string_value.replace(new RegExp(6, 'gm'), '፮');
			string_value = string_value.replace(new RegExp(7, 'gm'), '፯');
			string_value = string_value.replace(new RegExp(8, 'gm'), '፰');
			string_value = string_value.replace(new RegExp(9, 'gm'), '፱');


	// 		for (x in mapping) {
    //     // string_value2 = string_value.replace(new RegExp(x, 'g'), mapping[x]);
	// 	string_value = string_value.replace(new RegExp(x, 'gm'), mappin[x]);
	// }

			return string_value;		
    }
	};
	$.calendars.picker.setDefaults($.calendars.picker.regional['am']);
})(jQuery);

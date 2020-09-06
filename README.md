# Amharic Datepicker Calendar
This is an amharic language enabled jquery calendar plugin datepicker, originaly extended and localized from http://keith-wood.name/calendars.html by Arefat Hyeredin

![Semi Amharic Calendar](/img/view.png)![Full Amharic Calendar](/img/view2.png)![English Amharic Calendar](/img/view3.png)![English with Amharic Calendar](/img/view4.png)

This plugin was originaly built using [Keithwood Calendars](http://keith-wood.name/calendars.html).

###### Geez Numeral
In order to use the calendar with geez (amharic) numerals, use the branched v2 geez patch, by using a deprecated regular expression mapping of the Amharic Number System.


*** Localized and Language referencd by Arefat Hyeredin. ***

## Language
Can enable and disable amharic language localization by removing:
```
'am' from the line, it will result english writings of the amharic months and years.

var calendar = $.calendars.instance('ethiopian','am');
 change to 
var calendar = $.calendars.instance('ethiopian');
```
Include all necessary files:
```
<script type="text/javascript" src="js/jquery.calendars.js"></script>
<script type="text/javascript" src="js/jquery.calendars.plus.js"></script>
<script type="text/javascript" src="js/jquery.calendars.picker.js"></script>

<script type="text/javascript" src="js/jquery.calendars.ethiopian.js"></script>
<script type="text/javascript" src="js/jquery.calendars.ethiopian-am.js"></script>
<script type="text/javascript" src="js/jquery.calendars.picker-am.js"></script>
```

## Theme
Can change the image and color theme by changing the css:
```
<link rel="stylesheet" href="css/redmond.calendars.picker.css"
 
 change to the other css files or any other theme.
```
## Minify
 Can use the minified versions of the js files by changing the script on the header
```
<script src="js/jquery.calendars.ethiopian.min.js"></script>
<script src="js/jquery.calendars.min.js"></script>
```

## Numeral Localization using Regualar Expression Encoding
```
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
   
   // Other mappings for the months and the years included with different flags.
   Flags

g => global. All matches (don't return on the first match).
m => multi-line. Causes ^ & $ to match the begin/end of each line (not only begin/end of string).
i => insensitive. Case insensitive match (ignores case of [a-zA-Z]).
u => unicode : Pattern strings are treated as UTF-16. Also causes escape sequences to match Unicode characters.
y => sticky: matches only from the index indicated by the lastIndex property of this regular expression in the
target string (and does not attempt to match from any later indexes).

```

## Secondary Field
-------------------------------
> If the calendarspicker input has an attribute `data-gregorian-field`, the selector provided in that attribute will get the        Gregorian date value inserted.
    <!-- the form element that brings up the date picker and shows the localized date -->
    <input class="calendarspicker" type="input" data-gregorian-field="due_date" />
    <!-- the actual value that gets passed along the form post to the backend -->
    <input name="due_date" type="hidden" />
This is so a 'normal' date can be easily processed in the backend from a form submission, instead of having to jump through hoops to convert between calendars and languages.
-------------------------------

##  Disabling keyboard input
---------------------------
Another optional parameter, to disable keyboard input for the input field, is provided in branch.
    $(function(){
      $('.calendarspicker').calendarsPicker({
        calendar: $.calendars.instance('ethiopian', 'am'),
        disableInput: true
      });
    });
    
---------------------------

#### Todos

- [ ] Integrate all Geez Numerals
- [x] Integrate geez numerals necessary for the calendar plugin
- [x] Include Detail configurations of timeindicator.

@github/arefathi What do you think about these updates? Any more ideas?...

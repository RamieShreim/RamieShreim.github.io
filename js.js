
var quote_index = Math.floor(Math.random()*5);

switch(quote_index)

{
    case 0: $(".side_rect").append("<p class='sidebar_text'>\"Sometimes the best way<br> to fix something is to have  <br> someone else break it.\" <br> <br> -Ramie Ghassan Shreim </p>");
    
    break;

    case 1: $(".side_rect").append("<p class='sidebar_text'> \"Welcome to my website! <br> I hope you like it, I made <br> it from scratch.\" <br> <br> -Ramie Ghassan Shreim</p>");
    
    break;

    case 2: $(".side_rect").append("<p class='sidebar_text'> \"Design, test, repeat.\" <br> <br> -Ramie Ghassan Shreim</p>");
    
    break;

    
    case 3: $(".side_rect").append("<p class='sidebar_text' > \"These quotes are random, <br> try refreshing the page!\" <br> <br> -Ramie Ghassan Shreim</p>");
    
    break;

    case 4: $(".side_rect").append("<p class='sidebar_text'> \"Do you like my drawing?\" <br> <br> -Ramie Ghassan Shreim </p>");
    
    break;



}



console.log(quote_index);
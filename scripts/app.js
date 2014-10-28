// JavaScript Document
$(document).ready(function(){
$('#item').keypress(addItem);
$('.list-items').on('click', '.donecheck', markDone);
$('.list-items').on('click', '.removecheck', removeItem);


//add shopping list item
function addItem(e){
	if(e.which==13)//Enter key pressed
	{
		var input = $(this).val();
		var item = "<li><span class='name'>" +input+ "</span><span class='done'><input class='donecheck' type='checkbox'></input></span><span class='remove'><input type='checkbox' class='removecheck'></input></span></li>";
		$(this).closest('.shopping-list').find('.list-items').append($(item));
		$(this).val('');
	}
};

//set Done check mark
function markDone(e){
	if($(this).prop('checked') == true)
		$(this).closest('li').find('.name').addClass('cancelled');
	else
		$(this).closest('li').find('.name').removeClass('cancelled');
};

//remove item
function removeItem(e){
	if($(this).prop('checked') == true)
		$(this).closest('li').remove();
};

});//document ready
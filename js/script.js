//create a refernece variable that hold or makes a call to the UL where we will send the input value when add skill is clicked
const $skillsList = $("#mySkills");
//console.log($skillsList)

//Create a on click event that captures the input value when the add skill button is clicked
$("#addSkill").on('click', () => {
  //create a variable that stores the value of the input 
  let $inputValue = $("#myInput").val();

  //Create a new list item with the value of what is typed in the input field
  const $newSkill = $(`<li><i class="fa-solid fa-rectangle-xmark x"></i>${$inputValue}</li>`);
  
  //take the value of the input and append it to the skills list
  $($skillsList).append($newSkill);
  console.log($newSkill)

  $("#myInput").val('');

  //Add event listener that removes skill when its clicked on(later we will updated to add a icon we can click)
  $($newSkill).on('click', function() {
    $(this).remove()
    console.log(this)
  })



  ///change the above event listener so that wheen the icon is clicked the li is deleted
})

//removed main heading when its clicked
$("#mainHeading").on('click', function() {
  $(this).remove();
})









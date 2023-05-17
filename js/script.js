//Create a on click event that captures the input value when the add skill button is clicked
$("#addSkill").on('click', () => {
  //create a variable that stores the value of the input 
  const inputValue = $('#myInput').val();
  //take the value of the input and append it to the button of  the skills list
  $("#mySkills").append(inputValue);
  console.log(inputValue)
})



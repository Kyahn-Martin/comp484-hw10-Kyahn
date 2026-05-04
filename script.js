$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    /* Call the notification element as empty to initialize it, allocating the space for it and preventing 
    the page from jumping when the notification is called later on */
    $('#notification').text('').fadeTo(0, 1).delay(0).fadeTo(1000, 0);
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    /* Here i'm using the .bind() method to bind the click event instead of the .click() method
    This would allow attatching multiple methods with one bind in the format "event:attatchment"*/
    $('.treat-button').bind
    ({
      click:(clickedTreatButton)
    })
    $('.play-button').bind
    ({
    click:(clickedPlayButton)
    })
    $('.exercise-button').bind
    ({
      click:(clickedExerciseButton),
    })
    $('.toy-button').bind
    ({
      click:(clickedGiveToy)
    }) 
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Fido", weight:10, happiness:5, toys:0};

    function clickedTreatButton() 
    {
      pet_info.happiness += 1;
      pet_info.weight += 1;
      // Add a notification that says "You gave Fido a treat!" that fades in and out using the .fadeTo() method
      $('#notification').text('You gave Fido a treat!').fadeTo(0, 1).delay(2000).fadeTo(1000, 0);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() 
    {
      pet_info.happiness += 1;
      pet_info.weight -= 1;
      // Each button click has its unique notification
      $('#notification').text('You played with Fido!').fadeTo(0, 1).delay(2000).fadeTo(1000, 0);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() 
    {
      pet_info.happiness -= 1;
      pet_info.weight -= 1;
      $('#notification').text('You exercised with Fido!').fadeTo(0, 1).delay(2000).fadeTo(1000, 0);
      checkAndUpdatePetInfoInHtml();
    }
    function clickedGiveToy()
    {
      pet_info.toys += 1;
      pet_info.happiness += 1;
      $('#notification').text('You gave Fido a toy!').fadeTo(0, 1).delay(2000).fadeTo(1000, 0);
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight <= 0)
      {
        // If the wight reaches zero, the pet dies and you can't interact with it
        $('#notification').text(pet_info.name + ' has died').fadeTo(0, 1).delay(2000)
        pet_info.weight = 0;
        pet_info.happiness = 0;
        // After the pet dies, change the color of the buttons to red and unbind the click function so you can't interact with it anymore
        // More specifically the .add method allows you to add multiple selectors to the same jQuery object, so you can apply the same CSS and unbind methods to all of the buttons at once
        $('.exercise-button').add('.play-button').add('.toy-button').add('.treat-button').css('color', 'red');
        $('.treat-button').unbind('click').add('.exercise-button').add('.play-button').add('.toy-button').unbind('click');
        // Plays a sound effect when the pet dies
        $('#audio1')[0].play();
      }
      if (pet_info.happiness <= 0)
      {
        // Plays a sound effect when the pet becomes too sad
        $('#audio')[0].play();
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() 
    {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.toys').text(pet_info.toys);
      $('.toys-section').toggle(pet_info.toys > 0);
      // Depending on the weight and happiness of your pet, change the image to a happy dog, sad dog, or skeleton dog
      if (pet_info.weight === 0) 
        {
        $('.pet-image').attr('src', 'images/sdog.png');
        } 
      else if(pet_info.happiness === 0) 
        {
        $('.pet-image').attr('src', 'images/sad_dog.jpg');
        }
        else {
          $('.pet-image').attr('src', 'images/happy_dog.jpg');
        }
      }
    
  
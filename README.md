# Work Day Scheduler

## Description

This assingment is a calendar application that allows a user to save events for the majority of the day by modifying the given starter code. This application uses Moment.js for the date that is in the top header. In the body there is the time blocks that are starting at 9am and ending at 5pm. Using bootstrap classes I gave the html the style for the time blocks that show the time on the far left the text section in the middle, and the save buttons at the end. I used mostly jquery for the JavaScript portion of the assignment. When the user enters text for an event (memo, appointment, etc.) the user can save the message and it will store it in the localStorage. The function in the JavaScript then grabs the users saved message and places it back in the time block if the user leaves the page, refreshes page, or erases it. The function "scheduleTrack()" also contains if statements that change the color of the time block depending on the actual current time (grey for past, red for present, and green for future).

## Usage/Screen Shot(s)

Here the current date is display underneath the header 

![](Screenshot%20(3).png)

In the body the time block displays the color of each block based on the time 

![](Screenshot%20(4).png)

here the local storage shows the message in the time block being saved 

![](Screenshot%20(5).png)

## Link

https://javier2596.github.io/Workday-Scheduler/

## Credits 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

https://www.youtube.com/watch?v=Cda9N6C7l6Y

https://www.youtube.com/watch?v=k8yJCeuP6I8&t=633s

## License

MIT License

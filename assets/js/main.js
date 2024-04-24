/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

//1) Import songs array using modules.

import songs from "./songs.js";
console.log("1", songs);

//2. Use the map function to create a new array with the title of each song in uppercase letters.

const uppercaseTitles = songs.map((song) => song.title.toUpperCase());
console.log("2", uppercaseTitles);

//3. Use the filter function to create a new array with all the songs released before 1975.

const songsBefore = songs.filter((song) => song.year < 1975);
console.log("3", songsBefore);

//4. Use destructuring to create a variable that stores the title of the first song in the array.

const [{title: firstSong}] = songs;
console.log("4", firstSong);

//5. Use the find function to get the object representing the song "Hotel California".

const songHotelCalifornia = songs.find((song) => song.title === "Hotel California");
console.log("5", songHotelCalifornia);

//6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log("6", sum(20, 30, 50));

//7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

const songTemplateLiterals = songs.map((song) => `${song.title} - ${song.artist} (${song.year})`);
console.log("7", songTemplateLiterals);

//8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

const beatlesSongs = songs.filter(({artist}) => artist === "The Beatles").map(({title}) => title);
console.log("8", beatlesSongs);

//9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

const totalNumberYears = songs.reduce((acc, curr) => acc + curr.year, 0);
console.log("9", totalNumberYears);

//10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

import { averageSongsYears } from "./utils.js";

const avrgSongsYears = averageSongsYears(songs);
console.log("10", avrgSongsYears);

//11. Use the find function to get the object representing the song with the longest title.

const longTitle = songs.find(
    (song) =>
      song.title.length === Math.max(...songs.map(({ title }) => title.length))
  );
  console.log("11", longTitle);

//12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

const { title, artist, year} = songs[0];
console.log("12", `${title} by ${artist} - ${year}`);

//13. Use the rest operator to create a new array without the first element.

const [, ...restOfTheSongs] = songs;
console.log("13", restOfTheSongs);

//14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

import { filterFunction } from "./utils.js";
const loveSongs = filterFunction(songs, ({ title }) => title.includes("Love"));
console.log("14", loveSongs);

//15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

const longSongs = songs.every(({title}) => title.length >= 5);
console.log("15", longSongs);

//16. Use the some() method to check if there are any songs from the 80s.

const songsEighties = songs.some(({year}) => year >= 1980 && year < 1990);
console.log("16", songsEighties);

//17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

const letItBe = songs.find(({ title }) => title === "Let It Be");
const releaseString = `${letItBe.artist} released ${letItBe.title} in ${letItBe.year}`;
console.log("17", releaseString);

//18. Use the map() method to create a new array with just the artist names.

const nameArtist = songs.map(({artist}) => artist);
console.log("18", nameArtist);

//19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

const randomSong = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log("19", randomSong(songs));
console.log(randomSong(songs));
console.log(randomSong(songs));

//20. Write your own function using at least 3 concepts.
//Mostrar el titulo, artista y año de las canciones a partir de los 80 y sumar los años de estas.

const mySongsEighties = songs.filter(({year}) => year >= 1980);
console.log("20", mySongsEighties);

const myTotalNumber = mySongsEighties.reduce((acc, curr) => acc + curr.year, 0);
console.log("Promedio de años: ", myTotalNumber);




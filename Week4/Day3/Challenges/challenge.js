class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    //“uploader parameter watched all time parameter of title parameter!”
    return `${this.uploader} watched all ${this.time} of ${this.title}!`;
  }
}
//Instantiate a new Video instance and call the watch() method.
video1 = new Video("Learning JavaScript", "John Doe", "2 hours");
video1.watch(); // "John Doe watched all 2 hours of Learning JavaScript!"
console.log(video1.watch());
//Instantiate a second Video instance with different values.
video2 = new Video("Understanding CSS", "Jane Smith", "1.5 hours");
video2.watch(); // "Jane Smith watched all 1.5 hours of Understanding CSS!"
console.log(video2.watch()); // "Jane Smith watched all 1.5 hours of Understanding CSS!"
//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.
const videos = [
  new Video("Learning JavaScript", "John Doe", "2 hours"),
  new Video("Understanding CSS", "Jane Smith", "1.5 hours"),
  new Video("Mastering HTML", "Alice Johnson", "3 hours"),
  new Video("Exploring React", "Bob Brown", "4 hours"),
  new Video("Diving into Node.js", "Charlie White", "2.5 hours")
];

//Bonus: Loop through the array to instantiate those instances.
videos.forEach(video => {
  console.log(video.watch());
});

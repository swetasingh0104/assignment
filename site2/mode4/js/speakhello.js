 
(function(window){
	var speakWord = "Hello";
	var hellospeaker={};
	hellospeaker.speak = function(name) {
  	console.log(speakWord + " " + name);
}
	window.hellospeaker = hellospeaker;
})(window);


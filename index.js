function shout(string) {
return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
    }

function logShout(string) {
        return string.toUpperCase();
        }
function logWhisper(string) {
            return string.toLowerCase();
            }

           function sayHiToHeadphonedRoommate(phrase) {
                if (phrase === phrase.toLowerCase()) {
                    return "I can't hear you!";
                } else if (phrase === phrase.toUpperCase()) {
                    return "YES INDEED!";
                } else if (phrase === "Let's have dinner together!") {
                    return "I would love to!";
                } else {
                    return "I'm not sure what you said.";
                }
            }
            
            // Testing the function
            console.log(sayHiToHeadphonedRoommate("hello"));  // Output: I can't hear you!
            console.log(sayHiToHeadphonedRoommate("HELLO"));  // Output: YES INDEED!
            console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));  // Output: I would love to!
 
/*
describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});
*/

function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const lowly = string.toLowerCase();
    if (lowly === string) {
        return "I can't hear you!"
    }
    const uppy = string.toUpperCase();
    if (uppy === string) {
        return "YES INDEED!"
    }
    const dindin = "Let\'s have dinner together!"
    if (dindin === string) {
        return "I would love to!"
    }

}
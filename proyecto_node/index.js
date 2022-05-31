const { final } = require("./readConsole");
const { escribir } = require("./writeAndReadObject");
let fs=require("fs");
let readline=require("readline")
final(function(persona){
    escribir("persona4.json",persona)
});
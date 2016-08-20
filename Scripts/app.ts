/// <reference path="objects/label.ts"/>

/**
 * Author : Christopher Ritchil
 * Student # : 300702644
 * Date Created : August 19th, 2016
 * Date updated: August 19th, 2016
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var canvas:HTMLElement;
    var stage:createjs.Stage;
    var helloLabel:objects.Label;

    // app entry function
    function init():void {

        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }

    function gameLoop():void {
        helloLabel.rotation += 5;
        stage.update(); // refresh the stage container
    }


    function main():void {
        helloLabel = new objects.Label("Hello World!", "40px Consolas","#000000", 160, 160, true);
        stage.addChild(helloLabel);
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();
/**
 * Author : Christopher Ritchil
 * Student # : 300702644
 * Date Created : August 19th, 2016
 * Date updated: August 19th, 2016
 * Description: This web application demonstrates Assignment 4 - JavaScript Banner Ad
 * website: 
 * Github: 
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var stage;
    var keySkillsLabel;
    var techSkillsLabel;
    var viewProfileBtn;
    var keySkills = [];
    var techSkills = [];
    var stopAd = false;

    techSkills[0] = "C#";
    techSkills[1] = "C";
    techSkills[2] = "JavaScript"
    techSkills[3] = "Shell Script";
    techSkills[4] = "Database Design";
    techSkills[5] = "SQL"



    keySkills[0] = "Web Design";
    keySkills[1] = "Windows form application development";
    keySkills[2] = "System Design";
    keySkills[3] = "Database Design";
    keySkills[4] = "Linux OS";

    /*   
    * Initialize the canvas setting
    * 
    * @function init
    * @returns {void}
    */
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 5; // 60 frames per second
        createjs.Ticker.on("tick", playAd); // call playAd every frame
        designAd();
    }

    /*   
     * This function is to playAd
     * 
     * @function playAd
     * @returns {void}
     */
    function playAd() {
        var skillIndex = Math.floor((Math.random() * 10));
        keySkillsLabel.x += 5;
        techSkillsLabel.x += 5;
      
      
        if (keySkillsLabel.x >= 250) {
            keySkillsLabel.x = 0;
            keySkillsLabel.text = keySkills[skillIndex];
            if (skillIndex > 4) {
                keySkillsLabel.text = "Programming";
            }
        }

        // animation move for tech skills
        if (techSkillsLabel.x > 250) {
            techSkillsLabel.x = 150;
            techSkillsLabel.text = techSkills[skillIndex];
        }
        if (stopAd != true) {
            stage.update(); 
            
        }
    }

    /*   
  * This function is to add viewProfile Image to the canvas
  * 
  * @function addViewProfile
  * @returns {void}
  */
    function addViewProfile() {
        var viewProfile = new createjs.Bitmap("/Content/images/bg.png");
        viewProfile.addEventListener('click', onViewProfileClick);
        stage.addChild(viewProfile);
    }


    function onViewProfileClick() {
        stopAd = true;
    }

    /*   
 * This function is to add skills label for ad animaiton
 * 
 * @function addSkillLabel
 * @returns {void}
 */
    function addSkillLabel() {
        keySkillsLabel = new objects.Label("Software Eng.", "20px Consolas", "#000000", 150, 60, true);
        techSkillsLabel = new objects.Label("Programming", "20px Consolas", "#000000", 200, 150, true);
        stage.addChild(keySkillsLabel);
        stage.addChild(techSkillsLabel);
    }

    /*   
 * This function is to design ad banner
 * 
 * @function designAd
 * @returns {void}
 */
    function designAd() {
        addViewProfile();
        addSkillLabel();
        stage.update();

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
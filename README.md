# Comp20 Web Programming 
# Final Project, Fall 2016
# Team 9
# By: Hannah Freedman, Josie Barth, Catherine Cowell, Elif Olmez

Project Title

    Grow Your Flower 

Problem statement (i.e., what is the problem?)

    A lot of college students plan their day around what they have to do for classes, readings to do and deadlines to meet. In the process, we tend to forget about self-care, and how important it is to take time for yourself and make sure that your basic needs are being met before your classes.  That is why we have designed a prototype for a self-care application.  

How do you solve the problem? 

    We have designed a prototype for a self-care web application in which the user tends to a “self-care flower,” which, when fully sprouted is added to their garden.  When the user documents an act of self-care (drinking water, sleeping more than 6 hours, getting exercise, etc.) by clicking a button on the app, their flower will grow a little bit. If they continue to nurture the flower, the flower will become fully grown and they can start growing a new flower, and begin to cultivate a garden.

List of all the features that your team will implement (including which of the "Pick 4" items were chosen by the team). Your team will be held accountable for the features you list!

    Geolocation will be collected both to determine which background image to display reflecting the weather in the user’s location, as well as to populate the ecosystem map with users and their locations. 

    Server-side data persistence to store what self-care acts the user has engaged in and the state of the user’s flower

    Front-end framework (Bootstrap) to make the interface user friendly and look nice

    Send emails, SMSes or push notifications as a daily reminder to “water your flower” if user is inactive for more than a day and a notification if you receive a message from another user
    *****UPDATE*******
    Instead of sending emails or other notifications to the user, our team will be using D3.js, a js framework for games as         our fourth "Pick 4"

What data will your prototype be using and collecting

    User's account information - user name and password using Facebook API
    User's geo-location
    User input for custom categories of self care in addition to the existing categories


Any algorithms or special techniques that will be necessary

    As of now, we aren’t using any special algorithms.  We are depending on some sort of database to store and retrieve data about the user’s self care acts and the state of the user’s flower

What APIs we'll be using

    Weather - https://openweathermap.org/api
    Facebook Login - https://developers.facebook.com/docs/facebook-login

Electronic mockups of what your team will be developing using wireframes.

    Please see file “Mockup Wireframe” for a PDF version of the mockups for our app

Resources
    How to protect API keys and use them LOCALLY
        https://www.linkedin.com/pulse/protect-your-api-keys-using-environment-variables-nodejs-dale-corns

#Comments By Ming
* "User's account information - user name and password" - Please do not build or roll-your-own login system.  Use something established to save your time.
* This idea is great, reminds me a lot of the Tamagotchi --remember those?

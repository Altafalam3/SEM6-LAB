var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/personal-info', {
        templateUrl: 'personalInfo.html',
        controller: 'PersonalInfoController'
    })
    .when('/video-audio', {
        templateUrl: 'videoAudio.html',
        controller: 'VideoAudioController'
    })
    .when('/registration-form', {
        templateUrl: 'registrationForm.html',
        controller: 'RegistrationFormController'
    })
    .otherwise({
        redirectTo: '/personal-info'
    });
});

app.controller('PersonalInfoController', function($scope) {
    // Controller logic for personal info page
});

app.controller('VideoAudioController', function($scope) {
    // Controller logic for video and audio page
});

app.controller('RegistrationFormController', function($scope) {
    // Controller logic for registration form page
});

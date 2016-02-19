angular.module('starter.controllers',[])

    .controller('MainCtrl', function($scope, Camera, $cordovaCapture, $sce) {

        $scope.videoPreview = '';
        $scope.videoType = 'video/mp4';

        $scope.captureVideo = function() {

            $cordovaCapture.captureVideo().then(function(videoData) {
                $scope.photoPreview = "";
                $scope.videoType = videoData[0].type;
                $scope.videoPreview = videoData[0].fullPath;

            }).error(function(data) {
                console.log('ERROR: ' + data);
            });
        };

        $scope.getPhoto = function() {

            var options = {
                quality: 75,
                allowEdit: true,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            Camera.getPicture(options).then(function(imageURI) {
                $scope.videoPreview = "";
                $scope.photoPreview = imageURI;
            }, function(err) {
                console.err(err);
            });
        };

        $scope.chooseMedia = function (mediaType) {

            switch(mediaType) {
                case 'photo': mediaType = navigator.camera.MediaType.PICTURE; break;
                case 'video': mediaType = navigator.camera.MediaType.VIDEO; break;
                default: mediaType = navigator.camera.MediaType.ALLMEDIA; break;
            }

            var options = {
                quality: 75,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: navigator.camera.EncodingType.JPEG,
                mediaType:mediaType,
                targetWidth: 300,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            Camera.getPicture(options).then(function (mediaURI) {

                console.log('Media URI '+mediaURI);
                $scope.photoPreview = "";
                $scope.videoPreview = "";
                if(mediaType == navigator.camera.MediaType.PICTURE) {

                    $scope.photoPreview = $sce.trustAsResourceUrl(mediaURI);

                } else if (mediaType == navigator.camera.MediaType.VIDEO){

                    $scope.videoPreview = $sce.trustAsResourceUrl(mediaURI);
                }
            }, function (err) {
                console.log('ERRO '+err);
            });
        }

    });


# ionic-camera-example

Ionic code example with Cordova Camera/Media Capture plugin to take pictures and capture Videos.

## Using this example ##

First thing, make sure the ionic utility is installed:

`$ sudo npm install -g ionic`

Then run:
```
$ git clone git@github.com:fajohann/ionic-camera-example.git
$ cd ionic-camera-example
```
I have tested in Android. So to add this platform follow:

`$ ionic add platform android`

If you have an emulator (or device connected) like Genymotion, run it and use this command:

`$ ionic run android`

## Troubleshooting ##

Most of examples using Ionic and `cordova-plugin-camera` in the Internet using the latest version of this plugin. In my case,
this plugin returns `null` when I use `getPicture` function. So, I had to use oldest version of this plugin calling `org.apache.cordova.camera`
and works fine.

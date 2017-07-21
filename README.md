## Tango Cordova Demo

This is a project to demonstrate integration of Tango Targeting SDK in a Cordova project.

## Make it work

### 1. Download

Download it using `git clone` or take the zip.

### 2. Prepare

As you can see the `/plugins` and `/platforms` folders are not present. To fix this, navigate to the root folder of the project. The run the following line to add the missing plugins.

```bash
cordova prepare
```

**Notice the `cordova-plugin-tango`.**

Now add the android and iOS platforms with `cordova platform add [android|ios]`.

### 3. Configure

Nothing will really happen now as we still need a Tango SDK key. Create a file `config_values.json` and place it in the root folder. Its contents should be like this:

```json
{
    "tango_api_key" : "<your-tango-api-key>",
    "tango_debug_mode" : true
}
```

A hook (see `/hooks/before_build.js`) will read these values and place them in appropriate places for each platform.

**Note:** `tango_debug_mode` will work only for Android.

### 4. Run & Test

Use `cordova build` then `cordova run` to build and run the project. Create some campaigns and send them for testing purposes. Additionally, check the logs in a LogCat for Android.


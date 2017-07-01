package com.reactnativeexample.modules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * Created by Jia.Lin on 2017/7/1.
 */

public class JEventListener extends ReactContextBaseJavaModule {

    private ReactContext mReactContext;

    public JEventListener(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    @ReactMethod
    public void test() {
        sendEvent(mReactContext, "js_event", "Event is from Native");
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable Object data) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, data);
    }

    @Override
    public String getName() {
        return "JEventListener";
    }
}

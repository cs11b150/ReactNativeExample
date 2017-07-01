package com.reactnativeexample.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Jia.Lin on 2017/7/1.
 */

public class JCallbacks extends ReactContextBaseJavaModule {

    private static int count = 0;

    public JCallbacks(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void test(Callback callback) {
        /*
        原生模块通常只应调用回调函数一次。但是，它可以保存callback并在将来调用
         */
        count ++;
        callback.invoke("native test Has been called, count = " + count);
    }

    @ReactMethod
    public void testPromises(Promise promise) {
        count ++;
        promise.resolve("native testPromises Has been called, count = " + count);
    }

    @Override
    public String getName() {
        return "JCallbacks";
    }
}

package com.fotoapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.bridge.*;
import com.facebook.react.uimanager.ViewManager;

import java.util.*;


/*
* A custom packager is only needed if you want to load any custom React packages into the reactContext
* Then the custom packages would be available via javascript as per http://facebook.github.io/react-native/releases/0.27/docs/native-modules-android.html
*/
class FotoAppPackage implements ReactPackage {

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {
    return Collections.emptyList();
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    //Add your custom module here
    //modules.add(new CustomFooModule(reactContext));

    return modules;
  }

}

// https://github.com/whitedogg13/react-native-nfc-manager

import React from "react";
import { Text, View } from "react-native";
import style from "./styles";


export default function NfcRead(){
    
// Pre-step, call this before any NFC operations
async function initNfc() {
    await NfcManager.start();
  }
  
  function readNdef() {
    const cleanUp = () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      NfcManager.setEventListener(NfcEvents.SessionClosed, null);
    };
  
    return new Promise((resolve) => {
      let tagFound = null;
  
      NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
        tagFound = tag;
        resolve(tagFound);
        NfcManager.setAlertMessageIOS('NDEF tag found');
        NfcManager.unregisterTagEvent().catch(() => 0);
      });
  
      NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
        cleanUp();
        if (!tagFound) {
          resolve();
        }
      });
  
      NfcManager.registerTagEvent();
    });
    
  }
  readNdef();
}
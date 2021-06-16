/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
var zoneFootballName = "popupFootballZone";

var currentPopup : any = undefined;

WA.onEnterZone(zoneFootballName, () => {
    currentPopup = WA.openPopup("popUpFootball", "Congratulations ! You found a ball of the EURO 2021. There is two more to find in our office. If you find them, send the three codes to g.pitaud@workadventu.re. THE CODE : 332UW", [
        {
            label: "Close",
            className: "normal",
            callback: (popup => {
                popup.close();
            })
        }]);
})

WA.onLeaveZone(zoneFootballName, closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
var zoneFootballName = "popupFootballZone";

var currentPopup : any = undefined;

WA.onEnterZone(zoneFootballName, () => {
    currentPopup = WA.openPopup("popUpFootball", "Congratulations ! You found a ball of the EURO 2021. There is two more to find in our office. If you find them, send the three codes to g.pitaud@workadventu.re. THE CODE : E466A", [
        {
            label: "Close",
            className: "normal",
            callback: (popup => {
                popup.close();
            })
        }]);
})

WA.onLeaveZone(zoneFootballName, closePopUp3)


function closePopUp3(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneWelcomeToTCMName = "popUpWelcomeToTCM";
var zoneMeetTheDevTeamName = "popUpMeetTheDevTeam";
var zoneRespectPeopleName = "popUpRespectPeople";
var zoneTCMAroundTheWorld = "popUpTCMAroundTheWorld";
var zoneFootballName = "popupFootballZone";

var urlWelcomeToTCM = "https://www.thecodingmachine.com/en/welcome-to-the-coding-machine/";
var urlTCMAroundTheWorld = "https://www.thecodingmachine.com/en/the-coding-machine-around-the-world/";

var currentPopup : any = undefined;
var isCoWebSiteOpened =  false;

WA.onEnterZone(zoneWelcomeToTCMName, () => {
    currentPopup =  WA.openPopup("popUpWelcome","Hey ! Welcome to The Coding Machine !",[
        {
            label: "Who are we ? ",
            className: "normal",
            callback: (popup => {
                WA.openCoWebSite(urlWelcomeToTCM);
                isCoWebSiteOpened = true;
                closePopUp2();
            })
        }]);
})

WA.onEnterZone(zoneTCMAroundTheWorld, () => {
    currentPopup =  WA.openPopup("popUpTCMAroundTheWorld","The Coding Machine around the World",[
        {
            label: "See more ",
            className: "normal",
            callback: (popup => {
                WA.openCoWebSite(urlTCMAroundTheWorld);
                isCoWebSiteOpened = true;
                closePopUp2();
            })
        }]);
})

WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespect","Thank you for respecting people at work :D",[])
})

WA.onEnterZone(zoneMeetTheDevTeamName, () => {
    currentPopup =  WA.openPopup("popUpMeetDev","Meet the WorkAdventure dev team ! ",[]);
})

WA.onEnterZone(zoneFootballName, () => {
    currentPopup = WA.openPopup("popUpFootball", "Congratulations ! You found a ball of the EURO 2021. There is two more to find in our office. If you find them, send the three codes to g.pitaud@workadventu.re. THE CODE : 7EY24", [
        {
            label: "Close",
            className: "normal",
            callback: (popup => {
                popup.close();
            })
        }]);
})

WA.onLeaveZone(zoneFootballName, closePopUp2)

WA.onLeaveZone(zoneRespectPeopleName, closePopUp2)

WA.onLeaveZone(zoneMeetTheDevTeamName, closePopUp2)

WA.onLeaveZone(zoneWelcomeToTCMName, () =>{
    closePopUp2();

    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.onLeaveZone(zoneTCMAroundTheWorld, () =>{
    closePopUp2();

    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

function closePopUp2(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
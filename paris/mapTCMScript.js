var zoneWelcomeToTCMName = "popUpWelcomeToTCM";
var zoneMeetTheDevTeamName = "popUpMeetTheDevTeam";
var zoneRespectPeopleName = "popUpRespectPeople";
console.log("SCRIPT RUNNUNG");
var urlWelcomeToTCM = "https://www.thecodingmachine.com/en/welcome-to-the-coding-machine/";
var currentPopup = undefined;

WA.onEnterZone(zoneWelcomeToTCMName, () => {
   currentPopup =  WA.openPopup("popUpWelcome","Hey ! Welcome to The Coding Machine",[
        {
            label: "Who are we ? ",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlWelcomeToTCM);
            })
        }]);
})

WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespect","Thank you for respecting people at work :D",[])
})

WA.onEnterZone(zoneMeetTheDevTeamName, () => {
    currentPopup =  WA.openPopup("popUpMeetDev","Meet the dev team ! ",[]);
})

WA.onLeaveZone(zoneRespectPeopleName, closePopUp)

WA.onLeaveZone(zoneMeetTheDevTeamName, closePopUp)

WA.onLeaveZone(zoneWelcomeToTCMName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

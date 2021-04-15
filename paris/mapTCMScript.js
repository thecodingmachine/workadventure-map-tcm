var zoneWelcomeToTCMName = "popUpWelcomeToTCM";
var zoneMeetTheDevTeamName = "popUpMeetTheDevTeam";
var zoneRespectPeopleName = "popUpRespectPeople";
console.log("SCRIPT RUNNUNG");
var urlWelcomeToTCM = "https://apprentx.rocks/a-propos/";
var currentPopup = undefined;
var isCoWebSiteOpened =  false;

WA.onEnterZone(zoneWelcomeToTCMName, () => {
   currentPopup =  WA.openPopup("popUpWelcome","Bienvenue, venez découvrir ApprentX !",[
        {
            label: "Qui nous somme ? ",
            className: "popUpElement",
            callback: (popup => {
                WA.openCoWebSite(urlWelcomeToTCM);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespect","Merci de respecter les consignes de bureau :P",[])
})

WA.onEnterZone(zoneMeetTheDevTeamName, () => {
    currentPopup =  WA.openPopup("popUpMeetDev","Amusez-vous ! ",[]);
})

WA.onLeaveZone(zoneRespectPeopleName, closePopUp)

WA.onLeaveZone(zoneMeetTheDevTeamName, closePopUp)

WA.onLeaveZone(zoneWelcomeToTCMName, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

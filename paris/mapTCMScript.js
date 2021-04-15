var zoneWelcomeToTCMName = "popUpWelcomeToTCM";
var zoneMeetTheDevTeamName = "popUpMeetTheDevTeam";
var zoneRespectPeopleName = "popUpRespectPeople";
var popUpMusicName = "popUpMusic";
console.log("SCRIPT RUNNUNG");
var urlWelcomeToTCM = "https://apprentx.rocks/a-propos/";
var currentPopup = undefined;
var isCoWebSiteOpened =  false;

WA.onEnterZone(zoneWelcomeToTCMName, () => {
   currentPopup =  WA.openPopup("popUpWelcome","Bienvenue, venez découvrir ApprentX !",[
        {
            label: "Qui Sommes nous ? ",
            className: "popUpElement",
            callback: (popup => {
                WA.openCoWebSite(urlWelcomeToTCM);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespect","Merci de respecter les consignes de bureau :P",[]);
})

WA.onEnterZone(zoneMeetTheDevTeamName, () => {
    currentPopup =  WA.openPopup("popUpMeetDev","Amusez-vous ! ",[]);
})

WA.onEnterZone(popUpMusicName, () => {
	currentPopup = WA.openPopup("popUpMusic","On prend ca relax avec de la bonne music !",[]);
})

WA.onLeaveZone(zoneRespectPeopleName, closePopUp)

WA.onLeaveZone(zoneMeetTheDevTeamName, closePopUp)

WA.onLeaveZone(popUpMusicName, closePopUp)

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

/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentZone: string;
let currentPopup: any;

const config = [
    {
        zone: 'WelcomeToTCM',
        message: 'Hey! Welcome to TheCodingMachine Virtual office!',
        cta: []
    },
    {
        zone: 'MeetWATeam',
        message: 'Meet the WorkAdventure team!',
        cta: []
    },
    {
        zone: 'RespectPeople',
        message: 'Thank you for respecting people at work :)',
        cta: []
    },
    {
        zone: 'TCMAroundTheWorld',
        message: 'Go to the world map to visit our collaborators around the world!',
        cta: []
    },
]

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    WA.room.onEnterLayer('WelcomeToTCM').subscribe(() => {
        currentZone = 'WelcomeToTCM'
        openPopup(currentZone, currentZone + 'Popup')
    });
    WA.room.onLeaveLayer('WelcomeToTCM').subscribe(closePopup);

    WA.room.onEnterLayer('MeetWATeam').subscribe(() => {
        currentZone = 'MeetWATeam'
        openPopup(currentZone, currentZone + 'Popup')
    });
    WA.room.onLeaveLayer('MeetWATeam').subscribe(closePopup);

    WA.room.onEnterLayer('RespectPeople').subscribe(() => {
        currentZone = 'RespectPeople'
        openPopup(currentZone, currentZone + 'Popup')
    });
    WA.room.onLeaveLayer('RespectPeople').subscribe(closePopup);

    WA.room.onEnterLayer('TCMAroundTheWorld').subscribe(() => {
        currentZone = 'TCMAroundTheWorld'
        openPopup(currentZone, currentZone + 'Popup')
    });
    WA.room.onLeaveLayer('TCMAroundTheWorld').subscribe(closePopup);
}).catch(e => console.error(e));

function openPopup(zoneName: string, popupName: string) {
    const zone = config.find((item) => {
        return item.zone == zoneName
    });
    if (typeof zone !== 'undefined') {
        // @ts-ignore otherwise we can't use zone.cta object
        currentPopup = WA.ui.openPopup(popupName, zone.message, zone.cta)
    }
}
function closePopup(){
    if (typeof currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

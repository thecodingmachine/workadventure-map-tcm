(()=>{"use strict";var e="popUpWelcomeToTCM",o="popUpMeetTheDevTeam",n="popUpRespectPeople",p="popUpTCMAroundTheWorld",t=void 0,a=!1;function c(){void 0!==t&&(t.close(),t=void 0)}WA.onEnterZone(e,(()=>{t=WA.openPopup("popUpWelcome","Hey ! Welcome to The Coding Machine !",[{label:"Who are we ? ",className:"normal",callback:e=>{WA.openCoWebSite("https://www.thecodingmachine.com/en/welcome-to-the-coding-machine/"),a=!0,c()}}])})),WA.onEnterZone(p,(()=>{t=WA.openPopup("popUpTCMAroundTheWorld","The Coding Machine around the World",[{label:"See more ",className:"normal",callback:e=>{WA.openCoWebSite("https://www.thecodingmachine.com/en/the-coding-machine-around-the-world/"),a=!0,c()}}])})),WA.onEnterZone(n,(()=>{t=WA.openPopup("popUpRespect","Thank you for respecting people at work :D",[])})),WA.onEnterZone(o,(()=>{t=WA.openPopup("popUpMeetDev","Meet the WorkAdventure dev team ! ",[])})),WA.onLeaveZone(n,c),WA.onLeaveZone(o,c),WA.onLeaveZone(e,(()=>{c(),a&&(WA.closeCoWebSite(),a=!1)})),WA.onLeaveZone(p,(()=>{c(),a&&(WA.closeCoWebSite(),a=!1)}))})();
//# sourceMappingURL=floor0.js.map
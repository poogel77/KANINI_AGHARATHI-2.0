var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-8941527807640478/8170717541',
        interstitial: 'ca-app-pub-8941527807640478/9647450747'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner, 
        isTesting: false,
        overlap: false, 
        offsetTopBar: false, 
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        bgColor: 'black'
    } );
    
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
}
(function(){
  console.log('ta-gtm.js init');
  console.log('dataLayer', dataLayer);
  console.log('document', document);
  var attraitBox = document.getElementById('attrait-box');

  console.log('attraitBox', attraitBox);


  if(attraitBox){

  //Partner Social
  var dtmSocialLink = attraitBox.getElementsByClassName('sociali');
  var dtmSocialLinkLength = dtmSocialLink.length;
  console.log('dtmSocialLink', dtmSocialLink);
  console.log('dtmSocialLinkLength', dtmSocialLinkLength);

  for(var i = 0; i < dtmSocialLinkLength; i++){
        var linkItem = dtmSocialLink[i];
        linkItem.addEventListener('click', function(e){
            dataLayer.push({
        'eventCategory': 'social-container',
        'eventAction': 'click-to-social',
        'eventLabel': e.target.href,
        'event': 'eventTracker'
      });
        });
        console.log('dtmSocialLink clicked');
    }

  //Partner Emaill
  var dtmEmailLink = attraitBox.getElementsByClassName('email');
  var dtmEmailLinkLength = dtmEmailLink.length;
  console.log('dtmEmailLink', dtmSocialLink);
  console.log('dtmEmailLinkLength', dtmSocialLinkLength);

  for(var i = 0; i < dtmEmailLinkLength; i++){
        var linkItem = dtmEmailLink[i];
        linkItem.addEventListener('click', function(e){
            dataLayer.push({
        'eventCategory': 'email',
        'eventAction': 'click-to-email',
        'eventLabel': e.target.href,
        'event': 'eventTracker'
      });
        });
        console.log('dtmEmailLink clicked');
    }

  //Partner Website
  var dtmWebsiteLink = attraitBox.getElementsByClassName('website');
  var dtmWebsiteLinkLength = dtmWebsiteLink.length;
  console.log('dtmWebsiteLink', dtmSocialLink);
  console.log('dtmWebsiteLinkLength', dtmSocialLinkLength);

  for(var i = 0; i < dtmWebsiteLinkLength; i++){
        var linkItem = dtmWebsiteLink[i];
        linkItem.addEventListener('click', function(e){
            dataLayer.push({
        'eventCategory': 'website',
        'eventAction': 'click-to-website',
        'eventLabel': e.target.href,
        'event': 'eventTracker'
      });
      console.log('dtmWebsiteLink clicked');
        });
    }

  //Partner Phone
  var dtmPhoneLink = attraitBox.getElementsByClassName('phone');
  var dtmPhoneLinkLength = dtmPhoneLink.length;
  console.log('dtmPhoneLink', dtmSocialLink);
  console.log('dtmPhoneLinkLength', dtmSocialLinkLength);

  for(var i = 0; i < dtmPhoneLinkLength; i++){
        var linkItem = dtmPhoneLink[i];
        linkItem.addEventListener('click', function(e){
            dataLayer.push({
        'eventCategory': 'phone',
        'eventAction': 'click-to-phone',
        'eventLabel': e.target.href,
        'event': 'eventTracker'
      });
      console.log('dtmPhoneLink clicked');
        });
    }
  }

  
  /*var wpcf7submit = document.getElementsByClassName('wpcf7-submit');

  //Guide Download
  wpcf7submit[0].addEventListener('click', function(){
    dataLayer.push({
      'eventCategory': 'form-guide',
      'eventAction': 'guide-tourist',
      'eventLabel': 'envoyer-ma-demande',
      'event': 'eventTracker'
    });
    console.log('form download clicked');
  });*/
})();
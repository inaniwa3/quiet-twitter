// ==UserScript==
// @name        Quiet Twitter
// @namespace   https://twitter.com/inaniwa3
// @description Hide some of the information on Twitter.
// @include     http://twitter.com/*
// @include     https://twitter.com/*
// @version     2.0.0
// ==/UserScript==

// References
// ツイッターのフォロー・フォロワー・ツイート数を非表示にする
// https://www.jfkooya.com/jiyoo/2012/03/hide-the-number-of-followings-and-followers-and-tweets-of-you-on-twitter.html
// Hide Twitter Guff
// https://chrome.google.com/webstore/detail/hide-twitter-guff/ebjehgoicideedhhnfjhfaidlpdhofod

var text = ""
    + ".wtf-module { display:none !important; }\n"
    + ".Trends { display:none !important; }\n"
    + ".TweetImpressionsModule { display:none !important; }\n"
    + ".LiveVideoHomePageModuleContainer { display:none !important; }\n"
    + ".ProfileNav-value { display:none !important; }\n"
    + ".ProfileCardStats-statValue { display:none !important; }\n"
    + ".ProfileTweet-actionCountForPresentation { display:none !important; }\n"
    + ".request-retweeted-popup strong { display:none !important; }\n"
    + ".request-favorited-popup strong { display:none !important; }\n"
    + ".rn-lrvibr span { display:none !important; }\n"
    + ".js-translate-tweet { display:none !important; }\n"
    + ".MomentCapsuleLikesCount { display:none !important; }\n"
    ;

var elem = document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(elem); 
elem.appendChild(document.createTextNode(text));

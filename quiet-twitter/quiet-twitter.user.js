// ==UserScript==
// @name        Quiet Twitter
// @namespace   https://twitter.com/inaniwa3
// @description Hide some of the information on Twitter.
// @include     http://twitter.com/*
// @include     https://twitter.com/*
// @version     1.1.0
// ==/UserScript==

// References
// ツイッターのフォロー・フォロワー・ツイート数を非表示にする
// http://www.jfkooya.com/jiyoo/2012/03/hide-the-number-of-followings-and-followers-and-tweets-of-you-on-twitter.html
// Hide Twitter Guff
// https://chrome.google.com/webstore/detail/hide-twitter-guff/ebjehgoicideedhhnfjhfaidlpdhofod

var newStyle = document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(newStyle); 
newStyle.appendChild(document.createTextNode(
  ".wtf-module{display:none !important;}"+                      // おすすめユーザー
  ".trends{display:none !important;}"+                          // トレンド
  ".DashboardProfileCard-statValue{display:none !important;}"+  // ツイート、フォロー、フォロワー
  ".ProfileWTFAndTrends{display:none !important;}"+             // おすすめユーザー、トレンド
  ".ProfileNav-value{display:none !important;}"+                // ツイート、フォロー、フォロワー、お気に入り、リスト
  ".ProfileCardStats-statValue{display:none !important;}"+      // ツイート、フォロー、フォロワー
  ".WhoToFollow{display:none !important;}"                      // おすすめユーザー
));

declare let my: any;
const { system, platform = "android", language, version } = my.getSystemInfoSync();

const android = platform.toLowerCase().indexOf("android") !== -1;

const uaDesc = android ? "Android; CPU " + system : "iPhone; CPU iPhone OS " + system + " like Mac OS X";
const userAgent = `Mozilla/5.0 (${uaDesc}) AliApp(AP/${version}) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 AlipayMiniGame NetType/WIFI Language/${language}`;

export const navigator = {
  platform,
  language: language,
  appVersion: `5.0 (${uaDesc}) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1`,
  userAgent: userAgent
};

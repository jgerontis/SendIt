//import { google } from 'googleapis';
var axios = require("axios");
// const { access } = require("fs");

var { google } = require("googleapis");

var ignore = require("../../ignoreMe");

const googleConfig = {
  clientId: ignore.web.client_id, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: ignore.web.client_secret, // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: "http://localhost:3000/loginsuccess", // this must match your google api settings
};
/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}

/**
 * This scope tells google what information we want to request.
 */
const defaultScope = [
  "https://www.googleapis.com/auth/plus.me",
  "https://www.googleapis.com/auth/userinfo.email",
];

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: "offline",
    prompt: "consent", // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope,
  });
}

/**
 * Create the google url to be sent to the client.
 */
function urlGoogle() {
  const auth = createConnection(); // this is from previous step
  const url = getConnectionUrl(auth);
  return url;
}
console.log(urlGoogle());

/** ----------------------------------------------------------------------------------------------------------
 * Helper function to get the library with access to the google plus api.
 */
function getGooglePlusApi(auth) {
  return google.plus({ version: "v1", auth });
}

/**
 * Extract the email and id of the google account from the "code" parameter.
 */
async function getGoogleAccountFromCode(code) {
  // get the auth "tokens" from the request
  const auth = createConnection();

  let data = await auth.getToken(code);

  //console.log("this is data number one", data);
  const tokens = data.tokens;

  // add the tokens to the google api so we have access to the account
  auth.setCredentials(tokens);

  // connect to google plus - need this to get the user's email
  const plus = getGooglePlusApi(auth);
  //console.log(plus);
  //console.log(plus.people)
  await plus.people
    .get({ userId: "me" })
    .then((me) => {
      const userGoogleId = me.data.id;
      const userGoogleEmail =
        me.data.emails && me.data.emails.length && me.data.emails[0].value;

      // return so we can login or sign up the user
      return {
        id: userGoogleId,
        email: userGoogleEmail,
        tokens: tokens, // you can save these to the user if you ever want to get their details without making them log in again
      };
    })
    .catch(() => {
      console.log("did not work getting google account from the code");
    });

  // get the google id and email
}

async function getAccessTokenFromCode(code) {
  let tid = ignore.web.client_id;
  let sec = ignore.web.client_secret;
  // let turl = ignore.web.auth_provider_x509_cert_url;
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    //url: "https://www.googleapis.com/oauth2/v1/certs",
    method: "post",
    data: {
      client_id: tid,
      client_secret: sec,
      redirect_uri: "http://localhost:3000/loginsuccess",
      grant_type: "authorization_code",
      code,
    },
  }).catch((err) => {
    console.log(err);
    console.log("did not work getting access token from code");
  });

  //console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data;
}

async function getGoogleUserInfo(tokens) {
  const { data } = await axios({
    url: "https://www.googleapis.com/auth/gmail.compose",
    method: "get",
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
  });
  //console.log(data); // { id, email, given_name, family_name }
  return data;
}

module.exports = {
  getAccessTokenFromCode,
  getGoogleUserInfo,
  getGoogleAccountFromCode,
  urlGoogle,
};
//module.exports = {getGoogleAccountFromCode, urlGoogle}

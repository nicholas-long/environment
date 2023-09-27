- 2023-07-08 this is going to take a while to implement. decided to worry about this project in the future after that move is complete. for the time being, i should enable git integration on my macbook if possible.

# reverse engineering
- it's an appimage that i can extract with `binwalk -e`
  - [[20221003150660 data analysis commands binwalk find and extract LZMA zip streams quickly]]
- there's an app.asar to extract
  - [[20221003150234 extract command for file type asar]]
  - obsidian will open asar files in its directory or any file like `obsidian-*.asar` that has a newer version
```javascript
let asarPath = path.join(APP_PATH, 'obsidian.asar');
```
- inside the obsidian.asar file, the code is obfuscated
- going to try js-beautify [js-beautify - npm](https://www.npmjs.com/package/js-beautify)
- `npm -g install js-beautify`
- found APIs and login code around line 10958
```javascript
        var on = "https://api.obsidian.md";
        Jt && (on = "http://127.0.0.1:3000");
        var an = on + "/user/info",
            sn = on + "/subscription/business",
            ln = on + "/user/signin",
            cn = on + "/user/signout",
            un = on + "/vault/list",
            hn = on + "/vault/access",
            pn = on + "/vault/create",
            dn = on + "/vault/delete",
            fn = on + "/vault/share/list",
            mn = on + "/vault/share/invite",
            gn = on + "/vault/share/remove",
            vn = on + "/publish/share/list",
            yn = on + "/publish/share/invite",
            bn = on + "/publish/share/remove",
            wn = on + "/publish/share/accept",
            kn = on + "/publish/list",
            Cn = on + "/publish/create",
            xn = on + "/publish/delete",
            Sn = on + "/publish/limit",
            En = on + "/subscription/list",
            Mn = "obsidian-account",
            Tn = function() {
                function e() {
                    this.keyValidation = "", this.company = "", this.expiry = 0, this.seats = 0;
                    try {
                        var e = JSON.parse(localStorage.getItem(Mn));
                        this.email = e.email, this.name = e.name, this.token = e.token, this.license = e.license, this.key = e.key
                    } catch (e) {}
                }
                return e.prototype.save = function() {
                    var e = {
                        email: this.email,
                        name: this.name,
                        token: this.token,
                        license: this.license,
                        key: this.key
                    };
                    localStorage.setItem(Mn, JSON.stringify(e))
                }, e.prototype.login = function(e, t, n) {
                    var i = this;
                    ajax({
                        url: ln,
                        method: "POST",
                        withCredentials: !1,
                        data: {
                            email: e,
                            password: t
                        },
                        success: function(e) {
                            var t = JSON.parse(e);
                            t.token && (i.token = t.token, i.email = t.email, i.name = t.name, i.license = t.license, i.save()), n && n(t)
                        }
                    })
                }, e.prototype.logout = function(e) {
```
- post to login should contain email and password and return token.
  - uses HTTP post form instead of JSON?
- pass token to future API calls
- tried calling the login function quickly with curl, and it's not working
  - tried ordinary form post data
  - tried json
  - [ ] could be that the password should be hashed by the client before even being sent? there was some stuff that looked like crypto algorithms?
  - [ ] could it be that the user agent or something has to be right?
- found some parts of the sync code

```javascript
            lQ = yf.plugins.sync,
            cQ = {
                1e3: "Disconnected",
                1001: "Going Away",
                1002: "Protocol Error",
                1003: "Unsupported Data",
                1004: "(For future)",
                1005: "No Status Received",
                1006: "Disconnected",
                1007: "Invalid frame payload data",
                1008: "Policy Violation",
                1009: "Message too big",
                1010: "Missing Extension",
                1011: "Internal Error",
                1012: "Service Restart",
                1013: "Try Again Later",
                1014: "Bad Gateway",
                1015: "TLS Handshake"
            },
            uQ = window.WebSocket;
        var hQ = window.process && window.process.platform,
            pQ = cA || hQ && "win32" !== hQ && "darwin" !== hQ,
            dQ = cA ? 500 : 2e3,
            fQ = ["image"],
            mQ = "";

```

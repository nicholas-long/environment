# reverse engineering obsidian to create an obsidian sync cli tool

- concept of `reverse engineering obsidian to create an obsidian sync cli tool`
- [x] copy in some notes from zk
- 2023-09-27 obisidan file version downloaded is `Obsidian-1.4.14.AppImage`

# original steps
- it's an appimage that i can extract with `binwalk -e`
- there's an app.asar to extract but it just loads and updates obsidian
- extract obsidian.asar
- inside the obsidian.asar file, the code is obfuscated
  - going to try js-beautify [js-beautify - npm](https://www.npmjs.com/package/js-beautify)
  - `npm -g install js-beautify`

- original old notes from obsidian
```
cp "/media/psf/zk/20230707045759 unofficial headless obsidian sync cli program and reverse engineering obsidian to create it.md" old-notes.md
```

# notes

## known apis from before
/user/info
/subscription/business
/user/signin
/user/signout
/vault/list
/vault/access
/vault/create
/vault/delete
/vault/share/list
/vault/share/invite
/vault/share/remove
/publish/share/list
/publish/share/invite
/publish/share/remove
/publish/share/accept
/publish/list
/publish/create
/publish/delete
/publish/limit
/subscription/list

### APIs we will need
/user/signin
/vault/list
/vault/access

## attempting login
```bash
source /home/parallels/obsidiancreds
curl -X POST -H 'Content-Type: application/json' -d "{\"email\":\"$email\",\"password\":\"$password\",\"mfa\":\"000000\"}" https://api.obsidian.md/user/signin 

```
- still not able to log in, but maybe i can use my existing tokens for a while
- there is an error message returned. maybe it's blocking it based on something from the http request headers?
- [ ] figure out why login doesn't work and return a token

### grabbing tokens from obsidian local storage
```bash
cat "$HOME/.config/obsidian/Local Storage/leveldb/000003.log"
```

## listing vaults
- i am able to list vaults using the token i copied from obsidian's local storage
- vaults contain the following fields
```bash
source /home/parallels/obsidiancreds # needs token defined in creds file
curl -X POST -H 'Content-Type: application/json' -d "{\"token\":\"$token\"}" https://api.obsidian.md/vault/list | jq
```
- returned format of vaults
```json
{
  "vaults": [
    {
      "id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "created": 1669754040444,
      "name": "testzk",
      "size": 9183232,
      "host": "sync-07.obsidian.md",
      "password": "",
      "salt": "?bbbbbbbbbbbbbbbbbb!"
    }  ],
  "shared": []
}
```

## accessing a vault
- it looks like you take the salt and encrypt something with your password to access the vault?
- uses function `makeKeyHash`
- you pass in the host and it uses the same function?
```javascript
function ln(e, t, n, i) {
    return Qt("/vault/access", {
        token: e,
        vault_uid: t,
        keyhash: n,
        host: i
    })
}
t.prototype.verifyPassword = function(e, t, n, i) {
    return v(this, void 0, void 0, (function() {
        var r;
        return y(this, (function(o) {
            switch (o.label) {
                case 0:
                    return [4, this.makeKeyHash(t, n)];
                case 1:
                    return r = o.sent(), [4, ln(this.app.account.token, e, r, i)];
                case 2:
                    return o.sent(), [2]
            }
        }))
    }))
} //, t.prototype.log = function(e, t, n) {
// verifyPassword called on line 98992
return r.trys.push([1, 5, , 6]), n = this.currentVaultInfo, [4, this.plugin.verifyPassword(n.id, e, n.salt, n.host)]; //e = this.keyInputEl.value
// key hash is generated from key e and n.salt which, i think, is the salt returned for the vault
```

## analyzing source
- `app_pretty.js` line 98702
```javascript
# function is called that looks like api call with token
  return [4, (g = this.app.account.token, Qt("/vault/list", {
      token: g
  }))];

function Qt(e, t) {
    return v(this, void 0, void 0, (function() {
        var n;
        return y(this, (function(i) {
            switch (i.label) {
                case 0:
                    return [4, $t(Yt + e, {
                        method: "POST",
                        body: JSON.stringify(t),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })];
                case 1:
                    return [4, i.sent().json()];
                case 2:
                    if ("error" in (n = i.sent())) throw new Zt(n);
                    return [2, n]
            }
        }))
    }))
}

# this function looks like it logs in and returns and sets the token
# what is mfa?
function Jt(e, t, n, i) {
    return v(this, void 0, Promise, (function() {
        var r;
        return y(this, (function(o) {
            switch (o.label) {
                case 0:
                    return [4, Qt("/user/signin", {
                        email: t,
                        password: n,
                        mfa: i
                    })];
                case 1:
                    return (r = o.sent()).token && (e.token = r.token, e.email = r.email, e.name = r.name, e.license = r.license, e.save()), [2, r]
            }
        }))
    }))
}
t.prototype.login = function() {
    return v(this, void 0, void 0, (function() {
        var e, t, n, i, r, o, a, s, l, c;
        return y(this, (function(u) {
            switch (u.label) {
                case 0:
                    if (t = (e = this).emailEl, n = e.passwordEl, i = e.mfaEl, (r = e.errorEl).hide(), o = t.value, a = n.value, s = i.value, "" === o) return this.showError(iQ.messageEmptyEmail()), [2];
                    if (-1 === o.indexOf("@")) return this.showError(iQ.messageInvalidEmail()), [2];
                    if ("" === a) return this.showError(iQ.messageEmptyPassword()), [2];
                    if ("" !== s && !/^\d{6}$/.test(s)) return this.showError(iQ.mfaWrongFormat()), [2];
                    this.loadingEl.show(), this.contentEl.hide(), u.label = 1;
                case 1:
                    return u.trys.push([1, 3, , 4]), [4, Jt(this.app.account, o, a, s)];
                case 2:
                    return u.sent(), this.close(), [3, 4];
                case 3:
                    return (l = u.sent()) instanceof Zt ? (c = l.error).contains("2FA code is incorrect") ? (r.setText(iQ.mfaVerificationFailed()), r.show()) : c.contains("2FA code") ? (this.emailSectionEl.hide(), this.passwordSectionEl.hide(), this.mfaSectionEl.show()) : (r.setText(c), r.show()) : (r.setText(iQ.messageLoginFailed()), r.show()), this.loadingEl.hide(), this.contentEl.show(), [3, 4];
                case 4:
                    return [2]
            }
        }))
    }))
} //, t
```

` zet/20230927152827/README.md `

# Related

- [20221008042814](/zet/20221008042814/README.md) WIP
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #program #command #reveng #util

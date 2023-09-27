var Be = Object.create;
var Ve = Object.defineProperty;
var Ue = Object.getOwnPropertyDescriptor;
var Fe = Object.getOwnPropertyNames;
var Ee = Object.getPrototypeOf,
    qe = Object.prototype.hasOwnProperty;
var ze = (y, h, S, W) => {
    if (h && typeof h == "object" || typeof h == "function")
        for (let v of Fe(h)) !qe.call(y, v) && v !== S && Ve(y, v, {
            get: () => h[v],
            enumerable: !(W = Ue(h, v)) || W.enumerable
        });
    return y
};
var We = (y, h, S) => (S = y != null ? Be(Ee(y)) : {}, ze(h || !y || !y.__esModule ? Ve(S, "default", {
    value: y,
    enumerable: !0
}) : S, y));
var i = require("electron"),
    f = We(require("fs")),
    g = We(require("path")),
    De = require("url"),
    x = process.platform === "darwin",
    j = process.platform === "win32",
    je = process.versions.electron,
    He = parseInt(je.split(".")[0]);

function F(y, h) {
    return y ? h() : []
}

function Te(y) {
    let h = [];
    for (let S = 0; S < y; S++) h.push((Math.random() * 16 | 0).toString(16));
    return h.join("")
}

function Ae(y) {
    return typeof y == "string" && /^[\\\/]{2,}[^\\\/]+[\\\/]+[^\\\/]+/.test(y)
}

function Pe(y, h, S) {
    let {
        editFlags: W,
        misspelledWord: v,
        dictionarySuggestions: B
    } = S, k = S.selectionText.trim(), P = k.length > 0, Y = !!S.linkURL, D = T => W[`can${T}`] && P, H = S.isEditable || P, E = [...F(x, () => [{
        label: `Look up \u201C${k.length<=40?k:k.slice(0,39).trim()+"\u2026"}\u201D`,
        visible: P && !Y,
        click() {
            h.showDefinitionForSelection()
        }
    }, {
        type: "separator"
    }]), {
        accelerator: "CmdOrCtrl+X",
        label: "Cut",
        role: D("Cut") ? "cut" : void 0,
        enabled: D("Cut"),
        visible: S.isEditable
    }, {
        accelerator: "CmdOrCtrl+C",
        label: "Copy",
        role: D("Copy") ? "copy" : void 0,
        enabled: D("Copy"),
        visible: S.isEditable || P
    }, {
        accelerator: "CmdOrCtrl+V",
        label: "Paste",
        role: W.canPaste ? "paste" : void 0,
        enabled: W.canPaste,
        visible: S.isEditable
    }, {
        accelerator: "CmdOrCtrl+Shift+V",
        label: "Paste as text",
        role: W.canPaste ? "pasteAndMatchStyle" : void 0,
        enabled: W.canPaste,
        visible: S.isEditable
    }];
    if (v && v.length >= 1) {
        let T = [];
        B && B.length > 0 ? B.slice(0, 5).forEach(J => {
            T.push({
                label: J,
                click: () => {
                    h.replaceMisspelling(J)
                }
            })
        }) : T.push({
            label: "No suggestion",
            enabled: !1
        }), T.push({
            label: "Add to Dictionary",
            click: () => {
                h.session.addWordToSpellCheckerDictionary(v), h.replaceMisspelling(v)
            }
        }), T.push({
            type: "separator"
        }), E = T.concat(E), H = !0
    }
    H && i.Menu.buildFromTemplate(E).popup({
        window: y
    })
}

function R(y, h) {
    try {
        return y()
    } catch (S) {
        return console.error(S), h
    }
}
module.exports = function(y, h, S) {
    if (He < 18) {
        i.dialog.showErrorBox("Manual update required", "This version of Obsidian is no longer supported. Please download and install the latest version from https://obsidian.md"), i.shell.openExternal("https://obsidian.md/download"), i.app.quit();
        return
    }
    if (!(process.mas || i.app.requestSingleInstanceLock())) {
        i.app.quit();
        return
    }
    let W = ["SharedArrayBuffer"];
    for (let e of process.argv) e.startsWith("--enable-features=") && (W = W.concat(e.substring(18).split(",").map(r => r.trim())));
    i.app.commandLine.appendSwitch("enable-features", W.join(","));
    let v = "",
        B = !1;
    h.on("update-manual-required", () => v = "update-manual-required"), h.on("update-downloaded", () => v = "update-downloaded"), h.on("check-start", () => B = !0), h.on("check-end", () => B = !1);
    let k = i.app.getPath("userData"),
        P = (() => {
            try {
                return i.app.getPath("documents")
            } catch (e) {}
            try {
                let e = g.join(i.app.getPath("home"), "Documents");
                if (e && f.existsSync(e)) return e
            } catch (e) {}
            return k
        })(),
        Y = (() => {
            try {
                return i.app.getPath("desktop")
            } catch (e) {}
            try {
                let e = g.join(i.app.getPath("home"), "Desktop");
                if (e && f.existsSync(e)) return e
            } catch (e) {}
            return k
        })(),
        D = e => g.join(k, e + ".json");

    function H(e, r) {
        R(() => f.writeFileSync(D(e), JSON.stringify(r)))
    }

    function E(e) {
        return R(() => JSON.parse(f.readFileSync(D(e), "utf8")) || {}, {})
    }

    function T(e) {
        R(() => f.unlinkSync(D(e)))
    }

    function J(e) {
        try {
            return f.accessSync(e, f.constants.R_OK | f.constants.W_OK), !0
        } catch (r) {
            return !1
        }
    }
    let ee = (() => {
            let e = g.join(y, "package.json");
            try {
                if (f.existsSync(e)) return JSON.parse(f.readFileSync(e, "utf8")).version
            } catch (r) {}
            return i.app.getVersion()
        })(),
        te = "file://";
    j && (te = "file:///");
    async function $(e, r) {
        let s = r.match(/^([a-z][a-z0-9+\-.]*):/i),
            l = s ? s[1].toLowerCase() : "";
        if (!l || l === ge || l === "about") return;
        if (l !== "http" && l !== "https" && l !== "obsidian" && !(d.openSchemes && d.openSchemes[l])) {
            let n = await i.dialog.showMessageBox(e, {
                message: `Are you sure you want to open this link?

Link: ` + r,
                type: "question",
                buttons: ["Open this link", "Cancel"],
                defaultId: 1,
                cancelId: 1,
                title: "Open link",
                checkboxLabel: "Always open " + l + ": links in the future"
            });
            if (n.response !== 0) return;
            l && n.checkboxChecked && (d.openSchemes = d.openSchemes || {}, d.openSchemes[l] = !0, V())
        }
        if (!r.startsWith(te)) return console.log("Opening URL: " + r), i.shell.openExternal(r);
        let u = r.lastIndexOf("#"),
            t = "";
        u !== -1 && (t = r.substr(u), r = r.substr(0, u)), r = decodeURIComponent(r.substr(te.length)), r = g.normalize(r) + t, !(Ae(r) && (await i.dialog.showMessageBox(e, {
            message: `This file is located on a remote server, and may be dangerous.
Are you sure you want to open it?

Location: ` + r,
            type: "warning",
            buttons: ["Open this file", "Cancel"],
            defaultId: 1,
            cancelId: 1,
            title: "Remote file warning"
        })).response !== 0) && (console.log("Opening file: " + r), fe(r))
    }

    function fe(e) {
        !j && !x ? i.shell.openExternal((0, De.pathToFileURL)(e).href) : i.shell.openPath(e)
    }

    function de(e) {
        if (i.remote) try {
            i.remote.enable(e)
        } catch (r) {
            console.error(r)
        }
    }

    function pe(e, r) {
        let s = e.webContents;
        he(s), de(s), s.on("will-navigate", (u, t) => {
            t.indexOf(we) !== 0 && (u.preventDefault(), t.indexOf(U) !== 0 && $(e, t))
        }), j && e.on("app-command", (u, t) => {
            t === "browser-backward" ? s.executeJavaScript("history.back()") : t === "browser-forward" && s.executeJavaScript("history.forward()")
        }), e.on("swipe", (u, t) => {
            t === "left" ? s.executeJavaScript("history.back()") : t === "right" && s.executeJavaScript("history.forward()")
        }), e.on("focus", () => {
            e.focusTime = Date.now(), X(), se(_(e), "window-always-on-top", {
                checked: e.isAlwaysOnTop(),
                enabled: !r
            })
        }), e.on("always-on-top-changed", () => {
            e === i.BrowserWindow.getFocusedWindow() && se(_(e), "window-always-on-top", {
                checked: e.isAlwaysOnTop()
            })
        }), e.on("maximize", () => {
            e.isAlwaysOnTop() && e.setAlwaysOnTop(!1)
        }), e.on("enter-full-screen", () => {
            e.isAlwaysOnTop() && e.setAlwaysOnTop(!1)
        });
        let l = () => s.executeJavaScript("window.dispatchEvent(new Event('fullscreenchange'));");
        e.on("enter-full-screen", l), e.on("leave-full-screen", l)
    }

    function he(e) {
        e.isSecured || (e.isSecured = !0, e.setWindowOpenHandler(r => {
            if (r.url === "about:blank" && r.features && r.features.startsWith("popup")) {
                let s = r.features.split(","),
                    l = {};
                for (let u of s) {
                    let [t, n] = u.split("=");
                    (t === "x" || t === "y" || t === "width" || t === "height") && (l[t] = parseInt(n))
                }
                return {
                    action: "allow",
                    overrideBrowserWindowOptions: {
                        trafficLightPosition: {
                            x: 19,
                            y: 12
                        },
                        autoHideMenuBar: !0,
                        frame: G,
                        titleBarStyle: oe,
                        ...me(l),
                        webPreferences: {
                            contextIsolation: !1,
                            nodeIntegration: !0,
                            nodeIntegrationInWorker: !0,
                            spellcheck: !0,
                            webviewTag: !0,
                            affinity: "main-window",
                            backgroundThrottling: !1
                        }
                    }
                }
            }
            try {
                $(i.BrowserWindow.fromWebContents(e), r.url)
            } catch (s) {
                console.error(s)
            }
            return {
                action: "deny"
            }
        }), e.on("will-attach-webview", (r, s) => {
            delete s.preload, delete s.preloadURL, s.sandbox = !0, s.nodeIntegration = !1, s.nodeIntegrationInWorker = !1, s.nodeIntegrationInSubFrames = !1, s.webSecurity = !0, s.plugins = !1, s.experimentalFeatures = !1, s.webviewTag = !1
        }), e.on("did-attach-webview", (r, s) => {
            s.setWindowOpenHandler(l => {
                let {
                    url: u
                } = l;
                if (/^https?:\/\//.test(u)) try {
                    $(i.BrowserWindow.fromWebContents(s), u)
                } catch (t) {
                    console.error(t)
                }
                return {
                    action: "deny"
                }
            }), s.on("will-navigate", (l, u) => {
                /^https?:\/\//.test(u) || l.preventDefault()
            }), s.on("will-frame-navigate", l => {
                /^https?:\/\//.test(l.url) || l.preventDefault()
            }), s.on("will-attach-webview", l => {
                l.preventDefault()
            })
        }))
    }

    function me(e) {
        let r = {
            width: 800,
            height: 600
        };
        R(() => {
            let l = i.screen.getPrimaryDisplay().workArea;
            r.width = Math.min(1024, l.width), r.height = Math.min(800, l.height - 1)
        });
        let s = !1;
        if (e.x !== void 0 && e.y !== void 0 && e.width !== void 0 && e.height !== void 0) try {
            for (let l of i.screen.getAllDisplays()) {
                let u = l.workArea;
                if (e.x < u.x + u.width - 2 && e.x + e.width > u.x + 2 && e.y < u.y + u.height - 2 && e.y + e.height > u.y + 2) {
                    s = !0;
                    break
                }
            }
        } catch (l) {
            console.error(l)
        } else e.x === void 0 && e.y === void 0 && e.width !== void 0 && e.height !== void 0 && (s = !0);
        return s && (r.x = e.x, r.y = e.y, r.width = e.width, r.height = e.height), r.width < 300 && (r.width = 300), r.height < 200 && (r.height = 200), r
    }
    let Le = g.join(P, "Obsidian Vault"),
        be = g.join(k, "Obsidian Sandbox"),
        Re = g.join(k, "Obsidian Help"),
        ge = "app",
        ye = ge + "://",
        U = ye + "obsidian.md/",
        ne = ye + Te(36) + "/",
        we = U + "index.html",
        d = E("obsidian");
    (!d || typeof d != "object") && (d = {});
    let w = d.vaults || {};
    for (let e in w) {
        let r = w[e];
        r.path = g.resolve(r.path), (!r.path || r.path === Re || !f.existsSync(r.path)) && (delete w[e], T(e))
    }
    d.vaults = w, d.insider && h.emit("insider", !0);
    let G = d.frame === "native",
        oe = G ? "default" : "hidden";
    if (d.updateDisabled && (h.emit("disable", !0), console.log("Updates disabled.")), d.disableGpu && !i.app.isReady()) try {
        i.app.disableHardwareAcceleration(), console.log("GPU Acceleration disabled.")
    } catch (e) {
        console.error(e)
    }
    let A;
    d.icon && f.existsSync(g.join(k, d.icon)) && (A = g.join(k, d.icon)), !A && S && (A = g.join(y, "icon-dev.png"));

    function V() {
        H("obsidian", d)
    }

    function Oe(e, r) {
        let s = w[e];
        s && (r ? s.open = !0 : delete s.open, V())
    }
    let I = {},
        ie = new WeakMap,
        re = !1,
        K = null,
        Z = Se([], !0);

    function _(e) {
        if (!e) return Z;
        for (; !e.appMenu && ie.has(e);) e = ie.get(e);
        return e.appMenu || Z
    }

    function X() {
        let e = i.BrowserWindow.getFocusedWindow();
        if (!e || !x) return;
        let r = _(e);
        i.Menu.setApplicationMenu(r)
    }

    function Se(e, r = !1) {
        let s = [];
        for (let n = e.length - 1; n >= 0; n--) {
            let o = e[n];
            (o.label === "&Window" || o.label === "&Help") && (s.push(o), e.splice(n, 1))
        }

        function l(n) {
            n.forEach(o => {
                if (o.appCommand) {
                    let a = o.appCommand;
                    o.id = a, o.click = (c, m, O) => {
                        (!O.triggeredByAccelerator || !O.shiftKey && !O.ctrlKey && !O.metaKey && !O.altKey) && m.webContents.executeJavaScript(`app.commands.executeCommandById(${JSON.stringify(a)})`)
                    }, delete o.appCommand
                }
                "submenu" in o && l(o.submenu)
            })
        }

        function u(n) {
            let o = [];
            for (let a of n) {
                let c = o.find(m => m.id && m.id === a.id || m.label === a.label);
                if (c)
                    for (let m of a.submenu) {
                        let O = m.before && c.submenu.findIndex(p => p.id === m.before[0]);
                        O != null ? c.submenu.splice(O, 0, m) : c.submenu.push(m)
                    } else o.push(a)
            }
            return o
        }
        let t = u([...F(x, () => [{
            label: "Obsidian",
            submenu: [{
                label: "About Obsidian",
                async click(n, o) {
                    let a = `Version ${ee} (Installer ${i.app.getVersion()})`;
                    (await i.dialog.showMessageBox(o, {
                        message: "Obsidian",
                        icon: g.join(y, "icon.png"),
                        detail: `${a}

Copyright \xA9 2023 Dynalist Inc.`,
                        type: "info",
                        buttons: ["OK", "Copy"],
                        defaultId: 0,
                        cancelId: 0
                    })).response === 1 && i.clipboard.writeText(`About Obsidian
${a}`)
                }
            }, {
                type: "separator"
            }, {
                id: "preferences-section",
                visible: !1,
                label: ""
            }, {
                type: "separator"
            }, {
                role: "services"
            }, {
                type: "separator"
            }, {
                label: "Hide Obsidian",
                click: () => i.app.hide(),
                accelerator: "Cmd+H"
            }, {
                role: "hideOthers"
            }, {
                role: "unhide"
            }, {
                type: "separator"
            }, {
                label: "Quit Obsidian",
                click: () => i.app.quit(),
                accelerator: "Cmd+Q"
            }]
        }]), {
            label: "&File",
            submenu: [{
                id: "open-section",
                type: "separator"
            }, {
                id: "open-vault",
                click: Q,
                label: "Open Vault..."
            }, ...F(x || j, () => [{
                role: "recentDocuments",
                submenu: [{
                    label: "Clear Recent",
                    role: "clearRecentDocuments"
                }]
            }]), {
                type: "separator"
            }, ...F(r, () => [{
                id: "close-window",
                role: "close"
            }]), ...F(!x, () => [{
                type: "separator"
            }, {
                id: "quit",
                role: "quit"
            }])]
        }, {
            label: "&Edit",
            submenu: [{
                type: "separator",
                id: "undo-section"
            }, {
                role: "undo"
            }, {
                role: "redo"
            }, {
                type: "separator",
                id: "copy-section"
            }, {
                role: "cut"
            }, {
                role: "copy"
            }, {
                role: "paste"
            }, {
                role: "pasteAndMatchStyle",
                accelerator: x ? "Cmd+Shift+V" : "Shift+CommandOrControl+V"
            }, {
                label: "Paste and Match Style",
                accelerator: x ? "Cmd+Option+Shift+V" : "Shift+CommandOrControl+Alt+V",
                click: (n, o) => o.webContents.pasteAndMatchStyle(),
                visible: !1
            }, {
                role: "delete"
            }, {
                role: "selectAll"
            }, ...F(x, () => [{
                type: "separator",
                id: "speech-section"
            }, {
                label: "Speech",
                submenu: [{
                    role: "startSpeaking"
                }, {
                    role: "stopSpeaking"
                }]
            }])]
        }, ...e, {
            label: "&View",
            submenu: [...F(S, () => [{
                role: "reload"
            }]), {
                id: "actual-size",
                label: "Actual Size",
                accelerator: "CommandOrControl+0",
                click(n, o) {
                    o && (o.webContents.zoomLevel = 0)
                }
            }, {
                label: "Zoom In",
                accelerator: "CommandOrControl+=",
                click(n, o) {
                    o && o.webContents.executeJavaScript(`
									(() => {
										let wf = require('electron').webFrame;
										let zoom = wf.getZoomLevel();
										if (zoom < 3) {
											wf.setZoomLevel(zoom + 0.5);
										}
									})()
								`)
                }
            }, {
                label: "Zoom Out",
                accelerator: "CommandOrControl+-",
                click(n, o) {
                    o && o.webContents.executeJavaScript(`
									(() => {
										let wf = require('electron').webFrame;
										let zoom = wf.getZoomLevel();
										if (zoom > -2.5) {
											wf.setZoomLevel(zoom - 0.5);
										}
									})()
								`)
                }
            }, {
                id: "developer-section",
                type: "separator"
            }, {
                role: "forceReload",
                accelerator: ""
            }, {
                role: "toggleDevTools"
            }, {
                type: "separator"
            }, {
                role: "togglefullscreen"
            }]
        }, {
            label: "&Window",
            role: "window",
            submenu: [{
                role: "minimize",
                accelerator: x ? "CommandOrControl+M" : ""
            }, {
                role: "front"
            }, {
                type: "separator"
            }, {
                id: "window-always-on-top",
                checked: !1,
                enabled: !1,
                type: "checkbox",
                label: "Always on Top",
                click(n, o) {
                    if (o) {
                        let a = o.isAlwaysOnTop();
                        o.setAlwaysOnTop(!a)
                    }
                }
            }]
        }, {
            label: "&Help",
            role: "help",
            submenu: [{
                label: "Open Help",
                click: () => ve()
            }, {
                type: "separator",
                id: "help-links"
            }, {
                label: "Homepage",
                click: () => i.shell.openExternal("https://obsidian.md")
            }, {
                label: "Community",
                click: () => i.shell.openExternal("https://obsidian.md/community")
            }, {
                label: "Help Center",
                click: () => i.shell.openExternal("https://help.obsidian.md/")
            }, {
                type: "separator"
            }]
        }, ...s]);
        return l(t), i.Menu.buildFromTemplate(t)
    }

    function Ce() {
        let e = null,
            r = null;
        for (let s in I) {
            let l = I[s];
            l.isDestroyed() || (!e || l.focusTime > e.focusTime) && (e = l, r = s)
        }
        return r
    }

    function N(e) {
        if (I[e]) {
            let p = I[e];
            return p.isMinimized() && p.restore(), p.focus(), p
        }
        let r = E(e),
            s = {
                width: 800,
                height: 600,
                minWidth: 200,
                minHeight: 150,
                backgroundColor: "#00000000",
                trafficLightPosition: {
                    x: 19,
                    y: 12
                },
                show: !1,
                frame: G,
                titleBarStyle: oe,
                webPreferences: {
                    contextIsolation: !1,
                    nodeIntegration: !0,
                    nodeIntegrationInWorker: !0,
                    spellcheck: !0,
                    webviewTag: !0
                },
                ...me(r)
            },
            l = new i.BrowserWindow(s);
        I[e] = l;
        let u = l.webContents,
            t = !1,
            n = () => {
                if (t) return;
                t = !0, r.isMaximized && l.maximize(), r.devTools && u.openDevTools(), l.show();
                let p = r.zoom;
                p && typeof p == "number" && u.executeJavaScript(`require('electron').webFrame.setZoomLevel(${r.zoom})`)
            };
        l.menuBarVisible = !1, A && !x && R(() => l.setIcon(A));

        function o() {
            return !l.isMaximized() && !l.isMinimized() && !l.isFullScreen()
        }

        function a() {
            try {
                let p = l.getBounds();
                o() && (r.x = p.x, r.y = p.y, r.width = p.width, r.height = p.height), r.isMaximized = l.isMaximized(), r.devTools = u.isDevToolsOpened(), r.zoom = u.zoomLevel
            } catch (p) {}
        }
        u.on("did-finish-load", () => {
            l.loaded = !0
        }), pe(l, !0);
        let c = p => {
            p.on("context-menu", (M, b) => {
                if (K && K === u.id) {
                    K = null;
                    try {
                        let {
                            editFlags: C,
                            misspelledWord: L,
                            dictionarySuggestions: ce
                        } = b;
                        u.send("context-menu", {
                            editFlags: C,
                            misspelledWord: L,
                            dictionarySuggestions: ce,
                            webContentsId: p.id
                        });
                        return
                    } catch (C) {
                        console.error(C)
                    }
                }
                Pe(l, p, b)
            })
        };
        c(u), l.on("close", p => {
            a(), H(e, r), setTimeout(() => {
                !p.defaultPrevented && !l.isDestroyed() && l.destroy()
            }, 3e3)
        }), l.on("closed", () => {
            delete I[e], !re && i.BrowserWindow.getAllWindows().length > 0 && Oe(e, !1)
        });
        let m;

        function O() {
            clearTimeout(m), m = setTimeout(a, 100)
        }
        return l.on("resize", O), l.on("move", O), l.on("ready-to-show", n), u.on("did-create-window", p => {
            let M = p.webContents;
            ie.set(p, l), A && !x && R(() => p.setIcon(A)), pe(p, !1), c(M)
        }), l.loadURL(we).then(n, n), Oe(e, !0), l
    }

    function xe(e) {
        let r = new i.BrowserWindow({
            width: 800,
            height: 600,
            resizable: !1,
            maximizable: !1,
            fullscreenable: !1,
            show: !1,
            frame: G,
            titleBarStyle: oe,
            webPreferences: {
                contextIsolation: !1,
                nodeIntegration: !0
            },
            ...e
        });
        return A && !x && R(() => r.setIcon(A)), de(r.webContents), r.menuBarVisible = !1, r.on("focus", () => {
            X()
        }), r
    }
    let q;

    function Q() {
        if (q) {
            q.isMinimized() && q.restore(), q.focus();
            return
        }
        let e = q = xe({
            width: 800,
            height: 650
        });
        e.on("closed", () => {
            q = null
        });
        let r = () => e.show();
        e.loadURL(U + "starter.html").then(r, r)
    }
    let z;

    function ve() {
        if (z) {
            z.isMinimized() && z.restore(), z.focus();
            return
        }
        let e = z = xe({
            width: 600,
            height: 600
        });
        e.on("closed", () => {
            z = null
        });
        let r = () => e.show();
        e.loadURL(U + "help.html").then(r, r)
    }
    let le = null;
    i.app.on("will-finish-launching", () => {
        i.app.once("open-url", (e, r) => {
            e.preventDefault(), le = r
        })
    });
    let ae = () => {
        for (let e in w) w[e].open && N(e);
        Object.keys(I).length === 0 && Q()
    };

    function se(e, r, s) {
        let l = e.getMenuItemById(r);
        if (l)
            for (let u in s) l[u] = s[u]
    }
    i.app.whenReady().then(() => {
        i.app.on("second-instance", (t, n) => {
            Me(n) || Q()
        }), i.protocol.registerFileProtocol("app", (t, n) => {
            let o = t.url,
                a = !1;
            o.indexOf("?") > 0 && (o = o.substr(0, o.indexOf("?"))), o.indexOf("#") > 0 && (o = o.substr(0, o.indexOf("#"))), o.indexOf(U) === 0 ? (o = decodeURIComponent(o.substr(U.length)), o = g.resolve(g.join(y, o)), o.indexOf(g.resolve(y)) !== 0 && (o = ""), a = !0) : o.indexOf(ne) === 0 ? (o = decodeURIComponent(o.substr(ne.length)), j || (o = "/" + o), o = g.resolve(o), Ae(o) && (a = !0)) : o = "";
            let c = {};
            a && (c["X-Frame-Options"] = "DENY"), n({
                path: o,
                headers: c
            })
        }), i.ipcMain.on("is-dev", t => {
            t.returnValue = S
        }), i.ipcMain.on("desktop-dir", t => {
            t.returnValue = Y
        }), i.ipcMain.on("documents-dir", t => {
            t.returnValue = P
        }), i.ipcMain.on("resources", t => {
            t.returnValue = y
        }), i.ipcMain.on("version", t => {
            t.returnValue = ee
        }), i.ipcMain.on("file-url", t => {
            t.returnValue = ne
        }), i.ipcMain.on("relaunch", t => {
            t.returnValue = "", console.log("Relaunching!"), re = !0, i.app.relaunch(), i.app.quit()
        }), i.ipcMain.on("update", t => {
            t.returnValue = v
        }), i.ipcMain.on("check-update", (t, n) => {
            n && (d.updateDisabled && h.emit("disable", !1), h.emit("check"), d.updateDisabled && setTimeout(() => h.emit("disable", !0), 50)), t.returnValue = B
        }), i.ipcMain.on("disable-update", (t, n) => {
            n === !0 ? (d.updateDisabled = !0, h.emit("disable", !0), V(), console.log("Updates disabled.")) : n === !1 && (delete d.updateDisabled, h.emit("disable", !1), V(), console.log("Updates enabled.")), t.returnValue = d.updateDisabled
        }), i.ipcMain.on("disable-gpu", (t, n) => {
            n === !0 ? (d.disableGpu = !0, V()) : n === !1 && (delete d.disableGpu, V()), t.returnValue = d.disableGpu
        }), i.ipcMain.on("insider-build", (t, n) => {
            n === !0 ? (d.insider = !0, h.emit("insider", !0), V()) : n === !1 && (delete d.insider, h.emit("insider", !1), V()), t.returnValue = d.insider
        }), i.ipcMain.on("frame", (t, n) => {
            typeof n == "string" && (d.frame = n, n || delete d.frame, V()), t.returnValue = d.frame
        }), i.ipcMain.on("print-to-pdf", async (t, n) => {
            console.log("Saving PDF...");
            let o = t.sender;
            try {
                let {
                    filepath: a
                } = n, c = await o.printToPDF(n);
                await f.promises.writeFile(a, c), n.open && fe(a)
            } finally {
                console.log("Done."), o.send("print-to-pdf", {})
            }
        }), i.ipcMain.on("vault", t => {
            for (let n in I)
                if (I[n].webContents === t.sender) {
                    t.returnValue = {
                        id: n,
                        path: g.resolve(w[n].path)
                    };
                    return
                } t.returnValue = {}
        }), i.ipcMain.on("vault-list", t => {
            t.returnValue = w
        }), i.ipcMain.on("vault-remove", (t, n) => {
            if (n && typeof n == "string") {
                for (let o in w)
                    if (w[o].path === n) {
                        if (I[o]) {
                            t.returnValue = !1;
                            return
                        }
                        t.returnValue = !0, delete w[o], V(), T(o);
                        return
                    }
            }
            t.returnValue = !1
        }), i.ipcMain.on("vault-move", (t, n, o) => {
            if (n && typeof n == "string")
                for (let a in w) {
                    let c = w[a];
                    if (c.path === n) {
                        if (I[a]) {
                            t.returnValue = "EVAULTOPEN";
                            return
                        }
                        try {
                            f.renameSync(n, o)
                        } catch (m) {
                            t.returnValue = m.toString();
                            return
                        }
                        t.returnValue = "", c.path = o, V();
                        return
                    }
                }
            t.returnValue = !1
        }), i.ipcMain.on("vault-open", (t, n, o) => {
            if (o) {
                if (f.existsSync(n)) {
                    t.returnValue = "Vault already exists";
                    return
                }
                try {
                    f.mkdirSync(n, {
                        recursive: !0
                    })
                } catch (a) {
                    t.returnValue = a.toString();
                    return
                }
            }
            t.returnValue = s(n)
        }), i.ipcMain.on("vault-message", (t, n, o) => {
            n = g.resolve(n);
            for (let a in w)
                if (w[a].path === n) {
                    Ie(a, o);
                    break
                } t.returnValue = ""
        }), i.ipcMain.on("starter", t => {
            t.returnValue = null, Q()
        }), i.ipcMain.on("help", t => {
            t.returnValue = null, ve()
        }), i.ipcMain.on("sandbox", t => {
            t.returnValue = null, l()
        }), i.ipcMain.on("context-menu", t => {
            K = t.sender.id
        }), i.ipcMain.on("request-url", async (t, n, o) => {
            let {
                url: a,
                method: c,
                contentType: m,
                body: O,
                headers: p
            } = o, M = i.net.request({
                url: a,
                method: c,
                redirect: "follow"
            });
            if (m && M.setHeader("Content-Type", m), p)
                for (let b in p) try {
                    M.setHeader(b, p[b])
                } catch (C) {
                    console.error(C)
                }
            M.on("login", (b, C) => C()), M.on("error", b => {
                t.reply(n, {
                    error: b
                })
            }), M.on("response", b => {
                let C = [];
                b.on("data", L => C.push(L)), b.on("end", () => {
                    let L = Buffer.concat(C),
                        ce = L.buffer.slice(L.byteOffset, L.byteOffset + L.byteLength);
                    t.reply(n, {
                        status: b.statusCode,
                        headers: b.headers,
                        body: ce
                    })
                })
            });
            try {
                typeof O == "string" ? M.write(O) : O instanceof ArrayBuffer && M.write(Buffer.from(new Uint8Array(O))), M.end()
            } catch (b) {
                t.reply(n, {
                    error: b
                })
            }
        }), i.ipcMain.on("open-url", (t, n) => {
            let o = i.BrowserWindow.fromWebContents(t.sender);
            o && typeof n == "string" && $(o, n)
        }), i.ipcMain.on("trash", async (t, n) => {
            try {
                await i.shell.trashItem(n), t.returnValue = !0
            } catch (o) {
                console.log(o), t.returnValue = !1
            }
        }), i.ipcMain.on("get-documents-path", t => {
            t.returnValue = P
        }), i.ipcMain.on("get-sandbox-vault-path", t => {
            t.returnValue = be
        }), i.ipcMain.on("get-default-vault-path", t => {
            t.returnValue = Le
        }), i.ipcMain.on("set-menu", (t, {
            template: n
        }) => {
            let o = i.BrowserWindow.fromWebContents(t.sender);
            if (!o) return;
            let a = Se(n);
            o.appMenu = a, x ? X() : o.setMenu(a)
        }), i.ipcMain.on("update-menu-items", (t, n, o) => {
            let a = i.BrowserWindow.fromWebContents(t.sender),
                c = _(a);
            if (c !== Z) {
                for (let {
                        itemId: m,
                        eState: O
                    }
                    of n) se(c, m, O);
                o && X()
            }
        }), i.ipcMain.on("render-menu", t => {
            let n = i.BrowserWindow.fromWebContents(t.sender);
            _(n).popup({
                window: n
            })
        }), i.ipcMain.on("set-icon", (t, n, o) => {
            d.icon && f.rmSync(g.join(k, d.icon), {
                force: !0
            }), n && o ? f.writeFileSync(g.join(k, n), o) : n = null, (d.icon || "") !== (n || "") && (n ? d.icon = n : delete d.icon, V()), t.returnValue = null
        }), i.ipcMain.on("get-icon", t => {
            t.returnValue = d.icon
        });
        let e = i.session.defaultSession.webRequest;
        e.onBeforeSendHeaders({
            urls: ["https://*/*", "http://*/*"]
        }, (t, n) => {
            let {
                requestHeaders: o
            } = t;
            for (let a in o)(a.toLowerCase() === "sec-fetch-dest" || a.toLowerCase() === "sec-ch-ua") && delete o[a];
            n({
                requestHeaders: o
            })
        }), e.onHeadersReceived({
            urls: ["https://*/*", "http://*/*"]
        }, (t, n) => {
            let {
                responseHeaders: o,
                url: a,
                resourceType: c,
                frame: m,
                webContents: O
            } = t, p = c === "subFrame";
            try {
                if (!p) {
                    let b = O.mainFrame;
                    p = b.framesInSubtree.filter(C => C !== b).some(C => C.routingId === m.routingId && C.processId === m.processId)
                }
            } catch (b) {}
            let M = !1;
            for (let b in o) b.toLowerCase() === "access-control-allow-origin" && (M = !0), b.toLowerCase() === "x-frame-options" && delete o[b], b.toLowerCase() === "cross-origin-opener-policy" && delete o[b], b.toLowerCase() === "content-security-policy" && (o[b] = o[b].map(C => C.replace(/\s*frame-ancestors [^;]*(;|$)/g, ""))), b.toLowerCase() === "set-cookie" && p && (o[b] = o[b].map(C => /Secure;/i.test(C) ? C.replace(/SameSite=Lax/i, "SameSite=None") : C));
            !M && /^https?:\/\/[^\/]*(github)/.test(a) && (o["Access-Control-Allow-Origin"] = ["*"]), n({
                responseHeaders: o
            })
        });
        let r = () => !1;
        e.onBeforeRequest = r, e.onBeforeSendHeaders = r, e.onHeadersReceived = r;
        for (let t of [i.protocol, i.session.defaultSession.protocol]) t.interceptBufferProtocol = r, t.interceptStreamProtocol = r, t.interceptStringProtocol = r, t.interceptFileProtocol = r, t.interceptHttpProtocol = r, t.handle = r;
        i.session.defaultSession.setPermissionRequestHandler((t, n, o, a) => {
            let c = t.getURL().startsWith(U);
            a.isMainFrame && a.requestingUrl === "about:blank" && n.startsWith("clipboard-") && (c = !0), n === "openExternal" ? c = !1 : n === "fullscreen" && (c = !0), c || console.log("Blocked permission request", t.getURL(), n, a), o(c)
        });

        function s(t) {
            if (t && typeof t == "string") {
                if (t = g.resolve(t), !f.existsSync(t)) return "folder not found";
                if (!J(t)) return "no permission to access folder";
                for (let o in w) {
                    let a = w[o];
                    if (a.path === t) return a.ts = Date.now(), N(o), i.app.addRecentDocument(t), !0
                }
                let n = Te(16);
                return w[n] = {
                    path: t,
                    ts: Date.now()
                }, N(n), i.app.addRecentDocument(t), !0
            }
            return "folder not found"
        }

        function l() {
            let t = g.join(y, "sandbox"),
                n = be;
            for (let o in I) {
                let a = w[o];
                if (a.path === n) {
                    a.ts = Date.now(), N(o);
                    return
                }
            }
            try {
                f.rmSync ? f.rmSync(n, {
                    recursive: !0
                }) : f.rmdirSync(n, {
                    recursive: !0
                })
            } catch (o) {
                o.code !== "ENOENT" && console.error(o)
            }
            u(t, n), s(n)
        }

        function u(t, n) {
            f.mkdirSync(n, {
                recursive: !0
            });
            let o = f.readdirSync(t);
            for (let a of o) {
                let c = g.join(t, a),
                    m = f.statSync(c),
                    O = n + "/" + a;
                m.isFile() && f.writeFileSync(O, f.readFileSync(c)), m.isDirectory() && u(c, O)
            }
        }
        if (i.app.setAboutPanelOptions({
                applicationName: "Obsidian",
                applicationVersion: ee + " (installer " + i.app.getVersion() + ")",
                version: "",
                copyright: "Copyright \xA9 Dynalist Inc.",
                website: "https://obsidian.md"
            }), x && R(() => i.app.dock.setIcon(A)), i.Menu.setApplicationMenu(Z), i.app.on("web-contents-created", (t, n) => {
                he(n), n.hostWebContents && n.on("context-menu", (o, a) => {
                    Pe(i.BrowserWindow.fromWebContents(n), n, a)
                })
            }), i.app.on("open-file", function(t, n) {
                t.preventDefault();
                let o = g.resolve(n),
                    a = "";
                for (let c in w) {
                    let m = w[c].path;
                    o.startsWith(m) && a.length < m.length && (a = m)
                }
                a && s(a)
            }), i.app.on("window-all-closed", () => {
                x || i.app.quit()
            }), i.app.on("before-quit", () => {
                re = !0
            }), i.app.on("activate", () => {
                i.BrowserWindow.getAllWindows().length === 0 && ae()
            }), Me(process.argv), le && ue(le), i.app.on("open-url", function(t, n) {
                t.preventDefault(), ue(n)
            }), Object.keys(I).length === 0) ae();
        else {
            for (let t in w) I[t] || delete w[t].open;
            V()
        }
    }), !S && !i.app.isDefaultProtocolClient("obsidian") && i.app.setAsDefaultProtocolClient("obsidian");
    let ke = "obsidian://";

    function ue(e) {
        if (!e.startsWith(ke)) return;
        let r = e;
        console.log("Received callback URL", e), e = e.substr(ke.length);
        let s = {};
        if (e.startsWith("/")) {
            let n = e;
            j && (n = e.substr(1)), s.action = "open", s.path = decodeURI(n)
        } else if (e.startsWith("vault/")) {
            e = e.substr(6);
            let n = e.split("/").map(o => decodeURIComponent(o));
            s.action = "open", s.vault = n[0], s.file = n.slice(1).join("/")
        } else {
            let n = "",
                o = "",
                a = e.indexOf("?"),
                c = e.indexOf("#", Math.max(0, a));
            c >= 0 && (o = e.substr(c + 1), e = e.substr(0, c), s.hash = o), a >= 0 && (n = e.substr(a + 1), e = e.substr(0, a));
            for (let m of n.split("&")) {
                let O = m.split("="),
                    p = !0;
                O.length > 1 && (p = decodeURIComponent(O[1])), s[decodeURIComponent(O[0])] = p
            }
            s.action = e.replace(/\/+$/g, "")
        }
        let l = null,
            u = s.path,
            t = s.vault;
        if (u && typeof u == "string") {
            let n = g.resolve(u),
                o = "";
            for (let a in w) {
                let c = w[a].path;
                n.startsWith(c) && o.length < c.length && (o = c, l = a)
            }
            l && (s.file = n.substr(o.length))
        } else if (t && typeof t == "string")
            for (let n in w) {
                let o = w[n].path;
                if (n === t || g.basename(o).toUpperCase() === t.toUpperCase()) {
                    l = n;
                    break
                }
            } else l = Ce(), l || ae(), l = Ce();
        l ? Ie(l, s) : i.dialog.showErrorBox("Vault not found", "Unable to find a vault for the URL " + r)
    }

    function Ie(e, r) {
        let s = N(e),
            l = JSON.stringify(r),
            u = `var w=window;if(typeof w.OBS_ACT === "function"){w.OBS_ACT(${l})}else{w.OBS_ACT=${l}}`,
            t = s.webContents;
        s.loaded ? t.executeJavaScript(u) : t.once("did-finish-load", () => t.executeJavaScript(u))
    }

    function Me(e) {
        for (let r of e)
            if (r.startsWith("obsidian://")) return ue(r), !0;
        return !1
    }
};
// Main script - Control Panel

// Modulo 1: Persistencia
class PreferencesManager {
  constructor() {
    this.nicknameKey = "userNickname";
    this.backgroundKey = "userBackgroundColor";
  }

  init() {
    this.loadPreferences(); // cargar valores persistencia

    document
      .getElementById("applyBtn") // button
      .addEventListener("click", () => this.applyPreferences());

    document
      .getElementById("backgroundColor")
      .addEventListener("input", (e) => {
        document.body.style.backgroundColor = e.target.value;
      });

    document
      .getElementById("nickname") // validar en desenfoque
      .addEventListener("blur", (e) => this.validateNickname(e.target.value));
  }

  loadPreferences() {
    const savedNick = localStorage.getItem(this.nicknameKey);
    if (savedNick) document.getElementById("nickname").value = savedNick;

    const savedColor = localStorage.getItem(this.backgroundKey);
    if (savedColor) {
      document.getElementById("backgroundColor").value = savedColor;
      document.body.style.backgroundColor = savedColor;
    }
  }

  applyPreferences() {
    const nickname = document.getElementById("nickname").value.trim();
    const color = document.getElementById("backgroundColor").value;

    if (!this.validateNickname(nickname)) return;

    // valores de persistencia
    localStorage.setItem(this.nicknameKey, nickname);
    localStorage.setItem(this.backgroundKey, color);

    // aplicar color bg
    document.body.style.backgroundColor = color;

    this.showMessage("Preferencias guardadas", "success");

    // Demo: cadena manipulacion
    StringManipulator.manipulateNickname(nickname);
  }

  validateNickname(nick) {
    if (!nick) return false;
    // inicio con uppercase; cuando solo minusc o digitos; min length 5
    const re = /^[A-Z][a-z0-9]{4,}$/;
    if (!re.test(nick)) {
      this.showMessage(
        "Nickname inválido. Reglas: inicia con mayúscula, resto minúsculas o números, mínimo 5 caracteres.",
        "error"
      );
      return false;
    }
    return true;
  }

  showMessage(text, type) {
    const old = document.getElementById("statusMessage");
    if (old) old.remove();
    const div = document.createElement("div");
    div.id = "statusMessage";
    div.className = `message ${type}`;
    div.textContent = text;
    document.getElementById("preferencesForm").after(div);
    setTimeout(() => div.remove(), 2500);
  }
}

// Cookies: ultima visita
class CookieManager {
  constructor() {
    this.key = "ultimaVisita";
  }
  init() {
    this.displayLastVisit();
    this.updateLastVisit();
  }
  setCookie(name, value, days = 30) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
  }
  getCookie(name) {
    const pref = name + "=";
    return (
      document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith(pref))
        ?.substring(pref.length) ?? null
    );
  }
  updateLastVisit() {
    const now = new Date();
    const val = `${now.toLocaleDateString("es-ES")}, ${now.toLocaleTimeString(
      "es-ES"
    )}`;
    this.setCookie(this.key, val);
  }
  displayLastVisit() {
    const v = this.getCookie(this.key);
    document.getElementById("lastVisit").textContent = v
      ? `Tu última visita fue: ${v}`
      : "Esta es tu primera visita";
  }
}

// contador de almacenamiento de sesiones
class SessionManager {
  constructor() {
    this.key = "sessionCount";
  }
  init() {
    const n = parseInt(sessionStorage.getItem(this.key) ?? "0", 10) + 1;
    sessionStorage.setItem(this.key, n.toString());
    document.getElementById(
      "sessionCount"
    ).textContent = `Recargas en esta sesión: ${n}`;
  }
}

// Module 2: cadenas/RegExp
class StringManipulator {
  static manipulateNickname(nick) {
    if (!nick) return;
    const modified = `[${nick
      .replace(/a/gi, "@")
      .replace(/e/gi, "3")
      .replace(/i/gi, "1")
      .replace(/o/gi, "0")}]`;
    console.log("Original:", nick, " -> Modificado:", modified);
    return modified;
  }
}

// Modulo 3: BOM (windows & iframes)
class WindowCommunication {
  constructor() {
    this.child = null;
  }
  init() {
    document
      .getElementById("openChildBtn")
      .addEventListener("click", () => this.openChild());
    window.addEventListener("message", (e) => this.onMessage(e));
  }
  openChild() {
    if (this.child && !this.child.closed) this.child.close();
    this.child = window.open(
      "hijo.html",
      "childWindow",
      "width=520,height=420,scrollbars=yes,resizable=yes"
    );
    this.toast("Ventana hija abierta", "info");
  }
  onMessage(event) {
    if (!event.data || event.data.type !== "nicknameUpdate") return;
    const newNick = event.data.nickname;
    document.getElementById("nickname").value = newNick;
    localStorage.setItem("userNickname", newNick);
    this.toast(`Nickname actualizado: ${newNick}`, "success");

    // mantener el color actual
    const color = document.getElementById("backgroundColor").value;
    localStorage.setItem("userBackgroundColor", color);
    document.body.style.backgroundColor = color;
  }
  toast(text, type) {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = text;
    document.getElementById("openChildBtn").parentElement.appendChild(div);
    setTimeout(() => div.remove(), 2500);
  }
}

class IframeManager {
  constructor() {
    this.iframe = document.getElementById("internalFrame");
  }
  init() {
    this.iframe.addEventListener("load", () => {
      const doc = this.iframe.contentWindow.document;
      const title = doc.getElementById("iframeTitle");
      const dyn = doc.getElementById("dynamicContent");
      if (title) {
        title.textContent = "Título modificado desde la página principal";
        title.style.color = "#e74c3c";
      }
      if (dyn) {
        dyn.textContent =
          "Este contenido fue modificado vía BOM desde la ventana padre.";
        dyn.style.fontWeight = "600";
        dyn.style.color = "#27ae60";
      }
    });
  }
}

// App bootstrap
document.addEventListener("DOMContentLoaded", () => {
  const prefs = new PreferencesManager();
  prefs.init();
  const cookies = new CookieManager();
  cookies.init();
  const session = new SessionManager();
  session.init();
  const win = new WindowCommunication();
  win.init();
  const iframe = new IframeManager();
  iframe.init();
});

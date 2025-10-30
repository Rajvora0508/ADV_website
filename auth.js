// ============================
// AROMA DE VALENCIA | AUTH JS
// ============================

// Utility: localStorage helpers
function saveAdmins(admins) {
  localStorage.setItem("aroma_admins", JSON.stringify(admins));
}

function getAdmins() {
  const raw = localStorage.getItem("aroma_admins");
  return raw ? JSON.parse(raw) : [];
}

function setLoggedIn(email) {
  localStorage.setItem("aroma_logged_in", email);
}

function getLoggedIn() {
  return localStorage.getItem("aroma_logged_in");
}

function clearLoggedIn() {
  localStorage.removeItem("aroma_logged_in");
}

// ============================
// SIGNUP PAGE LOGIC
// ============================
(function setupSignup() {
  const form = document.getElementById("signupForm");
  const msgBox = document.getElementById("signupMsg");

  if (!form) return; // Not on signup page

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      showError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    const admins = getAdmins();

    if (admins.find((a) => a.email === email)) {
      showError("This email is already registered.");
      return;
    }

    // Save new admin
    admins.push({ firstName, lastName, email, password });
    saveAdmins(admins);

    // Success message
    msgBox.style.display = "block";
    msgBox.className = "msg msg-success";
    msgBox.textContent = "Account created successfully! Redirecting to login...";

    // Redirect to login page after 1.2s
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);

    // Helper to show error message
    function showError(message) {
      msgBox.style.display = "block";
      msgBox.className = "msg msg-error";
      msgBox.textContent = message;
    }
  });
})();

// ============================
// LOGIN PAGE LOGIC
// ============================
(function setupLogin() {
  const form = document.getElementById("loginForm");
  const msgBox = document.getElementById("loginMsg");

  if (!form) return; // Not on login page

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const admins = getAdmins();
    const match = admins.find((a) => a.email === email && a.password === password);

    if (!match) {
      msgBox.style.display = "block";
      msgBox.className = "msg msg-error";
      msgBox.textContent = "Invalid email or password.";
      return;
    }

    setLoggedIn(email);
    window.location.href = "dashboard.html";
  });
})();

// ============================
// DASHBOARD PAGE PROTECTION
// ============================
(function protectDashboard() {
  if (!location.pathname.endsWith("dashboard.html")) return;

  const loggedIn = getLoggedIn();
  if (!loggedIn) {
    window.location.href = "login.html";
    return;
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      clearLoggedIn();
      window.location.href = "login.html";
    });
  }
})();

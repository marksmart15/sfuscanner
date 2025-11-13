const CLIENT_ID = "254876884927-4tlsmpci7bqonfafbk71ssubkq3kldc8.apps.googleusercontent.com";

function handleCredentialResponse(response) {
  const idToken = response.credential;
  const userData = parseJwt(idToken);

  // Save token and user info in localStorage (temporary client-side store)
  localStorage.setItem("id_token", idToken);
  localStorage.setItem("user_email", userData.email);
  localStorage.setItem("user_name", userData.name);
  localStorage.setItem("user_picture", userData.picture);

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window.atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join('')
  );
  return JSON.parse(jsonPayload);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("loginDiv"),
    { theme: "outline", size: "large" }
  );
};

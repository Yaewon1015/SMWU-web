function GetCookie(name) {
    let pairs = document.cookie.split(";");
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].trim();
        let unit = pair.split("=");
        if (unit[0] == name)
            return unescape(unit[1]);
    }
    return null;
}

function SetCookie(name, value, expireDate) {
  const cookieStr = name + "=" + escape(value) +
    ((expireDate == null) ? "" : ("; expires=" + expireDate.toUTCString())) +
    "; path=/"; // ✅ 꼭 있어야 모든 페이지에서 접근 가능!
  document.cookie = cookieStr;
}



function UpdateFixedProfile() {
  const profileBox = document.getElementById("fixed-profile");
  if (!profileBox) return;

  const user = GetCookie("loginUser");
  if (user) {
    profileBox.innerHTML = `
      <a href="mypage.html" class="profile-btn">마이페이지</a>
      <button onclick="logout()" class="profile-btn">로그아웃</button>
    `;
  } else {
    profileBox.innerHTML = `
      <a href="login.html" class="profile-btn">로그인</a>
    `;
  }
}


function logout() {
  SetCookie("loginUser", "", new Date(0));
  alert("로그아웃 되었습니다.");
  location.reload();
}

function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const confirmpw = document.getElementById("confirmpw");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expSnnText = /^[0-9]{6,}$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }

  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자 이상 20자 이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자 이상 20자 이하의 영문자, 숫자, 특수문자를 한 자 이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != confirmpw.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    confirmpw.focus();
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력하세요!");
    hp.focus();
    return false;
  }

  if (!expSnnText.test(ssn1.value) || !expSnnText.test(ssn2.value)) {
    alert("주민번호 형식이 일치하지 않습니다.");
    ssn1.focus();
    return false;
  } else {
    const numSet1 = [2, 3, 4, 5, 6, 7];
    const numSet2 = [8, 9, 2, 3, 4, 5];
    let numSum = 0;
    for (let i = 0; i <= 5; i++) {
      numSum += ssn1.value[i] * numSet1[i] + ssn2.value[i] * numSet2[i];
    }
    numSum %= 11;
    if (numSum == 10 || numSum == 11) {
      numSum = numSum - 10;
    }
    numSum = 11 - numSum;
    if (numSum != ssn2.value[6]) {
      alert("유효하지 않은 주민번호입니다.");
      ssn1.focus();
      return false;
    }
  }
  return true;
}

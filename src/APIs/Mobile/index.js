var axios = require("axios");

var mobilePostData = {
  user_id: null,
  mobile: 2,
  start_date: "2022-01-24 01:00:00",
  end_date: "2022-12-31 23:59:59",
};

var mobilePostConfig = {
  method: "post",
  url: "/visitorcard",
  headers: {
    login_token: localStorage.getItem("Token"),
    "Content-Type": "application/json",
  },
  data: mobilePostData,
};

var mobileGetConfig = {
  method: "get",
  url: "/card?card_no=",
  headers: {
    login_token: localStorage.getItem("Token"),
  },
  data: null,
};

var mobileDeleteConfig = {
  method: "delete",
  url: "/visitorcard?card_no=",
  headers: {
    login_token: localStorage.getItem("Token"),
  },
  data: null,
};

// POST: 모바일 추가
export const PostMobile = async (props) => {
  mobilePostData.user_id = props;

  await axios(mobilePostConfig)
    .then((response) => {
      alert("모바일 신청되었습니다.");
      localStorage.setItem("MobileCode", response.data["card_number"]);
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// GET: 모바일 조회
export const GETMobile = async (props) => {
  await axios(mobileGetConfig)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// DELETE: 모바일 삭제
export const DeleteMobile = async (props) => {
  mobileDeleteConfig.url = `/visitorcard?card_no=${props}`;

  await axios(mobileDeleteConfig)
    .then((response) => {
      alert("모바일 삭제되었습니다.");
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
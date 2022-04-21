import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    navigate("/articles", { replace: true });
  };

  const Admin01 = () => {
    return <Link to="./layouts/admin/Admin01">소개</Link>;
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={Admin01}>Admin01</button>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import React from "react";
import logo from "../../assets/images/favicon.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, UserState } from "../../slices/userSlice";
import { getProfilePicImageURL } from "../../utils/utilities";
import { Button } from "@mui/material";
import { designVar } from "../../common/data";

const Search = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const user = useSelector(selectUser);
  const userState = useSelector(UserState);

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="" style={{ width: 50, height: 50 }} />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <button
              style={{
                width: "20%",
                opacity: "0.7",
                backgroundColor: "#000000",
                color: "white",
                cursor: "pointer",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              Search here
            </button>
          </div>

          <div className="icon f_flex width">
            {userState?.isLoggedIn ? (
              <>
                {" "}
                {user.profile_pic ? (
                  <img
                    src={getProfilePicImageURL(user.profile_pic)}
                    alt="profile"
                    style={{ height: 48, width: 48, borderRadius: "50%" }}
                  />
                ) : (
                  <i
                    className="fa fa-user icon-circle"
                    style={{ cursor: "pointer" }}
                  ></i>
                )}
                <div className="notification">
                  <Link to="/notification">
                    <i className="fa fa-bell icon-circle"></i>
                    <span
                      style={{
                        backgroundColor: designVar.colors.iconBackgroundColor,
                      }}
                    >
                      2
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <a
                  href="https://github.com/kanha638/Price-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                      border: "solid 2px green",
                    }}
                  >
                    <i class="fa-brands fa-github"></i>
                    <span>Github</span>
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
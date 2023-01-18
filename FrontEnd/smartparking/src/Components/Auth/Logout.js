import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Button } from "react-bootstrap";

export const Logout = () => {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("login", false);
    contextData.loginAction(false);
    navigate("/login");
  };

  return (
    <div>
      <Button onClick={logout} type="button">
        Logout
      </Button>
    </div>
  );
};

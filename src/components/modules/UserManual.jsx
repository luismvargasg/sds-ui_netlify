import React from "react";

const UserManual = ({ core }) => {
  setTimeout(() => {
    core.setHome(false);
  }, 10);

  return <div>Manual de Usuario</div>;
};

export default UserManual;

import React from "react";

const User = (props) => {
  const { user } = props;
  console.log(user);
  return (
    <div className="col-lg-3 mb-5">
      <div class="card">
        <img class="card-img-top" src={user.image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">
            {user.firstName} {user.lastName}
          </h5>
          <p class="card-text">Email:{user.email}</p>
          <p class="card-text">domain:{user.domain}</p>
          <p class="card-text">University:{user.university}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
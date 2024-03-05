import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  const navigate = useNavigate();
  return <div>
    <button onClick={() => navigate('/users')}>Back</button>
    <h1>Page of user {user?.name}</h1>
    <div>
        {user?.email}
    </div>
    <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
    </div>
  </div>;
};

export default UserItemPage;

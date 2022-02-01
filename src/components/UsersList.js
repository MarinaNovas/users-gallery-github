import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers} from '../features/users/usersSlice';
import {  fetchUserData  } from "../features/user/userSlice";

import UserCardList from "./UserCardList";
import Pagination from "./Pagination";


function UsersList({ itemsPerPage }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchUsers('https://api.github.com/users?per_page=100'));
  }, []);

  useEffect(()=>{
   if(!users.length) return
   dispatch(fetchUserData(users[0].url));
  },[users,dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [users, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % users.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="users-list">
        <UserCardList currentItems={currentItems}/>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount}/>
    </div>
  );
}

export default UsersList;
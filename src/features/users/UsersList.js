import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './usersSlice';
import {  fetchUserData  } from "../user/userSlice";
import UserCard from "../../components/UserCard";
import ReactPaginate from 'react-paginate';

function UserCardList({currentItems}) {

  return (
    <div className="user-card-list">
      {
       currentItems && currentItems.map(user => (
          <UserCard
            key={user.login}
            login={user.login}
            avatar_url={user.avatar_url}
            type={user.type}
            html_url={user.html_url}
            url={user.url}
          />
        ))
      }
    </div>
  );
}

function UsersList({ itemsPerPage }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('https://api.github.com/users?per_page=100');
      const result = await response.json();
      //console.log(result);
      return result;
    }
    getUsers().then(result => {
      dispatch(setUsers(result));
    }).catch(alert);
  }, []);

  useEffect(()=>{
   if(!users.length) return
   console.log(users[0].url);
   dispatch(fetchUserData(users[0].url));
  },[users]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [users, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % users.length;
    //console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <section className="users-list" style={{marginBottom:'50px'}}>
      <>
        <UserCardList currentItems={currentItems}/>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}

          pageRangeDisplayed={9}
          //marginPagesDisplayed={2}
          pageCount={pageCount}

          previousLabel="< previous"
          renderOnZeroPageCount={null}

          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active" 
        />
      </>
    </section>
  );
}

export default UsersList;
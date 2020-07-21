import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const Conversations = () => {
  return (
    <div className="messenger">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>

      <div className="grid">
        <div id="chats" className="chats">
          <div className="header">
            <div className="leftItems">
              <div className="submenu">
                <div className="itemDropdown">
                  <div className="dropdownTitle">
                    <h5>Settings</h5>
                  </div>
                  <div className="submenuItem">Change Email</div>
                  <div className="submenuItem">Change Password</div>
                  <div className="submenuItem">Change Profile Photo</div>
                  <div className="logOut">Log Out</div>
                </div>
              </div>

              <div className="headerButton">
                <img className="userPic" src="" alt="" />
              </div>
            </div>
            <div className="title">moonchat</div>
            <div className="rightItems">
              <div className="addUser">
                <div className="itemDropdown">
                  <div className="submenuItemSearch">
                    <div className="searchUser">
                      <input
                        type="searchInput"
                        className="searchInput"
                        placeholder="Type email"
                      />
                    </div>
                  </div>
                  <div className="submenuItem">example@example.com</div>
                  <div className="submenuItemAdd">Add</div>
                </div>
              </div>

              <div className="headerButton">
                <img src="https://image.flaticon.com/icons/svg/153/153631.svg"></img>
              </div>
            </div>
          </div>
          <div className="search">
            <input
              type="searchInput"
              className="searchInput"
              placeholder="Search Messages"
            />
          </div>
          <div className="chatsList">
            <h1>Chats</h1>
            <div className="userItem">
              <img
                className="chatUserPic"
                src="https://www.iconfinder.com/icons/3898372/download/svg/512"
                alt="user"
              />
              <div className="chatInfo">
                <h1 className="chatName">Email</h1>
                <p className="chatMessage">message text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="header">
            <div className="title">Conversataion Title</div>
          </div>
          <div className="messagesContainer">
            <div className="messageIn">
              <div className="messageContainer">
                <div className="bubbleIn">I'm get</div>
              </div>
            </div>
            <div className="messageOut">
              <div className="msgSet">
                <div className="itemDropdown">
                  <div className="submenuItem">Delete Message</div>
                </div>
              </div>
              <div className="messageContainer">
                <div className="bubbleOut">I'm send</div>
              </div>
            </div>
          </div>
          <div className="messagesContainer">
            <div className="messageIn">
              <div className="messageContainer">
                <div className="bubbleIn">I'm get</div>
              </div>
            </div>
          </div>
          <div className="send">
            <input
              type="text"
              className="compose-input"
              placeholder="Type a message"
            />
            <button className="toolbar-button">Send</button>
          </div>
        </div>
      </div>
      <script src="http://code.jquery.com/jquery-latest.min.js"></script>
      <script src="index.js"></script>
    </div>
  );
};
export default Conversations;

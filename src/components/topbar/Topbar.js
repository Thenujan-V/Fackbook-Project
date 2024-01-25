import "./topbar.css"
import { IoMdChatboxes, IoMdNotifications, IoMdPerson, IoMdSearch } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <sapn className="logo">Fackbook</sapn>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <IoMdSearch  className="searchIcon"/>
                <input placeholder="search for friends posts or videos" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <IoMdPerson />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <IoMdChatboxes />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <IoMdNotifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="\assets\profilpic.jpg" alt="profilepic" className="topbarImg" />
        </div>
    </div>
  )
} 

export default Topbar  
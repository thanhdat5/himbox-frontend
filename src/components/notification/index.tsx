import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useDispatch, useSelector } from "react-redux";

const HBNotification = () => {
  const dispatch = useDispatch();

  const maskAsRead = (notificationId: string) => {
    // dispatch(markNotificationsAsReadRequest({ notificationIds: [notificationId] }))
  }

  return (
    <Dropdown className="hb-dropdown hb-notification me-md-4 me-2">
      <Dropdown.Toggle variant="link" className="hb-dropdown-toggle">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 1C8.318 1 5 3.565 5 7v4.539a3.25 3.25 0 01-.546 1.803l-2.2 3.299A1.518 1.518 0 003.519 19H8.5a3.5 3.5 0 107 0h4.982a1.518 1.518 0 001.263-2.36l-2.2-3.298A3.25 3.25 0 0119 11.539V7c0-3.435-3.319-6-7-6zM6.5 7c0-2.364 2.383-4.5 5.5-4.5s5.5 2.136 5.5 4.5v4.539c0 .938.278 1.854.798 2.635l2.199 3.299a.017.017 0 01.003.01l-.001.006-.004.006-.006.004-.007.001H3.518l-.007-.001-.006-.004-.004-.006-.001-.007.003-.01 2.2-3.298a4.75 4.75 0 00.797-2.635V7zM14 19h-4a2 2 0 104 0z"
          />
        </svg>
      </Dropdown.Toggle>
      <DropdownMenu variant="dark" className="hb-dropdown-menu">
        <div className="hb-dropdown-menu-heading">
          Notification <span>(0)</span>
        </div>
        {
          <div className="hb-dropdown-menu-content">No Notification</div>
        }
      </DropdownMenu>
    </Dropdown>
  );
};
export default HBNotification;

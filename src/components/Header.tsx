import React from "react";

export const Header = () => {
  return (
    <div className="p-2 primary-bg header">
      <div className="row w-75 mx-auto">
        <div className="col-6 d-flex">
          <div className="d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
              </svg>
            </span>
            <span>+233 54 538 0595</span>
          </div>

          <div className="ms-3 d-flex">
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
              </svg>
            </span>
            <span>wilfredwubonto@yahoo.com</span>
          </div>
        </div>
        <div className="col-6 text-end">WAAMIKAN MEDICAL SUPPLIES</div>
      </div>
    </div>
  );
};

export default Header;

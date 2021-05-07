import React, { useState, useEffect,useRef } from 'react';


const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  
  const handleClickOutside = event => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  })
  
  return (
    <div className="container" ref={container}>
      <button type="button" class="button" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div class="dropdown-wrapper">
          <ul class="dropdown-menu">
            <li class="dropdown-menu__item">Women</li>
            <li class="dropdown-menu__item">Men</li>
            <li class="dropdown-menu__item">children</li>
            <li class="dropdown-menu__item">Accessories</li>
          </ul>
        </div>
      )}
    </div>
  );
      }


export default  DropDownMenu


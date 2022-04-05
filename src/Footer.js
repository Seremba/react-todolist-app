import React from 'react'


function Footer() {
    const today = new Date();
  return (
    <footer>
        copyright &copy; , {today.getFullYear()}
    </footer>
  )
}

export default Footer
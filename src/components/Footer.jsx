import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Muhammed B. All rights reserved.
            </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
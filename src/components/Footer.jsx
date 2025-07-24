import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="mb-2">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Bashir M. All rights reserved.
            </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
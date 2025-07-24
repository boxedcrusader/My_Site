import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-4 px-4 sm:px-6 md:px-8 bg-transparent">
      <div className="container mx-auto text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Bashir M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
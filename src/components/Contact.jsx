import React from "react";
import CV from "./CV.jsx";

function Contact() {
  return (
    <div className='flex flex-col items-center py-30 w-full'>
      <h3 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center">
        Let's work together!
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-center">
        Let me turn your notes into projects
      </p>
      <div className="flex flex-row gap-4 sm:gap-6 mt-6 flex-wrap justify-center">
        <a
          href="https://www.linkedin.com/in/muhammed-bashir-864a97361"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.205 6.91a1.705 1.705 0 1 0 0-3.41a1.705 1.705 0 0 0 0 3.41M7.909 19.5V9.273H4.5V19.5h3.41Zm4.432-10.227H9.273V19.5h3.068v-6.17c.395-.642 1.077-1.33 2.045-1.33c1.364 0 1.705 1.364 1.705 2.046V19.5H19.5v-5.454c0-1.828-.797-4.773-3.75-4.773c-1.878 0-2.92.685-3.41 1.327z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="mailto:muhammedbashir384@gmail.com"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.5 7.25c0-.941.763-1.705 1.705-1.705h.533c.352 0 .695.11.983.312l.87.615v5.122L4.5 9.571zm5.114 5.1V8.194L12 9.878l2.386-1.684v5.156L12 15.114zm5.795 4.104v-3.588l4.091-3.024v6.612zm0-4.86V7.472l.87-.615c.288-.203.631-.312.983-.312h.534c.94 0 1.704.764 1.704 1.705v1.32zm-6.818 4.86v-3.588L4.5 10.842v6.612z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/boxedcrusader"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm1.815 5.11a8 8 0 0 1 5.182-1.903a7.99 7.99 0 0 1 2.531 15.572c-.405.077-.535-.159-.535-.372v-2.212a1.9 1.9 0 0 0-.546-1.473c1.78-.197 3.648-.871 3.648-3.942a3.1 3.1 0 0 0-.822-2.146a2.87 2.87 0 0 0-.08-2.114s-.666-.214-2.194.82a7.56 7.56 0 0 0-4.002 0C8.472 7.306 7.8 7.52 7.8 7.52a2.87 2.87 0 0 0-.078 2.114a3.1 3.1 0 0 0-.823 2.144c0 3.063 1.866 3.748 3.64 3.95a1.7 1.7 0 0 0-.508 1.065a1.7 1.7 0 0 1-2.325-.664a1.68 1.68 0 0 0-1.224-.823s-.78-.01-.054.487c.426.271.74.686.887 1.168c0 0 .459 1.535 2.682 1.053c.003.504.002.929 0 1.19v.2c0 .21-.126.445-.525.375A7.99 7.99 0 0 1 6.815 6.11"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <CV />
    </div>
  );
}

export default Contact;

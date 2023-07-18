const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 border border-gray-200 bg-gray-50 backdrop-blur-2xl transition-colors shadow dark:bg-gray-800 text-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:justify-between text-center">
        <span className="font-semibold text-sm sm:text-center italic">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/inzamamul-karim-087236124/"
            className="hover:underline"
          >
            Inzamamul Karim
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

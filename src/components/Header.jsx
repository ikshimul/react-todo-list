// eslint-disable-next-line react/prop-types
const Header = ({ title }) => {
  return (
    <nav className="border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80">
      <div className="justify-between h-16 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <h2 className="text-2xl font-bold italic">{title}</h2>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

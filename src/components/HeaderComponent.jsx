import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="relative flex w-full flex-wrap items-center justify-between p-2 text-neutral-500 bg-white shadow">
      <header className="flex basis-1/2 text-neutral-500">
        <h1 className="text-xl font-bold">My React Projects</h1>
      </header>
      <nav className="flex basis-1/2 text-neutral-500 items-center justify-end space-x-6">
        <div className="flex items-center justify-end space-x-6 font-semibold">
          <Link to="/">Background Color</Link>
          <Link to="/letter-counter">Letter Counter</Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;

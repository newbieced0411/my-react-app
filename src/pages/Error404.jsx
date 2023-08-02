const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h1 className="uppercase text-5xl tracking-tight font-extrabold text-primary-600 dark:text-primary-500">Error 404</h1>
          <h1 className="text-2xl tracking-tight font-bold text-primary-600 dark:text-primary-300">Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default Error404;

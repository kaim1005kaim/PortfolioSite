const Information = () => {
  return (
    <div className="min-h-screen p-12">
      <h1 className="text-2xl font-light tracking-wider mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-amber-300">INFORMATION</h1>
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="text-lg mb-4">Contact</h2>
          <p className="text-white/70">kai.etori1005@gmail.com</p>
        </div>
        <div>
          <h2 className="text-lg mb-4">Location</h2>
          <p className="text-white/70">Tokyo, Japan</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
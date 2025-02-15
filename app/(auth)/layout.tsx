const Layot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center w-full min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layot;

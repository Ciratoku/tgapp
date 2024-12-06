function Wrapper({ children }: any) {
  return (
    <div className="w-full h-screen flex flex-col gap-8 pt-8 px-4">
      {children}
    </div>
  );
}

export default Wrapper;

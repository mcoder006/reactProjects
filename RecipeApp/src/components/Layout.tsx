
export const Layout = (props: {children : React.ReactNode}) => {
  return <div className="w-screen min-h-screen text-xl md:text-2xl">
    {props.children}
  </div>;
};

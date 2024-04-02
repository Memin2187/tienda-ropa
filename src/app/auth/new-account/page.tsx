import RegisterForm from "./RegisterForm";


const PageSignUp = () => {
  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Registro
        </h2>
       <RegisterForm/>
      </div>
    </div>
  );
};

export default PageSignUp;

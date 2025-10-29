import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <div className="w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-14 text-neutral-800 dark:text-neutral-200">
      <h2 className="heading-3 md:!text-[3rem] !font-semibold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
          Formulario
        </span>{" "}
        de Contacto
      </h2>

      <ContactForm />
    </div>
  );
};

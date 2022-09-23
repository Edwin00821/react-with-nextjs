export default function MiPrimerComponente({ title = 'Hola mundo' }) {
  return (
    <h1 className="
        p-5 text-center
        text-white text-3xl font-bold underline decoration-wavy decoration-sky-500 "
    >
      {title}
    </h1>
  );
}

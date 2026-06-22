// TODO: substituir nomes e fotos dos integrantes da equipe.
const team = [
  { name: "Integrante 1", photo: "https://placehold.co/240x240/FFF6B3/1A171B?text=1" },
  { name: "Integrante 2", photo: "https://placehold.co/240x240/FFF6B3/1A171B?text=2" },
  { name: "Integrante 3", photo: "https://placehold.co/240x240/FFF6B3/1A171B?text=3" },
  { name: "Integrante 4", photo: "https://placehold.co/240x240/FFF6B3/1A171B?text=4" },
];

export function TeamSection() {
  return (
    <section id="equipe" className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Nossa Equipe</h2>
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {team.map((member) => (
            <li key={member.name} className="flex flex-col items-center text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="h-32 w-32 rounded-full border-4 border-primary object-cover shadow-sm"
              />
              <p className="mt-3 font-medium text-foreground">{member.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

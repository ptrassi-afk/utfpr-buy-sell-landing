import m1 from "@/assets/team/m1.jpg";
import m2 from "@/assets/team/m2.jpg";
import m3 from "@/assets/team/m3.jpg";
import m4 from "@/assets/team/m4.jpg";

const team = [
  { name: "Eduardo Cordeiro Pedrozo", photo: m1 },
  { name: "Higor Pelozatto Reis Vassoler", photo: m2 },
  { name: "João A. S. M. S. Trassi", photo: m3 },
  { name: "Pedro A. S. M. S. Trassi", photo: m4 },
];

export function TeamSection() {
  return (
    <section id="equipe" aria-labelledby="equipe-heading" className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="equipe-heading" className="mb-10 text-center text-3xl font-bold">Nossa Equipe</h2>
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

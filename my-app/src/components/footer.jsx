import NEES from "../assets/svgs/NEES-footer.svg";
import Sociais from "../assets/svgs/Sociais.svg";

export default function components() {
  return (
    <div className="bg-footer flex flex-col lg:flex-row justify-around text-sm items-center text-secondary py-4 mt-5">
      <img src={NEES} alt="NEES Logo" />
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <a href="./">CENTRAL DE AJUDA</a>
          <a href="./">TRABALHE CONOSCO</a>
        </div>
        <div className="flex flex-col gap-5">
          <a href="./">POLÍTICA DE PRIVACIDADE</a>
          <a href="./">TERMOS DE USO</a>
        </div>
      </div>
      <div>
        <img src={Sociais} alt="Redes Sociais" />
      </div>
    </div>
  );
}

import { useState } from "react";
const inputclasses =
  "transition-all hover:border-primary h-10 border-b border-secondary focus:outline-none outline-none focus:border-primary focus:border focus:rounded p-1";
export default function Form() {
  const [formStep, setFormStep] = useState(0);

  const handleNext = () => {
    setFormStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setFormStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleZero = () => {
    setFormStep((prev) => (prev = 0));
  };

  return (
    <form className="gap-9 flex flex-col mx-10 lg:mx-48">
      {/* PROGRESS BAR */}
      <div className="bg-stroke relative h-2.5 w-full rounded-2xl">
        <div
          className="bg-primary absolute top-0 left-0 h-full rounded-2xl"
          style={{ width: `${(formStep / 3) * 100}%` }}
        ></div>
      </div>

      {/* SESSION FORMS-TEXTS */}
      {/* IF STEP = 0 RENDER THIS -> */}
      {formStep === 0 && (
        <div>
          <h1 className="text-primary font-bold text-3xl">Bem-vindo!</h1>
          <p className="text-secondary">
            Estamos prontos para te ajudar a seguir com o próximo passo. Para
            que possamos entender melhor suas necessidades e oferecer um
            atendimento mais personalizado, convidamos você a preencher este
            breve formulário. Com ele, poderemos conhecer um pouco mais sobre
            suas preferências e proporcionar uma experiência ainda mais
            completa. O formulário é rápido e simples – leva apenas alguns
            minutos e ajudará a garantir que você receba exatamente o que
            procura.{" "}
            <strong>
              Então, vamos começar? Clique no botão abaixo e dê o primeiro
              passo!
            </strong>
          </p>
        </div>
      )}
      {/* IF STEP > 0 RENDER THIS -> */}
      {formStep > 0 && (
        <div>
          <h1 className="text-primary font-bold text-3xl">Formulário</h1>
          <p className="text-secondary">
            Leia cada campo com atenção e preencha com informações completas e
            corretas. Certifique-se de preencher todos os campos obrigatórios.
          </p>
        </div>
      )}
      {/* IF STEP = 1 RENDER THIS -> */}
      {formStep === 1 && (
        <div className="text-secondary w-full gap-7 flex flex-col">
          <div className="flex w-full gap-7 flex-wrap lg:flex-nowrap">
            <div className="flex flex-col w-full">
              <label className="font-semibold">Nome:</label>
              <input type="text" className={inputclasses} />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-semibold">Sobrenome:</label>
              <input type="text" className={inputclasses} />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Email:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Nome da Escola:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Motivo do Contato:</label>
            <input type="text" class={inputclasses} />
          </div>
        </div>
      )}
      {/* IF STEP = 2 RENDER THIS -> */}
      {formStep === 2 && (
        <div className="text-secondary w-full gap-7 flex flex-col">
          <div className="flex flex-col w-full">
            <label className="font-semibold">Dados:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Dados:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Dados:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Dados:</label>
            <input type="text" class={inputclasses} />
          </div>
        </div>
      )}
      {/* IF STEP = 3 RENDER THIS -> */}
      {formStep === 3 && (
        <div className="text-secondary w-full gap-7 flex flex-col">
          <div className="flex flex-col w-full">
            <label className="font-semibold">Confirmações:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Confirmações:</label>
            <input type="text" class={inputclasses} />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Confirmações:</label>
            <input type="text" class={inputclasses} />
          </div>
        </div>
      )}

      {/* BUTTONS SESSION */}
      {/* IF STEP > 1 RENDER THIS -> */}
      <div className="flex gap-4 w-full justify-center lg:justify-start">
        {formStep > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="border-secoundary border rounded text-secondary w-6/12 h-auto px-10 flex items-center justify-center lg:w-auto py-2 hover:bg-secondary hover:text-white transition-all"
          >
            Voltar
          </button>
        )}
        {/* IF STEP = 0 RENDER THIS -> */}
        {formStep === 0 && (
          <button
            type="button"
            onClick={handleNext}
            className="border-primary border rounded text-secondary w-6/12 h-auto px-10 flex items-center justify-center lg:w-auto py-2 hover:bg-primary hover:text-white transition-all"
          >
            Iniciar
          </button>
        )}
        {/* IF STEP = 0 RENDER THIS -> */}
        {formStep === 1 && (
          <button
            type="button"
            onClick={handleZero}
            className="border-primary border rounded text-secondary w-6/12 h-auto px-10 flex items-center justify-center lg:w-auto py-2 hover:bg-primary hover:text-white transition-all"
          >
            Cancelar
          </button>
        )}
        {/* IF STEP < 0 RENDER THIS -> */}
        {formStep < 3 && formStep != 0 && (
          <button
            type="button"
            onClick={handleNext}
            className="border-primary border rounded text-secondary w-6/12 h-auto px-10 flex items-center justify-center lg:w-auto py-2 hover:bg-primary hover:text-white transition-all"
          >
            Próximo
          </button>
        )}
        {/* IF STEP = 0 RENDER THIS -> */}
        {formStep === 3 && (
          <button
            type="submit"
            className="border-primary border rounded text-secondary w-6/12 h-auto px-10 flex items-center justify-center lg:w-auto py-2 hover:bg-primary hover:text-white transition-all"
          >
            Enviar
          </button>
        )}
      </div>
    </form>
  );
}

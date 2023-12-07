import PageHeader from "@/components/PageHeader";

export default function page() {
  return (
    <>
      <PageHeader title="Criar novos Usuarios">
        Aqui voce pode registar novos usuarios
      </PageHeader>

      <section className="mt-8">
        <form className="max-w-md">
          <div className="flex gap-4">
            <div className="form-group">
              <label htmfor="firstName">Nome</label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apelido</label>
              <input type="text" name="lastName" id="lastName" required />
            </div>
          </div>
          <div className="form-group">
            <label htmfor="firstName">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmfor="firstName">Password</label>
            <input type="password" name="password" id="password" required />
          </div>

          <div className="flex gap-4">
            <div className="form-group">
              <label htmfor="firstName">Data de Nascimento</label>
              <input type="date" name="birthday" id="birthday" required />
            </div>
            <div className="form-group">
              <label>Genero</label>
              <div>
                <label htmlFor="male">
                  M{""}
                  <input
                    type="radio"
                    value="M"
                    name="gender"
                    id="male"
                    required
                  />
                </label>
                <label htmlFor="famale" className="mx-4">
                  F{""}
                  <input
                    type="radio"
                    value="F"
                    name="gender"
                    id="famale"
                    required
                  />
                </label>
                <label htmlFor="anonymous">
                  M{""}
                  <input
                    type="radio"
                    value="X"
                    name="gender"
                    id="anonymous"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="number" name="phone" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Funcao</label>
              <select name="role" id="role" className="w-full cursor-pointer">
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>
          <button className="bg-sky-500 hover: bg-sky-600 transition-all p-2
        text-white disabled: bg-zinc-500 w-full">
            Criar Usuario
        </button>
        </form>
       
      </section>
    </>
  );
}

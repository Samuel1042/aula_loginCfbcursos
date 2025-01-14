class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callback_ok=null;
    static callback_nao_ok=null;
    static config = {
        cor: "#048",
        img: "./logo-sombreado.png"
    };
    static endpoint = "https://92df51a3-c438-47fb-b1ea-9b1bc89d4570-00-3atg8tkld03dc.kirk.replit.dev/";

    static Login = (callback_ok,callback_nao_ok,config = null) => {
        if (config != null) {
            this.config = { ...this.config, ...config };
        }
    this.callback_ok=()=>{callback_ok()};
    this.callback_nao_ok=()=>{callback_nao_ok()};
        this.estilocss = 
            ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0;left: 0;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}" +
            ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}" +
            ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}" +
            ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}" +
            ".logoLogin img{width: 70%;box-sizing: inherit;}" +
            ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}" +
            ".campoLogin label{font-size: 18px;}" +
            ".campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;}" +
            ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;gap: 10px;box-sizing: inherit;}" +
            `.botoesLogin button{cursor: pointer;background-color: var(--botao-cor, #048);color: #fff;border-radius: 5px;padding: 10px;width: calc(50% - 5px); box-sizing: border-box;text-align: center;}`;

        const style_estilo = document.createElement("style");
        style_estilo.setAttribute("id", "id_estiloLogin");
        style_estilo.setAttribute("rel", "stylesheet");
        style_estilo.setAttribute("type", "text/css");
        style_estilo.innerHTML = this.estilocss;
        document.head.appendChild(style_estilo);

        const corpo = document.body;

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id", "fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id", "elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLogin_Email = document.createElement("div");
        campoLogin_Email.setAttribute("id", "campoLogin_Email");
        campoLogin_Email.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLogin_Email);

        const label_username = document.createElement("label");
        label_username.innerHTML = "Email";
        campoLogin_Email.appendChild(label_username);

        const input_Username = document.createElement("input");
        input_Username.setAttribute("id", "f_email");
        input_Username.setAttribute("type", "text");
        input_Username.setAttribute("name", "f_email");
        campoLogin_Email.appendChild(input_Username);

        const campoLogin_Senha = document.createElement("div");
        campoLogin_Senha.setAttribute("id", "campoLogin_Senha");
        campoLogin_Senha.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLogin_Senha);

        const label_Senha = document.createElement("label");
        label_Senha.innerHTML = "Senha";
        campoLogin_Senha.appendChild(label_Senha);

        const input_Senha = document.createElement("input");
        input_Senha.setAttribute("id", "f_senha");
        input_Senha.setAttribute("type", "password");
        input_Senha.setAttribute("name", "f_senha");
        campoLogin_Senha.appendChild(input_Senha);

        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("class", "botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login = document.createElement("button");
        btn_login.setAttribute("id", "btn_login");
        btn_login.innerHTML = "Login";
        btn_login.addEventListener("click", ()=>{
            this.verificar_Login();
        });
        botoesLogin.appendChild(btn_login);

        const btn_cancelar = document.createElement("button");
        btn_cancelar.setAttribute("id", "btn_cancelar");
        btn_cancelar.innerHTML = "Cancelar";
        btn_cancelar.addEventListener("click", ()=>{
            this.fechar();
        })
        botoesLogin.appendChild(btn_cancelar);

        const logoLogin = document.createElement("div");
        logoLogin.setAttribute("id", "logoLogin");
        logoLogin.setAttribute("class", "logoLogin");
        baseLogin.appendChild(logoLogin);

        const img_logoLogin = document.createElement("img");
        img_logoLogin.setAttribute("src", this.config.img);
        img_logoLogin.setAttribute("title", "CFBCursos");
        logoLogin.appendChild(img_logoLogin);


    };

    static verificar_Login=()=>{
        const mat=document.getElementById("f_email").value;
        const pas=document.getElementById("f_senha").value;

        const endpoint = `https://92df51a3-c438-47fb-b1ea-9b1bc89d4570-00-3atg8tkld03dc.kirk.replit.dev/?matricula=${mat}&senha=${pas}`;


        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    this.logado = true;
                    this.matlogado = mat;
                    this.nomelogado = res.nome;
                    this.acessologado = res.acesso;
                    this.callback_ok();
                    this.fechar();
                } else {
                    this.logado = false;
                    this.matlogado = null;
                    this.nomelogado = null;
                    this.acessologado = null;
                    this.callback_nao_ok();
                }
            });

        // if(mat == "123" && pas=="321"){
        //     return true;
        // }else {
        //     return false;
        // }
        
    }

    static fechar=()=>{
        const fundoLogin=document.getElementById("fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin=document.getElementById("id_estiloLogin");
        id_estiloLogin.remove();
    }
}

// export { Login };


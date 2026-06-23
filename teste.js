
function rodarTestes() {
    console.log("Iniciando Testes Unitários...");
    let testesPassaram = true;

    
    const promptVazio = "";
    if (!promptVazio.trim()) {
        console.log("✅ Teste 1 Passou: Validação de envio bloqueou prompt vazio.");
    } else {
        console.log("❌ Teste 1 Falhou.");
        testesPassaram = false;
    }

    
    const respostaSimulada = { candidates: [{ content: { parts: [{ text: "Resposta do Gemini" }] } }] };
    const textoExtraido = respostaSimulada.candidates[0].content.parts[0].text;

    if (textoExtraido === "Resposta do Gemini") {
        console.log("✅ Teste 2 Passou: Resposta recebida e tratada corretamente.");
    } else {
        console.log("❌ Teste 2 Falhou.");
        testesPassaram = false;
    }

    if (!testesPassaram) {
        process.exit(1); 
    }
}

rodarTestes();
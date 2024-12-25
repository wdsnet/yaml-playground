// Inicializa o editor Ace
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai"); // Tema do editor
editor.getSession().setMode("ace/mode/yaml"); // Define o modo YAML

// Função para validar o YAML
function validateYAML() {
    var yamlText = editor.getValue();  // Obtém o conteúdo do editor
    try {
        var parsedData = jsyaml.load(yamlText);  // Tenta fazer o parse do YAML
        document.getElementById("output").textContent = JSON.stringify(parsedData, null, 2); // Exibe o YAML convertido para JSON
    } catch (e) {
        document.getElementById("output").textContent = "Error: Invalid YAML\n" + e.message; // Exibe erro se houver
    }
}

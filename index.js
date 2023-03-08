const theme = Blockly.Theme.defineTheme('dark', {
    'base': Blockly.Themes.Classic,
    'componentStyles': {
        'workspaceBackgroundColour': '#1e1e1e',
        'toolboxBackgroundColour': 'blackBackground',
        'toolboxForegroundColour': '#fff',
        'flyoutBackgroundColour': '#252526',
        'flyoutForegroundColour': '#ccc',
        'flyoutOpacity': 1,
        'scrollbarColour': '#797979',
        'insertionMarkerColour': '#fff',
        'insertionMarkerOpacity': 0.3,
        'scrollbarOpacity': 0.4,
        'cursorColour': '#d0d0d0',
        'blackBackground': '#333',
    }
});

const toolbox = `<xml id="toolbox" style="display: none">
    <category name="Logic" categorystyle="logic_category">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
    </category>
    <category name="Loops" categorystyle="loop_category">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_flow_statements"></block>
    </category>
    <category name="Math" categorystyle="math_category">
        <block type="math_number" gap="32">
            <field name="NUM">123</field>
        </block>
        <block type="math_arithmetic">
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="math_single">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">9</field>
                </shadow>
            </value>
        </block>
        <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="Text" categorystyle="text_category">
        <block type="text"></block>
        <block type="text_multiline"></block>
        <label text="Input/Output:" web-class="ioLabel"></label>
        <block type="text_print">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_prompt_ext">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
    </category>
    <sep></sep>
    <category name="Variables" categorystyle="variable_category" custom="VARIABLE"></category>
    <category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"></category>
</xml>`

const workspace = Blockly.inject('blockly-editor', {
    theme: theme,
    toolbox: toolbox,
    grid: {
        snap: true,
        spacing: 25,
    },
});

const editor = monaco.editor.create(document.getElementById("monaco-editor"), {
    value: "",
    language: "javascript",
    theme: "vs-dark",
});

window.addEventListener('resize', () => {
    editor.layout();
});

workspace.addChangeListener(() => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    editor.setValue(code);
});

const data = { "blocks": { "languageVersion": 0, "blocks": [{ "type": "text_print", "id": "1", "x": 50, "y": 50, "inputs": { "TEXT": { "shadow": { "type": "text", "id": "2", "fields": { "TEXT": "hello world" } } } } }] } }

Blockly.serialization.workspaces.load(data, workspace);